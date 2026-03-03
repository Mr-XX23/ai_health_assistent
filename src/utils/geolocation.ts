/**
 * Geolocation utility for emergency location acquisition.
 * Wraps the browser Geolocation API as a Promise with configurable timeout.
 */

export interface UserLocation {
  lat: number;
  lng: number;
}

/**
 * Request the user's current GPS location.
 *
 * @param timeoutMs  Maximum milliseconds to wait (default 10 000).
 * @returns          Resolves with { lat, lng } or rejects with an error message.
 */
export const requestGeolocation = (timeoutMs = 10_000): Promise<UserLocation> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    const timer = setTimeout(() => {
      reject(new Error('Geolocation request timed out.'));
    }, timeoutMs);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(timer);
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: timeoutMs,
        maximumAge: 30_000, // Accept cached position up to 30 s old
      }
    );
  });
};

/**
 * Silently attempt to get location — never throws.
 * Returns null if geolocation is denied / unavailable.
 */
export const requestGeolocationSilent = async (
  timeoutMs = 10_000
): Promise<UserLocation | null> => {
  try {
    return await requestGeolocation(timeoutMs);
  } catch {
    return null;
  }
};
