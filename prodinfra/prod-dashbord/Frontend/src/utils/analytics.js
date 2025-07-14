
export const sendToAnalytics = (metric) => {
  const url = 'https://analytics.atonixcorp.com/';
  const headers = { type: 'application/json' };
  const payload = JSON.stringify(metric);

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], headers);
      const success = navigator.sendBeacon(url, blob);
      if (!success) {
        console.warn('sendBeacon failed to queue analytics data.');
      }
    } else {
        // Fallback to fetch if sendBeacon is not supported
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch((err) => {
        console.error('Analytics fetch error:', err);
      });
    }
  } catch (err) {
    console.error('sendToAnalytics error:', err);
  }
};