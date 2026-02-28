
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Stethoscope, Lightbulb, FlaskConical, ShieldCheck,
} from 'lucide-react';
import ChatMessage from '../../../components/common/ChatMessage';
import SystemMessage from '../../../components/common/SystemMessage';
import StatusIndicator from '../../../components/common/StatusIndicator';
import ThinkingIndicator from '../../../components/common/ThinkingIndicator';
import ChatInput from '../../../components/common/ChatInput';
import VaidyaSidebar from '../../../components/AIPhysician/VaidyaSidebar';
import EmergencyBanner from '../../../components/common/EmergencyBanner';
import {
  startSymptomCheckSession,
  sendMessageStream,
  loadSession,
  type Message,
  type ERHospital,
  type EmergencyNumbers,
  type EmergencyEventData,
} from '../../../services/aiPhysicianService';
import { requestGeolocationSilent, type UserLocation } from '../../../utils/geolocation';


interface ChatEntry extends Message {
  thinkContent?: string;
  /** Hospital cards attached to an emergency response */
  erHospitals?: ERHospital[];
  erEmergencyNumbers?: EmergencyNumbers;
  isEmergencyResponse?: boolean;
}

function parseStreamContent(raw: string): {
  thinkContent: string;
  isThinkDone: boolean;
  responseContent: string;
} {
  const complete = /<think>([\s\S]*?)<\/think>([\s\S]*)/s.exec(raw);
  if (complete) {
    return {
      thinkContent: complete[1].trim(),
      isThinkDone: true,
      responseContent: complete[2].trimStart(),
    };
  }
  const open = /^<think>([\s\S]*)/s.exec(raw);
  if (open) {
    return { thinkContent: open[1], isThinkDone: false, responseContent: '' };
  }
  return { thinkContent: '', isThinkDone: false, responseContent: raw };
}

const QUICK_ACTIONS = [
  {
    label: 'Check Symptoms',
    prompt: 'I want to check my symptoms',
    Icon: Stethoscope,
    color: '#4d9fd6',
    bg: 'rgba(0,90,156,0.18)',
  },
  {
    label: 'Health Advice',
    prompt: 'I need health advice',
    Icon: Lightbulb,
    color: '#4cb9a6',
    bg: 'rgba(76,185,166,0.15)',
  },
  {
    label: 'Medication Info',
    prompt: 'What medications should I know about?',
    Icon: FlaskConical,
    color: '#f28f3b',
    bg: 'rgba(242,143,59,0.15)',
  },
  {
    label: 'Preventive Care',
    prompt: 'Tell me about preventive health',
    Icon: ShieldCheck,
    color: '#e05c7e',
    bg: 'rgba(224,93,126,0.15)',
  },
];

// Workflow starter prompts — keyed to workflow IDs from WorkflowsPage
const WORKFLOW_PROMPTS: Record<string, string> = {
  'symptom-check': 'I want to check my symptoms',
  'medication-review': 'I want to review my medications for any dangerous interactions',
  'preventive-care': 'I want personalised preventive care recommendations',
  'find-specialist': 'I need help finding a specialist or healthcare provider near me',
  'medical-history': 'Can you summarise my medical history and past consultations?',
  'mental-health': 'I want to talk about my mental health and well-being',
};

