/**
 * ThinkingIndicator Component
 * Displays the model's <think>...</think> reasoning content during streaming.
 * Shows an animated "Thinking..." state with live text while the model reasons,
 * then collapses to a "View reasoning" toggle once the response begins.
 */

import React, { useEffect, useRef } from 'react';

interface ThinkingIndicatorProps {
  /** The raw text extracted from between <think>...</think> tags */
  content: string;
  /** True while the model is still inside the <think> block */
  isStreaming: boolean;
}

const ThinkingIndicator: React.FC<ThinkingIndicatorProps> = ({ content, isStreaming }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll think content during streaming
  useEffect(() => {
    if (isStreaming && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [content, isStreaming]);

  if (!content && !isStreaming) return null;

  return (
    <div className="flex gap-3 mb-3 justify-start">
      {/* Avatar aligned with assistant messages */}
      <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-sm">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>

      <div className="max-w-[75%] min-w-[180px]">
        {isStreaming ? (
          /* ── Live streaming: animated header + scrollable reasoning text ── */
          <div className="rounded-2xl px-4 py-3 bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800">
            {/* Header with bouncing dots */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                <span
                  className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0ms' }}
                />
                <span
                  className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"
                  style={{ animationDelay: '150ms' }}
                />
                <span
                  className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
              <span className="text-xs font-semibold text-violet-700 dark:text-violet-300 tracking-wide">
                Thinking…
              </span>
            </div>

            {/* Scrollable reasoning content */}
            {content && (
              <div
                ref={scrollRef}
                className="max-h-28 overflow-y-auto scrollbar-thin scrollbar-thumb-violet-200 dark:scrollbar-thumb-violet-700"
              >
                <p className="text-xs text-violet-600 dark:text-violet-400 leading-relaxed whitespace-pre-wrap break-words">
                  {content}
                </p>
              </div>
            )}
          </div>
        ) : (
          /* ── Completed: collapsed chip label (no expand, reasoning in ChatMessage) ── */
          content && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 w-fit">
              <svg
                className="w-3 h-3 text-violet-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
                Reasoned
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ThinkingIndicator;
