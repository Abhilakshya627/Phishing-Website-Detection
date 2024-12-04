import numpy as np
from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS
import re
import pandas as pd
from urllib.parse import urlparse
import logging

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)
# Load your trained model
model = joblib.load('Model/model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    logging.info('Received request: %s', request.json)
    data = request.get_json()
    if 'url' not in data:
        return jsonify({'error': 'URL is required'}), 400
    url = data['url']
    # Extract features from the URL
    features = extract_features(url)
    prediction = model.predict([features])
    print(f"Prediction: {bool(prediction[0])}")
    return jsonify({'phishing': bool(prediction[0])})
'''
    return jsonify({'phishing': bool(prediction[0])})'''

'''
def extract_features(url):
    features = {}
    try:
        parsed_url = urlparse(url)
    except Exception as e:
        print(f"Error parsing URL: {e}")
        return None

    # Helper function to count occurrences of a character in the URL
    def count_occurrences(char):
        return url.count(char)

    # Avoid division by zero
    url_length = len(url) if len(url) > 0 else 1
    hostname_length = len(parsed_url.netloc) if len(parsed_url.netloc) > 0 else 1

    # Feature extraction
    features['length_url'] = len(url)
    features['length_hostname'] = len(parsed_url.netloc)
    features['nb_dots'] = count_occurrences('.')
    features['nb_hyphens'] = count_occurrences('-')
    features['nb_at'] = count_occurrences('@')
    features['nb_qm'] = count_occurrences('?')
    features['nb_and'] = count_occurrences('&')
    features['nb_eq'] = count_occurrences('=')
    features['nb_underscore'] = count_occurrences('_')
    features['nb_tilde'] = count_occurrences('~')
    features['nb_percent'] = count_occurrences('%')
    features['nb_slash'] = count_occurrences('/')
    features['nb_colon'] = count_occurrences(':')
    features['nb_comma'] = count_occurrences(',')
    features['nb_semicolumn'] = count_occurrences(';')
    features['nb_dollar'] = count_occurrences('$')
    features['nb_space'] = count_occurrences(' ')
    features['nb_www'] = url.count('www')
    features['nb_com'] = url.count('.com')
    features['nb_dslash'] = url.count('//')
    features['ratio_digits_url'] = sum(c.isdigit() for c in url) / url_length
    features['ratio_digits_host'] = sum(c.isdigit() for c in parsed_url.netloc) / hostname_length

    # Convert dictionary values to a NumPy array
    return np.array(list(features.values())).reshape(1, -1)'''

def extract_features(url):
    features = {}
    parsed_url = urlparse(url)
    
    # Helper function to count occurrences of a character in the URL
    def count_occurrences(char):
        return url.count(char)
    
    # Length of URL
    features['length_url'] = len(url)
    
    # Length of hostname
    features['length_hostname'] = len(parsed_url.netloc)
    
    # Number of dots in URL
    features['nb_dots'] = count_occurrences('.')
    
    # Number of hyphens in URL
    features['nb_hyphens'] = count_occurrences('-')
    
    # Number of '@' in URL
    features['nb_at'] = count_occurrences('@')
    
    # Number of '?' in URL
    features['nb_qm'] = count_occurrences('?')
    
    # Number of '&' in URL
    features['nb_and'] = count_occurrences('&')
    
    # Number of '=' in URL
    features['nb_eq'] = count_occurrences('=')
    
    # Number of underscores in URL
    features['nb_underscore'] = count_occurrences('_')
    
    # Number of tildes in URL
    features['nb_tilde'] = count_occurrences('~')
    
    # Number of percent signs in URL
    features['nb_percent'] = count_occurrences('%')
    
    # Number of slashes in URL
    features['nb_slash'] = count_occurrences('/')
    
    # Number of colons in URL
    features['nb_colon'] = count_occurrences(':')
    
    # Number of commas in URL
    features['nb_comma'] = count_occurrences(',')
    
    # Number of semicolons in URL
    features['nb_semicolumn'] = count_occurrences(';')
    
    # Number of dollar signs in URL
    features['nb_dollar'] = count_occurrences('$')
    
    # Number of spaces in URL
    features['nb_space'] = count_occurrences(' ')
    
    # Number of 'www' in URL
    features['nb_www'] = url.count('www')
    
    # Number of '.com' in URL
    features['nb_com'] = url.count('.com')
    
    # Number of double slashes in URL
    features['nb_dslash'] = url.count('//')
    
    # Ratio of digits in URL
    features['ratio_digits_url'] = sum(c.isdigit() for c in url) / len(url)
    
    # Ratio of digits in hostname
    features['ratio_digits_host'] = sum(c.isdigit() for c in parsed_url.netloc) / len(parsed_url.netloc)
    
    return list(features.values())

if __name__ == '__main__':
    app.run(debug=True)