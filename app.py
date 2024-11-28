from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load your trained model
model = joblib.load('Model\model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    url = data['url']
    # Extract features from the URL
    features = extract_features(url)
    prediction = model.predict([features])
    return jsonify({'phishing': bool(prediction[0])})

def extract_features(url):
    # Implement your feature extraction logic here
    return []

if __name__ == '__main__':
    app.run(debug=True)