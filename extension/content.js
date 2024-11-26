chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchWebsiteData") {
         fetchWebsiteData(request.url);
    }
});

function fetchWebsiteData(url) {
    fetch('http://localhost:5000/predict', {
         method: 'POST',
         headers: {
               'Content-Type': 'application/json'
         },
         body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
         if (data.prediction === 1) {
               alert('Warning: This website may be a phishing site!');
         }
    })
    .catch(error => console.error('Error:', error));
}