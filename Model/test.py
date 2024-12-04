import pickle
import re
import numpy as np
from urllib.parse import urlparse

# Function to extract features from the URL
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
    return np.array(list(features.values())).reshape(1, -1)

# Load the pre-trained model
try:
    with open('model.pkl', 'rb') as model_file:
        model = pickle.load(model_file)
except FileNotFoundError:
    print("Model file not found. Ensure 'model.pkl' exists in the 'Model' directory.")
    exit()

# Function to predict if the URL is a phishing site
def predict_phishing(url):
    features = extract_features(url)
    if features is None:
        return "Invalid URL. Cannot predict."
    prediction = model.predict(features)
    return "The URL is likely a phishing site." if prediction[0] == 1 else "The URL is likely safe."

if __name__ == "__main__":
    url = input("Enter the URL: ")
    result = predict_phishing(url)
    print(result)
