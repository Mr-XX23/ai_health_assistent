/**
 * ChatMessage Component
 * Displays individual chat messages with appropriate styling
 */

import React, { useState } from 'react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  isTyping?: boolean;
  /** Reasoning text from <think>...</think> blocks — shown in a collapsible section */
  thinkContent?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, timestamp, isTyping, thinkContent }) => {
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
