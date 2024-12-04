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

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/phishing-website-detector.git
cd phishing-website-detector
