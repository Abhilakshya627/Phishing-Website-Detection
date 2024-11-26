chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
     fetch('http://localhost:5000/predict', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({url: message.url})
     })
     .then(response => response.json())
     .then(data => {
         if (data.phishing) {
             alert('Warning: This site may be a phishing site!');
         }
     });
 });