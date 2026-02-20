/**
 * AIPhysician Page
 * Agentic chat interface for interacting with the AI Physician
 */

import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from '../../../components/common/ChatMessage';
import SystemMessage from '../../../components/common/SystemMessage';
import StatusIndicator from '../../../components/common/StatusIndicator';
import ThinkingIndicator from '../../../components/common/ThinkingIndicator';
import ChatInput from '../../../components/common/ChatInput';
import {
  startSymptomCheckSession,
  sendMessageStream,
  type Message,
} from '../../../services/aiPhysicianService';

/** Extends Message with optional reasoning captured from <think>…</think> blocks */
interface ChatEntry extends Message {
  thinkContent?: string;
}

/**
 * Parse raw accumulated stream text and split into thinking vs response content.
 * Handles partial stream (think block still open) as well as complete blocks.
 */
function parseStreamContent(raw: string): {
  thinkContent: string;
  isThinkDone: boolean;
  responseContent: string;
} {
  // Complete <think>…</think> block present
  const complete = /<think>([\s\S]*?)<\/think>([\s\S]*)/s.exec(raw);
  if (complete) {
    return {
      thinkContent: complete[1].trim(),
      isThinkDone: true,
      responseContent: complete[2].trimStart(),
    };
  }
  // Think block opened but not yet closed
  const open = /^<think>([\s\S]*)/s.exec(raw);
  if (open) {
    return { thinkContent: open[1], isThinkDone: false, responseContent: '' };
  }
  // No think tags — plain response
  return { thinkContent: '', isThinkDone: false, responseContent: raw };
}

