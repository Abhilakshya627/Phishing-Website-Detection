"""
This script creates a Flask web application that serves a machine learning model for phishing website detection.
The model is loaded from a file and used to make predictions based on input data received via POST requests.

Endpoints:
    /predict (POST): Receives JSON data, processes it, and returns a prediction.

Dependencies:
    - Flask: A micro web framework for Python.
    - pandas: A data manipulation and analysis library.
    - joblib: A library for serializing Python objects, used here to load the trained model.

Usage:
    1. Ensure that Flask, pandas, and joblib are installed in your Python environment.
    2. Replace 'path/to/your/model.pkl' with the actual path to your trained model file.
    3. Run this script to start the Flask server.
    4. Send POST requests to the /predict endpoint with JSON data to get predictions.

Example JSON input for /predict endpoint:
    {
        "feature1": value1,
        "feature2": value2,
        ...
    }

Example response:
    {
        "prediction": 0
    }
"""

# Import necessary libraries
from flask import Flask, request, jsonify
import pandas as pd
import joblib

# Initialize the Flask application
app = Flask(__name__)

# Load the trained model from the specified file path
model = joblib.load("C:\Users\user\OneDrive\Desktop\MiniPro\Phising-Website-Detection\Model\RFC_Model.joblib")

@app.route('/predict', methods=['POST'])
def predict():
    """
    Endpoint to make predictions using the trained model.
    Expects JSON data in the request body and returns a JSON response with the prediction.
    """
    # Get the JSON data from the request
    data = request.json
    
    # Convert the JSON data to a pandas DataFrame
    df = pd.DataFrame([data])
    
    # Make a prediction using the model
    prediction = model.predict(df)
    
    # Return the prediction as a JSON response
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    # Run the Flask application in debug mode
    app.run(debug=True)