/**
 * StatusIndicator Component
 * Displays status updates during backend processing with animated spinner.
 * Supports a 'emergency' variant with red styling for ER_NOW situations.
 */

import React from 'react';

interface StatusIndicatorProps {
  message: string;
  /** 'normal' (default) = blue spinner; 'emergency' = red pulsing alert */
  variant?: 'normal' | 'emergency';
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  message,
  variant = 'normal',
}) => {
  if (variant === 'emergency') {
    return (
      <div className="flex items-center justify-center my-4 px-4">
        <div
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg border text-sm shadow-sm"
          style={{
            background: 'rgba(185,28,28,0.15)',
            borderColor: 'rgba(239,68,68,0.5)',
            color: '#fca5a5',
          }}
        >
          {/* Pulsing red indicator */}
          <div className="relative w-4 h-4 shrink-0">
            <div className="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping" />
            <div className="absolute inset-0.5 rounded-full bg-red-500" />
          </div>
          <span className="font-semibold">{message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center my-4 px-4">
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 text-sm shadow-sm">
        {/* Animated spinner */}
        <div className="relative w-4 h-4">
          <div className="absolute inset-0 border-2 border-blue-200 dark:border-blue-700 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>

        {/* Status message */}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default StatusIndicator;

