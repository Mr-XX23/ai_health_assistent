/**
 * ERHospitalCard Component
 * Renders a single verified ER hospital card with call/directions buttons.
 * The nearest hospital (index 0) gets a red highlight border.
 */

import React from 'react';
import type { ERHospital } from '../../services/aiPhysicianService';

interface ERHospitalCardProps {
  hospital: ERHospital;
  /** Serial number shown on the card (1-indexed) */
  rank: number;
  /** Whether this is the nearest hospital (gets red border highlight) */
  isNearest?: boolean;
}

const ERHospitalCard: React.FC<ERHospitalCardProps> = ({ hospital, rank, isNearest = false }) => {
  const isClosed = hospital.open_now === false;
  const isOpen = hospital.open_now === true;

  return (
    <div
      className={`rounded-xl border p-4 mb-3 transition-all ${
        isNearest
          ? 'border-red-500 shadow-lg shadow-red-500/20 bg-red-950/30'
          : 'border-gray-700 bg-gray-800/50'
      }`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          {/* Rank badge */}
          <span
            className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
              isNearest ? 'bg-red-500 text-white' : 'bg-gray-600 text-gray-300'
            }`}
          >
            {rank}
          </span>
          <div>
            <h3 className="text-white font-semibold text-sm leading-tight">{hospital.name}</h3>
            <p className="text-gray-400 text-xs mt-0.5">{hospital.distance_km} km away</p>
          </div>
        </div>

        {/* Open status badge */}
        <div className="shrink-0">
          {isOpen ? (
            <span className="inline-flex items-center gap-1 text-xs bg-green-900/50 text-green-400 border border-green-800 rounded-full px-2 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open now
              {hospital.is_24h && ' (24/7)'}
            </span>
          ) : isClosed ? (
            <span className="inline-flex items-center gap-1 text-xs bg-yellow-900/50 text-yellow-400 border border-yellow-800 rounded-full px-2 py-0.5">
              ⚠️ May be closed
            </span>
          ) : (
            <span className="text-xs text-gray-500">Hours unknown</span>
          )}
        </div>
      </div>

      {/* Address */}
      <p className="text-gray-300 text-xs mb-2 flex items-start gap-1.5">
        <svg className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {hospital.address}
      </p>

      {/* Phone */}
      {hospital.phone ? (
        <p className="text-gray-300 text-xs mb-3 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {hospital.phone}
        </p>
      ) : (
        <p className="text-gray-500 text-xs mb-3 italic">No direct number available</p>
      )}

      {/* Rating */}
      {hospital.rating && (
        <p className="text-gray-400 text-xs mb-3">
          ⭐ {hospital.rating.toFixed(1)} rating
        </p>
      )}

      {/* Warning note */}
      {hospital.warning && (
        <p className="text-yellow-400 text-xs mb-3 bg-yellow-900/20 rounded px-2 py-1">
          {hospital.warning}
        </p>
      )}

      {/* Action buttons */}
      <div className="flex gap-2">
        {hospital.phone && (
          <a
            href={`tel:${hospital.phone}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors"
            aria-label={`Call ${hospital.name}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        )}
        <a
          href={hospital.maps_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
          aria-label={`Get directions to ${hospital.name}`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default ERHospitalCard;
