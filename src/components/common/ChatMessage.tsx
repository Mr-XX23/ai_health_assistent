/**
 * ChatMessage Component
 * Displays individual chat messages with appropriate styling.
 * Emergency responses include ERHospitalCard components for actionable hospital info.
 */

import React, { useState } from 'react';
import ERHospitalCard from './ERHospitalCard';
import type { ERHospital, EmergencyNumbers } from '../../services/aiPhysicianService';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  isTyping?: boolean;
  /** Reasoning text from <think>...</think> blocks — shown in a collapsible section */
  thinkContent?: string;
  /** ER hospital cards for emergency responses */
  erHospitals?: ERHospital[];
  erEmergencyNumbers?: EmergencyNumbers;
  isEmergencyResponse?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  role, content, timestamp, isTyping, thinkContent,
  erHospitals, erEmergencyNumbers, isEmergencyResponse,
}) => {
  const [reasoningOpen, setReasoningOpen] = useState(false);
  const isUser = role === 'user';

  return (
    <div className={`flex gap-3 mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar - Only show for assistant */}
      {!isUser && (
        <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
          <svg
            className="w-5 h-5 text-white"
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
      )}

      {/* Message Content */}
      <div className={`max-w-[75%] ${isUser ? 'order-first' : ''}`}>
        {/* Message Bubble */}
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? 'bg-primary text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-text-light dark:text-text-dark'
          }`}
        >
          {isTyping ? (
            <div className="flex items-center gap-1 py-1">
              <span className="w-2 h-2 bg-primary dark:bg-secondary rounded-full animate-bounce"></span>
              <span
                className="w-2 h-2 bg-primary dark:bg-secondary rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></span>
              <span
                className="w-2 h-2 bg-primary dark:bg-secondary rounded-full animate-bounce"
                style={{ animationDelay: '0.4s' }}
              ></span>
            </div>
          ) : (
            <p
              className={`text-sm leading-relaxed whitespace-pre-wrap ${
                isUser ? 'text-white' : 'text-text-light dark:text-text-dark'
              }`}
            >
              {content}
            </p>
          )}
        </div>

        {/* Collapsible reasoning (only for assistant messages with think content) */}
        {!isUser && !isTyping && thinkContent && (
          <div className="mt-2 rounded-xl border border-violet-200 dark:border-violet-800 overflow-hidden">
            <button
              onClick={() => setReasoningOpen((o) => !o)}
              className="w-full flex items-center gap-2 px-3 py-2 bg-violet-50 dark:bg-violet-950/40 hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors text-left"
            >
              <svg
                className={`w-3 h-3 text-violet-500 transition-transform duration-200 ${reasoningOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <svg
                className="w-3 h-3 text-violet-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs font-medium text-violet-700 dark:text-violet-300">
                {reasoningOpen ? 'Hide reasoning' : 'View reasoning'}
              </span>
            </button>
            {reasoningOpen && (
              <div className="px-4 py-3 bg-white dark:bg-gray-900 border-t border-violet-100 dark:border-violet-900 max-h-48 overflow-y-auto">
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-wrap break-words">
                  {thinkContent}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ER Hospital Cards — rendered below the emergency response text */}
        {!isUser && !isTyping && isEmergencyResponse && erHospitals && erHospitals.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
              Nearest Emergency Hospitals
            </p>
            {erHospitals.map((hospital, idx) => (
              <ERHospitalCard
                key={hospital.place_id || idx}
                hospital={hospital}
                rank={idx + 1}
                isNearest={idx === 0}
              />
            ))}
            {/* Ambulance call button at bottom */}
            {erEmergencyNumbers?.ambulance && (
              <a
                href={`tel:${erEmergencyNumbers.ambulance}`}
                className="flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-colors shadow-lg"
                aria-label={`Call ambulance: ${erEmergencyNumbers.ambulance}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Ambulance — {erEmergencyNumbers.ambulance}
              </a>
            )}
          </div>
        )}

        {/* Timestamp */}
        {timestamp && !isTyping && (
          <p
            className={`text-xs text-subtext-light dark:text-subtext-dark mt-1.5 ${
              isUser ? 'text-right' : 'text-left'
            }`}
          >
            {new Date(timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        )}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
