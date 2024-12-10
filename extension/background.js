let lastTab = null;
let lastTimestamp = null;

function sendTabData(url, startTime, endTime) {
  const timeSpent = (endTime - startTime) / 1000; // Convert milliseconds to seconds

  fetch('http://127.0.0.1:5000/tab-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: url,
      timestamp: new Date(startTime).toISOString(),
      timeSpent: timeSpent,
    }),
  });
}

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);

  const currentTime = Date.now();
  if (lastTab && lastTimestamp) {
    sendTabData(lastTab.url, lastTimestamp, currentTime);
  }

  lastTab = tab;
  lastTimestamp = currentTime;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only handle URL changes
  if (changeInfo.url) {
    const currentTime = Date.now();
    if (lastTab && lastTimestamp) {
      sendTabData(lastTab.url, lastTimestamp, currentTime);
    }

    // Update lastTab and lastTimestamp with the new URL
    lastTab = tab;
    lastTimestamp = currentTime;
  }
});

chrome.tabs.onRemoved.addListener(() => {
  const currentTime = Date.now();
  if (lastTab && lastTimestamp) {
    sendTabData(lastTab.url, lastTimestamp, currentTime);
  }

  lastTab = null;
  lastTimestamp = null;
});
