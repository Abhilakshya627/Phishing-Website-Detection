# Phishing Website Detector

## Overview
The **Phishing Website Detector** is a comprehensive solution designed to protect users from phishing websites. This project combines a Chrome extension with a machine learning model to analyze URLs, DOM elements, and other features, providing real-time phishing threat detection and notifications.

---

## Features
- **Real-Time Detection**: Analyze websites as they load to detect suspicious patterns.
- **Machine Learning Integration**: Leverage trained models to enhance phishing detection accuracy.
- **Custom API Support**: Send URLs to a backend API for predictions.
- **Visual Notifications**: Alert users with browser notifications about phishing attempts.
- **User Feedback**: Allow users to report phishing sites, contributing to better detection over time.

---

## Tech Stack

### **Frontend:**
- **HTML, CSS, JavaScript**: For building the Chrome extension's interactive elements.
- **Chrome Extension API**: For browser interactions, messaging, and notifications.

### **Backend:**
- **Flask**: For serving the phishing detection API.

### **Machine Learning:**
- **Python**: For model development and data processing.
- **Scikit-learn**: To build and evaluate machine learning models.
- **Pandas**: For data analysis and preprocessing.
- **Joblib**: To save and load trained models.

### **Libraries and Tools:**
- **Regular Expressions**: For identifying suspicious URL patterns.
- **Chrome Developer Tools**: For debugging and testing the extension.
- **Fetch API**: To communicate with the backend for predictions.

---

## How It Works

### **Chrome Extension**:
1. **Content Script (`content.js`)**:
   - Monitors the current URL for suspicious patterns.
   - Analyzes DOM elements (e.g., forms, links) for phishing indicators.
   - Provides a button for users to manually report phishing websites.

2. **Background Script (`background.js`)**:
   - Sends URLs to the phishing detection API.
   - Displays browser notifications for phishing alerts.

3. **Manifest File (`manifest.json`)**:
   - Configures permissions and integrates scripts into the Chrome extension.

### **Machine Learning Model**:
1. **Data Preprocessing**:
   - Extract features from URLs.
   - Encode target labels and split data into training and testing sets.

2. **Model Training**:
   - Train a **RandomForestClassifier** on preprocessed data.
   - Evaluate accuracy and save the model using **Joblib**.

3. **API Integration**:
   - A Flask API serves the trained model.
   - The API processes URLs and provides phishing predictions.

---

## Installation Guide

Follow these steps to set up the **Phishing Website Detector**, which includes a Chrome extension and a backend API for phishing detection.

---

### Prerequisites
Make sure you have the following installed:
- **Python 3.7 or higher**: [Download here](https://www.python.org/downloads/).
- **Google Chrome**: Latest version recommended.
- **Git**: To clone the repository.
- **pip**: Python's package manager (comes pre-installed with Python).

---

### Step 1: Clone the Repository
1. Open your terminal (Command Prompt, PowerShell, or any terminal of your choice).
2. Run the following commands on your terminal:
   [git clone https://github.com/yourusername/phishing-website-detector.git
   cd phishing-website-detector](https://github.com/Abhilakshya627/Phishing-Website-Detection.git)
### Step 2: Step Up the Backend
- **Install Dependencies**: Use the following command on your terminal : pip install -r requirements.txt
-**Start API**: Run the following command to start the backend server: python app.py
### Step 3: Set Up the Chrome Extension
1. Open Google Chrome and navigate to: chrome://extensions/
2. Enable Developer Mode (toggle in the top-right corner).
3. Click Load unpacked and select the extension directory in Phishing-Website-Detection folder.
### Step 4: Test Everything
#### Real-Time Detection:
- The extension will analyze URLs and DOM elements for phishing indicators.
-Notifications will alert you about potential phishing threats.
#### Backend API:
- The extension communicates with the backend API to fetch phishing predictions.

## Troubleshooting
### Missing Dependencies: Ensure all packages in requirements.txt are installed.
### Backend Issues:
- Verify the Flask server is running at http://127.0.0.1:5000.
- Check the terminal logs for any errors.
### Extension Not Working:
- Ensure the extension is correctly loaded in Chrome.
- Verify that the backend API is active.
