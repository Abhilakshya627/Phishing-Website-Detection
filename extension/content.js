// content.js

// Function to check if a URL is suspicious
function isSuspiciousURL(url) {
    const suspiciousPatterns = [
        /.*\.xyz$/, // Example of a suspicious TLD
        /.*\.ru$/,  // Another example
        /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/, // IP address in URL
        /[-_]{2,}/, // Multiple consecutive hyphens or underscores
        /phishing|login|secure/i // Keywords often found in phishing URLs
    ];

    return suspiciousPatterns.some(pattern => pattern.test(url));
}

// Function to analyze the DOM for phishing indicators
function analyzeDOM() {
    const forms = document.querySelectorAll('form');
    const links = document.querySelectorAll('a');

    // Check for forms that don't use HTTPS
    forms.forEach(form => {
        if (form.action && !form.action.startsWith('https')) {
            console.warn('Form action is not secure:', form.action);
            // Notify the background script
            chrome.runtime.sendMessage({ type: 'PHISHING_INDICATOR', message: 'Insecure form action detected.' });
        }
    });

    // Check for suspicious links
    links.forEach(link => {
        if (isSuspiciousURL(link.href)) {
            console.warn('Suspicious link detected:', link.href);
            // Notify the background script
            chrome.runtime.sendMessage({ type: 'PHISHING_INDICATOR', message: 'Suspicious link detected.' });
        }
    });
}

// Function to send a report to the background script
function reportPhishing() {
    const reportButton = document.createElement('button');
    reportButton.textContent = 'Report Phishing';
    reportButton.style.position = 'fixed';
    reportButton.style.bottom = '10px';
    reportButton.style.right = '10px';
    reportButton.style.zIndex = '1000';
    reportButton.style.backgroundColor = 'red';
    reportButton.style.color = 'white';

    reportButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ type: 'REPORT_PHISHING', url: window.location.href });
        alert('Thank you for reporting! Your feedback helps improve our detection.');
    });

    document.body.appendChild(reportButton);
}

// Main function to execute on page load
function main() {
    const currentURL = window.location.href;

    // Check the URL for suspicious patterns
    if (isSuspiciousURL(currentURL)) {
        console.warn('Suspicious URL detected:', currentURL);
        chrome.runtime.sendMessage({ type: 'PHISHING_ALERT', url: currentURL });
    }

    // Analyze the DOM for phishing indicators
    analyzeDOM();

    // Send the current URL to background.js for prediction
    chrome.runtime.sendMessage({ action: "sendUrl", url: currentURL });

    // Add a reporting button for user feedback
    reportPhishing();
}

// Execute the main function when the document is fully loaded
document.addEventListener('DOMContentLoaded', main);

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message && message.url) {
        fetch('http://127.0.0.1:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: message.url })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.phishing) {
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'icon.png', // Ensure this path is correct
                    title: 'Phishing Warning',
                    message: 'Warning: This site may be a phishing site!',
                    priority: 2
                });
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    } else {
        console.error('Invalid message received:', message);
    }
});