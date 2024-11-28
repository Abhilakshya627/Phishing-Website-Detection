(function() {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === 'complete' && tab.url) {
            console.log(`Tab updated: ${tabId}, URL: ${tab.url}`);
            
            // Send the URL to a phishing detection API
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
})();