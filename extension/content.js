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

// Function to check for URL changes
let currentURL = window.location.href;
setInterval(() => {
    if (window.location.href !== currentURL) {
        currentURL = window.location.href;
        // Notify background script of the new URL
        chrome.runtime.sendMessage({ action: "urlChanged", url: currentURL });
    }
}, 1000); // Check every second for URL changes

// Main function to execute on page load
function main() {
    // Check the URL for suspicious patterns
    if (isSuspiciousURL(currentURL)) {
        console.warn('Suspicious URL detected:', currentURL);
        chrome.runtime.sendMessage({ type: 'PHISHING_ALERT', url: currentURL });
    }

    // Analyze the DOM for phishing indicators
    analyzeDOM();

    // Add a reporting button for user feedback
    reportPhishing();
}

// Execute the main function when the document is fully loaded
document.addEventListener('DOMContentLoaded', main);

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "predictionResult") {
        const result = message.result;
        if (result === "phishing") {
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'icon.png', // Ensure this path is correct
                title: 'Phishing Warning',
                message: 'Warning: This site may be a phishing site!',
                priority: 2
            });
        } else {
            console.log("This website is safe.");
        }
    }
});