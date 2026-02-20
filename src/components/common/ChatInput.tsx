/**
 * ChatInput Component
 * Input field for sending messages with send button
 */

import React, { useState, useRef, type KeyboardEvent } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  disabled = false,
  placeholder = 'Type your message...',
}) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end gap-3">
          {/* Input Field */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              placeholder={placeholder}
              rows={1}
              className="w-full px-4 py-3 pr-12 rounded-2xl border border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-800 
                       text-text-light dark:text-text-dark
                       placeholder-gray-400 dark:placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                       disabled:opacity-50 disabled:cursor-not-allowed
                       resize-none overflow-hidden
                       transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-md"
              style={{ maxHeight: '120px' }}
            />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={disabled || !message.trim()}
            className="shrink-0 w-12 h-12 rounded-2xl bg-primary hover:bg-primary/90 
                     text-white disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 transform hover:scale-105 active:scale-95
                     flex items-center justify-center shadow-md hover:shadow-lg
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            aria-label="Send message"
          >
            {disabled ? (
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