const AIPhysician: React.FC = () => {
  const [searchParams] = useSearchParams();
  const workflowParam = searchParams.get('workflow');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streamingMessage, setStreamingMessage] = useState('');
  const [streamingThinking, setStreamingThinking] = useState('');
  const [isInThinkPhase, setIsInThinkPhase] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [historyRefreshTrigger, setHistoryRefreshTrigger] = useState(0);
  const [messages, setMessages] = useState<ChatEntry[]>([]);
  // ── Emergency mode state ──────────────────────────────────────────────────
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [isSearchingHospitals, setIsSearchingHospitals] = useState(false);
  const [emergencyNumbers, setEmergencyNumbers] = useState<EmergencyNumbers | null>(null);
  const [currentLocation, setCurrentLocation] = useState<UserLocation | null>(null);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const rawAccumulatedRef = useRef('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (chatStarted) scrollToBottom();
  }, [messages, streamingMessage, statusMessage, chatStarted]);

  // Create a new backend session and return its ID (does NOT set state itself)
  const createSession = async (): Promise<string | null> => {
    try {
      setIsInitializing(true);
      const response = await startSymptomCheckSession();
      setSessionId(response.session_id);
      setError(null);
      return response.session_id;
    } catch {
      setError('Failed to start session. Please try again.');
      return null;
    } finally {
      setIsInitializing(false);
    }
  };

  // Auto-trigger a workflow starter prompt when navigating from WorkflowsPage
  const workflowAutoSentRef = useRef(false);
  useEffect(() => {
    if (workflowParam && !workflowAutoSentRef.current) {
      const prompt = WORKFLOW_PROMPTS[workflowParam];
      if (prompt) {
        workflowAutoSentRef.current = true;
        handleSendMessage(prompt);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workflowParam]);

  // ── New chat ─────────────────────────────────────────────────────────────
  const handleNewSession = () => {
    setChatStarted(false);
    setMessages([]);
    setSessionId(null);
    setError(null);
    setStreamingMessage('');
    setStreamingThinking('');
    setIsInThinkPhase(false);
    setStatusMessage(null);
    rawAccumulatedRef.current = '';
    setHistoryRefreshTrigger((n) => n + 1);
    // Reset emergency state for new session
    setIsEmergencyMode(false);
    setIsSearchingHospitals(false);
    setEmergencyNumbers(null);
    setCurrentLocation(null);
    setBannerDismissed(false);
  };

  // â”€â”€ Load historical session ââ”€â”€â”€â”€â”€â”€â”€â”€
  const handleLoadSession = async (loadSessionId: string) => {
    setIsInitializing(true);
    setChatStarted(false);
    setMessages([]);
    setError(null);
    rawAccumulatedRef.current = '';

    try {
      const details = await loadSession(loadSessionId);
      setSessionId(details.session_id);
      const chatMessages: ChatEntry[] = details.messages.map((msg) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
        timestamp: msg.timestamp,
      }));
      setMessages(chatMessages);
      setChatStarted(true);
    } catch {
      setError('Failed to load session. Please try again.');
    } finally {
      setIsInitializing(false);
    }
  };

  // ── Send message ──────────────────────────────────────────────────────────
  const handleSendMessage = async (messageText: string) => {
    if (isStreaming) return;

    // Lazily create a session on the very first message
    let activeSessionId = sessionId;
    if (!activeSessionId) {
      activeSessionId = await createSession();
      if (!activeSessionId) return; // session creation failed
    }

    if (!chatStarted) setChatStarted(true);

    const userMessage: ChatEntry = {
      role: 'user',
      content: messageText,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsStreaming(true);
    setStreamingMessage('');
    setStreamingThinking('');
    setIsInThinkPhase(false);
    setStatusMessage(null);
    setError(null);
    rawAccumulatedRef.current = '';

    // Use cached location or attempt silent geolocation for every message
    // (backend needs location to search ER hospitals on ER_NOW trigger)
    const locationToSend = currentLocation ?? (await requestGeolocationSilent(5000));
    if (locationToSend && !currentLocation) {
      setCurrentLocation(locationToSend);
    }

    // Track whether STATUS:EMERGENCY_DETECTED was seen in this response
    let emergencyDataReceived: EmergencyEventData | undefined;

    await sendMessageStream(
      activeSessionId,
      messageText,
      // onToken
      (token) => {
        rawAccumulatedRef.current += token;
        const { thinkContent, isThinkDone, responseContent } = parseStreamContent(
          rawAccumulatedRef.current
        );
        setStreamingThinking(thinkContent);
        setIsInThinkPhase(!isThinkDone && thinkContent.length > 0);
        setStreamingMessage(responseContent);
        if (statusMessage) setStatusMessage(null);
        // Once ER response starts streaming, hospital search is done
        if (isEmergencyMode) setIsSearchingHospitals(false);
      },
      // onComplete
      (emergencyData) => {
        emergencyDataReceived = emergencyData;
        const { thinkContent, responseContent } = parseStreamContent(rawAccumulatedRef.current);
        const finalContent = responseContent || rawAccumulatedRef.current;
        if (finalContent) {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: finalContent,
              thinkContent: thinkContent || undefined,
              timestamp: new Date().toISOString(),
              // Attach ER data to the message for card rendering
              ...(emergencyData
                ? {
                    isEmergencyResponse: true,
                    erHospitals: emergencyData.er_hospitals,
                    erEmergencyNumbers: emergencyData.er_emergency_numbers,
                  }
                : {}),
            },
          ]);
        }
        // Update emergency numbers for the banner once we have them
        if (emergencyData?.er_emergency_numbers) {
          setEmergencyNumbers(emergencyData.er_emergency_numbers);
        }
        setStreamingMessage('');
        setStreamingThinking('');
        setIsInThinkPhase(false);
        setStatusMessage(null);
        setIsStreaming(false);
        setIsSearchingHospitals(false);
        rawAccumulatedRef.current = '';
        setHistoryRefreshTrigger((n) => n + 1);
      },
      // onError
      (errorMsg) => {
        setError(errorMsg);
        setStreamingMessage('');
        setStreamingThinking('');
        setIsInThinkPhase(false);
        setStatusMessage(null);
        setIsStreaming(false);
        setIsSearchingHospitals(false);
        rawAccumulatedRef.current = '';
      },
      // onStatus
      (status) => setStatusMessage(status),
      // onEmergency — STATUS:EMERGENCY_DETECTED received
      (emergencyMessage) => {
        setIsEmergencyMode(true);
        setIsSearchingHospitals(true);
        setBannerDismissed(false);
        setStatusMessage(emergencyMessage);
        // Silently request geolocation if we don't already have it
        if (!locationToSend) {
          requestGeolocationSilent(8000).then((loc) => {
            if (loc) setCurrentLocation(loc);
          });
        }
      },
      // location
      locationToSend
    );
  };

  // Render 
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      {/* Sidebar */}
      <VaidyaSidebar
        onNewChat={handleNewSession}
        onLoadSession={handleLoadSession}
        currentSessionId={sessionId}
        refreshTrigger={historyRefreshTrigger}
      />

      {/* Main content area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0d1117]">

        {/* ── Emergency Banner (sticky, shown when ER_NOW triggered) ── */}
        {isEmergencyMode && !bannerDismissed && (
          <EmergencyBanner
            emergencyNumbers={emergencyNumbers}
            isSearching={isSearchingHospitals}
            onDismiss={() => setBannerDismissed(true)}
          />
        )}

        {/* Initialising */}
        {isInitializing && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-3" />
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
                Initializing Vaidya...
              </p>
            </div>
          </div>
        )}

        {/* Hero state */}
        {!isInitializing && !chatStarted && (
          <div className="flex-1 flex flex-col items-center justify-center px-6 pb-10 overflow-y-auto vaidya-scrollbar">
            <div className="w-full max-w-3xl flex flex-col items-center">

              {/* ── Hero heading ── */}
              <h1
                className="font-bold text-white text-center vaidya-hero-anim"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '2rem' }}
              >
                What can I do for you?
              </h1>

              {/* ── Unified chat input card (textarea + toolbar + tools row) ── */}
              <div className="w-full mb-6 vaidya-hero-anim vaidya-hero-anim-delay-1">
                <ChatInput
                  variant="hero"
                  onSend={handleSendMessage}
                  disabled={isStreaming || isInitializing}
                  placeholder="Assign a task or ask anything..."
                />
              </div>

              {/* ── Horizontal pill workflow chips ── */}
              <div className="flex items-center gap-2.5 flex-wrap justify-center vaidya-hero-anim vaidya-hero-anim-delay-2">
                {QUICK_ACTIONS.map(({ label, prompt, Icon, color, bg }) => (
                  <button
                    key={label}
                    onClick={() => handleSendMessage(prompt)}
                    disabled={isStreaming || isInitializing}
                    className="vaidya-pill group"
                  >
                    <span
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors duration-150"
                      style={{ background: bg }}
                    >
                      <Icon size={11} style={{ color }} strokeWidth={2.2} />
                    </span>
                    <span className="text-[13px] font-medium" style={{ color: 'rgba(255,255,255,0.82)' }}>
                      {label}
                    </span>
                  </button>
                ))}

                {/* More pill */}
                <button
                  className="vaidya-pill"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  <span className="text-[13px] font-medium">More ↗</span>
                </button>
              </div>

              {/* ── Disclaimer ── */}
              <p
                className="text-sm mt-8 text-center leading-relaxed vaidya-hero-anim vaidya-hero-anim-delay-3"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                ⚕ Vaidya is an AI assistant and does not replace professional medical advice.
              </p>

            </div>
          </div>
        )}

        {/* Active chat */}
        {!isInitializing && chatStarted && (
          <>
            {/* Scrollable messages */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto">
              <div className="max-w-4xl mx-auto px-4 py-6">
                {error && <SystemMessage message={error} type="error" />}

                {messages.map((msg, idx) => (
                  <ChatMessage
                    key={idx}
                    role={msg.role}
                    content={msg.content}
                    timestamp={msg.timestamp}
                    thinkContent={msg.thinkContent}
                    erHospitals={msg.erHospitals}
                    erEmergencyNumbers={msg.erEmergencyNumbers}
                    isEmergencyResponse={msg.isEmergencyResponse}
                  />
                ))}

                {/* Status while waiting for first token */}
                {isStreaming && statusMessage && !streamingMessage && !streamingThinking && (
                  <StatusIndicator
                    message={statusMessage}
                    variant={isEmergencyMode ? 'emergency' : 'normal'}
                  />
                )}

                {/* Live thinking block */}
                {isStreaming && (streamingThinking || isInThinkPhase) && (
                  <ThinkingIndicator content={streamingThinking} isStreaming={isInThinkPhase} />
                )}

                {/* Live response tokens */}
                {isStreaming && streamingMessage && (
                  <ChatMessage role="assistant" content={streamingMessage} />
                )}

                {/* Typing dots */}
                {isStreaming && !streamingMessage && !statusMessage && !streamingThinking && (
                  <ChatMessage role="assistant" content="" isTyping={true} />
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Sticky bottom input */}
            <div className="shrink-0">
              <ChatInput
                onSend={handleSendMessage}
                disabled={isStreaming || !sessionId}
                placeholder={isStreaming ? 'Vaidya is responding' : 'Ask anything about your health'}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AIPhysician;
