# Phishing Website Detector

## Overview
The **Phishing Website Detector** is a Chrome extension designed to safeguard users from phishing websites. By analyzing URLs, DOM elements, and other features, it detects potential phishing threats and alerts the user in real-time. The project combines content analysis and API-driven predictions to enhance browsing security.

---

## Features
- **Real-Time Detection**: Analyzes websites as they are loaded and detects suspicious patterns.
- **Custom API Integration**: Sends URLs to a local or remote API for phishing predictions.
- **Visual Notifications**: Alerts users about phishing attempts through browser notifications.
- **User Feedback**: Allows users to report phishing attempts, contributing to improved detection.

---

## How It Works
1. **Content Script (`content.js`)**:
   - Monitors the current URL for suspicious patterns.
   - Analyzes DOM elements like forms and links for phishing indicators.
   - Provides a button for users to report phishing websites manually.

2. **Background Script (`background.js`)**:
   - Listens for messages from the content script.
   - Sends URLs to a phishing detection API for predictions.
   - Displays browser notifications based on the API's response.

3. **Manifest File (`manifest.json`)**:
   - Configures permissions and integrates scripts into the Chrome extension.
   - Enables access to all URLs and notifications.

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/phishing-website-detector.git
   cd phishing-website-detector
