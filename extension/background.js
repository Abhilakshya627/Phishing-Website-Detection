// Function to handle incoming messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sendUrl") {
        // Send the URL to the phishing detection API
        fetch('https://your-phishing-detection-api.com/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: message.url })
        })
        .then(response => response.json())
        .then(data => {
            // Send the prediction result back to content.js
            chrome.runtime.sendMessage({ action: "predictionResult", result: data.isPhishing ? "phishing" : "safe" });
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    }

    if (message.action === "urlChanged") {
        // Handle URL change notifications
        console.log('URL changed to:', message.url);
        // Optionally, you can send this URL for prediction as well
        fetch('https://your-phishing-detection-api.com/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: message.url })
        })
        .then(response => response.json())
        .then(data => {
            // Send the prediction result back to content.js
            chrome.runtime.sendMessage({ action: "predictionResult", result: data.isPhishing ? "phishing" : "safe" });
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    }
});

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        console.log(`Tab updated: ${tabId}, URL: ${tab.url}`);
        
        // Send the URL to the phishing detection API
        fetch('https://your-phishing-detection-api.com/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: tab.url })
        })
        .then(response => response.json())
        .then(data => {
            if (data.isPhishing) {
                // Notify the user about the phishing attempt
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'icon.png',
                    title: 'Phishing Alert!',
                    message: `The site ${tab.url} is suspected of phishing. Proceed with caution!`,
                    priority: 2
                });
            } else {
                console.log('The site is safe:', tab.url);
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    }
});