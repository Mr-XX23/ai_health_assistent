/**
 * EmergencyBanner Component
 * Full-width red alert banner shown when STATUS:EMERGENCY_DETECTED arrives via SSE.
 * Persists for the duration of the session (sticky emergency mode).
 */

import React, { useState } from 'react';
import type { EmergencyNumbers } from '../../services/aiPhysicianService';

interface EmergencyBannerProps {
  /** Ambulance/emergency number for the detected region */
  emergencyNumbers?: EmergencyNumbers | null;
  /** Optional callback when user explicitly dismisses (soft — banner stays visible) */
  onDismiss?: () => void;
  /** Whether hospital search is still in progress */
  isSearching?: boolean;
}

const EmergencyBanner: React.FC<EmergencyBannerProps> = ({
  emergencyNumbers,
  onDismiss,
  isSearching = false,
}) => {
  const [showDismissWarning, setShowDismissWarning] = useState(false);

  const ambulanceNumber = emergencyNumbers?.ambulance || '112';
  const generalNumber = emergencyNumbers?.general || '112';

  const handleDismissClick = () => {
    setShowDismissWarning(true);
  };

  const handleConfirmDismiss = () => {
    setShowDismissWarning(false);
    onDismiss?.();
  };

  return (
    <div
      className="sticky top-0 z-50 w-full animate-pulse-once"
      role="alert"
      aria-live="assertive"
      aria-label="Medical emergency detected"
    >
      {/* Main banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ef4444 100%)',
          borderBottom: '3px solid #7f1d1d',
        }}
        className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 shadow-lg"
      >
        {/* Left: Icon + message */}
        <div className="flex items-center gap-3">
          {/* Pulsing alert icon */}
          <div className="relative shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-lg font-black">!</span>
            </div>
            <div className="absolute -inset-1 rounded-full border-2 border-white/50 animate-ping" />
          </div>

          <div>
            <p className="text-white font-bold text-sm leading-tight">
              ⚠️ Emergency Detected
            </p>
            <p className="text-red-100 text-xs mt-0.5">
              {isSearching
                ? 'Searching for emergency rooms near you…'
                : 'Emergency hospitals found — see response below.'}
            </p>
          </div>
        </div>

        {/* Right: Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Call ambulance button */}
          <a
            href={`tel:${ambulanceNumber}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white text-red-700 font-bold text-sm hover:bg-red-50 transition-colors shadow-sm"
            aria-label={`Call ambulance: ${ambulanceNumber}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Ambulance ({ambulanceNumber})
          </a>

          {/* General emergency (if different) */}
          {generalNumber !== ambulanceNumber && (
            <a
              href={`tel:${generalNumber}`}
              className="px-3 py-2 rounded-lg bg-red-800/60 text-white font-semibold text-xs hover:bg-red-800/80 transition-colors"
              aria-label={`Emergency: ${generalNumber}`}
            >
              Emergency: {generalNumber}
            </a>
          )}

          {/* Soft dismiss */}
          <button
            onClick={handleDismissClick}
            className="p-1.5 rounded text-red-200 hover:text-white hover:bg-red-800/40 transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Soft dismiss confirmation */}
      {showDismissWarning && (
        <div className="flex items-center justify-between gap-4 bg-red-900/90 px-4 py-2 text-sm">
          <span className="text-red-100">
            Emergency protocols are still active. If symptoms persist, please seek immediate care.
          </span>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={handleConfirmDismiss}
              className="px-2 py-1 rounded bg-red-800 text-white text-xs hover:bg-red-700 transition-colors"
            >
              Dismiss anyway
            </button>
            <button
              onClick={() => setShowDismissWarning(false)}
              className="px-2 py-1 rounded bg-white/10 text-red-100 text-xs hover:bg-white/20 transition-colors"
            >
              Keep visible
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyBanner;
