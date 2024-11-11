// Create a content.js file and add the following content

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchWebsiteData") {
        fetchWebsiteData(request.url);
    }
});

function fetchWebsiteData(url) {
    // Your existing fetchWebsiteData function code
}