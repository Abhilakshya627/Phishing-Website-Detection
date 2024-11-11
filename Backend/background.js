
        // Create a background.js file and add the following content

        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (changeInfo.status === 'complete' && tab.url) {
                chrome.tabs.sendMessage(tabId, { action: "fetchWebsiteData", url: tab.url });
            }
        });