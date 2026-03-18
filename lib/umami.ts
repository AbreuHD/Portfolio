declare global {
  interface Window {
    umami?: {
      track: (
        eventName: string,
        data?: Record<string, string | number | boolean>
      ) => void;
    };
  }
}

export function trackEvent(
  eventName: string,
  data?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(eventName, data);
  }
}
