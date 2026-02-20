/**
 * StatusIndicator Component
 * Displays status updates during backend processing with animated spinner
 */

import React from 'react';

interface StatusIndicatorProps {
  message: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ message }) => {
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
