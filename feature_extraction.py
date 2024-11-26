import re
import pandas as pd
from urllib.parse import urlparse

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
    
    return features

def extract_features_from_url(url):
    features = extract_features(url)
    df = pd.DataFrame([features])
    return df

if __name__ == "__main__":
    url = "https://www.google.com"
    df = extract_features_from_url(url)