const AIPhysician: React.FC = () => {
  const [messages, setMessages] = useState<ChatEntry[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [streamingMessage, setStreamingMessage] = useState<string>('');
  const [streamingThinking, setStreamingThinking] = useState<string>('');
  const [isInThinkPhase, setIsInThinkPhase] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  // Accumulates raw SSE text including <think> tags for parsing
  const rawAccumulatedRef = useRef<string>('');

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage, statusMessage]);

  // Initialize session on component mount
  useEffect(() => {
    const initSession = async () => {
      try {
        setIsInitializing(true);
        const response = await startSymptomCheckSession();
        setSessionId(response.session_id);
        setMessages([
          {
            role: 'assistant',
            content: response.message,
            timestamp: new Date().toISOString(),
          },
        ]);
        setError(null);
      } catch (err) {
        setError('Failed to start session. Please try again.');
        console.error('Failed to initialize session:', err);
      } finally {
        setIsInitializing(false);
      }
    };

    initSession();
  }, []);

  // Handle sending a message
  const handleSendMessage = async (messageText: string) => {
    if (!sessionId || isStreaming) return;

    // Add user message to chat
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

    // Send message and handle streaming response
    await sendMessageStream(
      sessionId,
      messageText,
      // onToken — parse think vs response content on every new token
      (token: string) => {
        rawAccumulatedRef.current += token;
        const { thinkContent, isThinkDone, responseContent } = parseStreamContent(
          rawAccumulatedRef.current
        );

        setStreamingThinking(thinkContent);
        setIsInThinkPhase(!isThinkDone && thinkContent.length > 0);
        setStreamingMessage(responseContent);

        // Clear status message once tokens start arriving
        if (statusMessage) setStatusMessage(null);
      },
      // onComplete
      () => {
        const { thinkContent, responseContent } = parseStreamContent(rawAccumulatedRef.current);
        const finalContent = responseContent || rawAccumulatedRef.current;

        if (finalContent) {
          const assistantMessage: ChatEntry = {
            role: 'assistant',
            content: finalContent,
            thinkContent: thinkContent || undefined,
            timestamp: new Date().toISOString(),
          };
          setMessages((prev) => [...prev, assistantMessage]);
        }
        setStreamingMessage('');
        setStreamingThinking('');
        setIsInThinkPhase(false);
        setStatusMessage(null);
        setIsStreaming(false);
        rawAccumulatedRef.current = '';
      },
      // onError
      (errorMsg: string) => {
        setError(errorMsg);
        setStreamingMessage('');
        setStreamingThinking('');
        setIsInThinkPhase(false);
        setStatusMessage(null);
        setIsStreaming(false);
        rawAccumulatedRef.current = '';
      },
      // onStatus — Handle status messages from backend
      (status: string) => {
        setStatusMessage(status);
      }
    );
  };

  // Handle starting a new session
  const handleNewSession = async () => {
    setMessages([]);
    setSessionId(null);
    setError(null);
    setStreamingThinking('');
    setIsInThinkPhase(false);
    setIsInitializing(true);
    rawAccumulatedRef.current = '';

    try {
      const response = await startSymptomCheckSession();
      setSessionId(response.session_id);
      setMessages([
        {
          role: 'assistant',
          content: response.message,
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (err) {
      setError('Failed to start new session. Please try again.');
      console.error('Failed to start new session:', err);
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-background-dark">
      {/* Header */}
      <div className="shrink-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Vaidya Icon */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-text-light dark:text-text-dark">
                Vaidya
              </h1>
              <p className="text-xs text-subtext-light dark:text-subtext-dark">
                {sessionId ? 'AI Health Assistant' : 'Initializing...'}
              </p>
            </div>
          </div>

          {/* New Session Button */}
          {sessionId && !isInitializing && messages.length > 1 && (
            <button
              onClick={handleNewSession}
              disabled={isStreaming}
              className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
                       text-text-light dark:text-text-dark transition-all duration-200 text-sm font-medium
                       disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              New
            </button>
          )}
        </div>
      </div>

      {/* Messages Container */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-6 py-8 bg-white dark:bg-background-dark"
      >
        {isInitializing ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-3"></div>
              <p className="text-sm text-subtext-light dark:text-subtext-dark">
                Initializing Vaidya...
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Welcome State */}
            {messages.length === 1 && (
              <div className="flex flex-col items-center justify-center h-full max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-3">
                    What can I do for you?
                  </h2>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">
                    I'm Vaidya, your AI health assistant. I can help you with symptom analysis, health guidance, and more.
                  </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl mb-6">
                  <button
                    onClick={() => handleSendMessage("I want to check my symptoms")}
                    disabled={isStreaming}
                    className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary 
                             dark:hover:border-primary transition-all duration-200 text-left group
                             hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">Check symptoms</h3>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">Analyze your symptoms and get guidance</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSendMessage("I need health advice")}
                    disabled={isStreaming}
                    className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-secondary
                             dark:hover:border-secondary transition-all duration-200 text-left group
                             hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">Health advice</h3>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">Get personalized health recommendations</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSendMessage("What medications should I know about?")}
                    disabled={isStreaming}
                    className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-accent
                             dark:hover:border-accent transition-all duration-200 text-left group
                             hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">Medication info</h3>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">Learn about medications and interactions</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSendMessage("Tell me about preventive health")}
                    disabled={isStreaming}
                    className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary
                             dark:hover:border-primary transition-all duration-200 text-left group
                             hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-light dark:text-text-dark mb-1">Preventive care</h3>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">Learn about staying healthy</p>
                      </div>
                    </div>
                  </button>
                </div>

                <p className="text-xs text-subtext-light dark:text-subtext-dark text-center max-w-lg">
                  <span className="inline-block mr-1">⚕️</span>
                  Vaidya is an AI assistant and does not replace professional medical advice.
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && <SystemMessage message={error} type="error" />}

            {/* Chat Messages - Only show when conversation started */}
            {messages.length > 1 && (
              <div className="max-w-4xl mx-auto">
                {messages.map((msg, index) => (
                  <ChatMessage
                    key={index}
                    role={msg.role}
                    content={msg.content}
                    timestamp={msg.timestamp}
                    thinkContent={msg.thinkContent}
                  />
                ))}

                {/* Status Indicator - Show when backend is processing before streaming starts */}
                {isStreaming && statusMessage && !streamingMessage && !streamingThinking && (
                  <StatusIndicator message={statusMessage} />
                )}

                {/* Thinking Indicator - live while model is in <think> phase */}
                {isStreaming && (streamingThinking || isInThinkPhase) && (
                  <ThinkingIndicator content={streamingThinking} isStreaming={isInThinkPhase} />
                )}

                {/* Streaming response content (after think block) */}
                {isStreaming && streamingMessage && (
                  <ChatMessage role="assistant" content={streamingMessage} />
                )}

                {/* Typing Indicator - nothing received yet and no status/think */}
                {isStreaming && !streamingMessage && !statusMessage && !streamingThinking && (
                  <ChatMessage role="assistant" content="" isTyping={true} />
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      {!isInitializing && (
        <div className="shrink-0">
          <ChatInput
            onSend={handleSendMessage}
            disabled={isStreaming || !sessionId}
            placeholder={
              isStreaming
                ? 'Vaidya is responding...'
                : 'Ask anything about your health...'
            }
          />
        </div>
      )}
    </div>
  );
};

export default AIPhysician;
