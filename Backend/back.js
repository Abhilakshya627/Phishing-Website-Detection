const http = require('http');
const https = require('https');
const { JSDOM } = require('jsdom');
const axios = require('axios');

function fetchWebsiteData(url) {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const dom = new JSDOM(data);
            const document = dom.window.document;

            const title = document.querySelector('title') ? document.querySelector('title').textContent : 'No title';
            const metaDescription = document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').getAttribute('content') : 'No description';

            console.log('URL:', url);
            console.log('Title:', title);
            console.log('Meta Description:', metaDescription);
        });
    }).on('error', (err) => {
        console.error('Error fetching the website:', err.message);
    });
}

// Example usage
fetchWebsiteData('http://example.com');
const links = Array.from(document.querySelectorAll('a')).map(link => link.href);
console.log('Links:', links);
const urlLength = url.length;
const hostname = new URL(url).hostname;
const ip = ''; // You can use a library like 'dns' to resolve the IP address if needed
const nbDots = (url.match(/\./g) || []).length;
const nbHyphens = (url.match(/-/g) || []).length;
const nbAt = (url.match(/@/g) || []).length;
const nbQm = (url.match(/\?/g) || []).length;
const nbAnd = (url.match(/&/g) || []).length;
const nbOr = (url.match(/\|/g) || []).length;
const nbEq = (url.match(/=/g) || []).length;
const nbUnderscore = (url.match(/_/g) || []).length;
const nbTilde = (url.match(/~/g) || []).length;
const nbPercent = (url.match(/%/g) || []).length;
const nbSlash = (url.match(/\//g) || []).length;
const nbStar = (url.match(/\*/g) || []).length;
const nbColon = (url.match(/:/g) || []).length;
const nbComma = (url.match(/,/g) || []).length;
const nbSemicolon = (url.match(/;/g) || []).length;
const nbDollar = (url.match(/\$/g) || []).length;
const nbSpace = (url.match(/ /g) || []).length;
const nbWww = (url.match(/www\./g) || []).length;
const nbCom = (url.match(/\.com/g) || []).length;
const nbDslash = (url.match(/\/\//g) || []).length;
const httpInPath = url.includes('http');
const httpsToken = url.includes('https');
const ratioDigitsUrl = (url.match(/\d/g) || []).length / url.length;
const ratioDigitsHost = (hostname.match(/\d/g) || []).length / hostname.length;
const punycode = url.includes('xn--');
const port = new URL(url).port;
const tldInPath = url.includes('.com') || url.includes('.net') || url.includes('.org');
const tldInSubdomain = hostname.split('.').slice(0, -2).some(sub => sub.includes('.com') || sub.includes('.net') || sub.includes('.org'));
const abnormalSubdomain = hostname.split('.').length > 3;
const nbSubdomains = hostname.split('.').length - 2;
const prefixSuffix = url.includes('-');
const randomDomain = false; // You can implement a check for randomness if needed
const shorteningService = false; // You can implement a check for URL shortening services if needed
const pathExtension = new URL(url).pathname.split('.').pop();
const nbRedirection = (url.match(/\/\//g) || []).length - 1;
const nbExternalRedirection = 0; // You can implement a check for external redirections if needed
const lengthWordsRaw = url.split(/[^a-zA-Z0-9]/).filter(Boolean).length;
const charRepeat = false; // You can implement a check for character repetition if needed
const shortestWordsRaw = Math.min(...url.split(/[^a-zA-Z0-9]/).filter(Boolean).map(word => word.length));
const shortestWordHost = Math.min(...hostname.split('.').map(part => part.length));
const shortestWordPath = Math.min(...new URL(url).pathname.split('/').filter(Boolean).map(part => part.length));
const longestWordsRaw = Math.max(...url.split(/[^a-zA-Z0-9]/).filter(Boolean).map(word => word.length));
const longestWordHost = Math.max(...hostname.split('.').map(part => part.length));
const longestWordPath = Math.max(...new URL(url).pathname.split('/').filter(Boolean).map(part => part.length));
const avgWordsRaw = url.split(/[^a-zA-Z0-9]/).filter(Boolean).reduce((acc, word) => acc + word.length, 0) / lengthWordsRaw;
const avgWordHost = hostname.split('.').reduce((acc, part) => acc + part.length, 0) / hostname.split('.').length;
const avgWordPath = new URL(url).pathname.split('/').filter(Boolean).reduce((acc, part) => acc + part.length, 0) / new URL(url).pathname.split('/').filter(Boolean).length;
const phishHints = false; // You can implement a check for phishing hints if needed
const domainInBrand = false; // You can implement a check for domain in brand if needed
const brandInSubdomain = false; // You can implement a check for brand in subdomain if needed
const brandInPath = false; // You can implement a check for brand in path if needed
const suspeciousTld = false; // You can implement a check for suspicious TLDs if needed
const statisticalReport = false; // You can implement a check for statistical reports if needed
const nbHyperlinks = links.length;
const ratioIntHyperlinks = links.filter(link => link.startsWith(url)).length / links.length;
const ratioExtHyperlinks = links.filter(link => !link.startsWith(url)).length / links.length;
const ratioNullHyperlinks = links.filter(link => link === '#').length / links.length;
const nbExtCSS = 0; // You can implement a check for external CSS if needed
const ratioIntRedirection = 0; // You can implement a check for internal redirections if needed
const ratioExtRedirection = 0; // You can implement a check for external redirections if needed
const ratioIntErrors = 0; // You can implement a check for internal errors if needed
const ratioExtErrors = 0; // You can implement a check for external errors if needed
const loginForm = document.querySelector('form') ? true : false;
const externalFavicon = false; // You can implement a check for external favicon if needed
const linksInTags = links.length;
const submitEmail = document.querySelector('input[type="email"]') ? true : false;
const ratioIntMedia = 0; // You can implement a check for internal media if needed
const ratioExtMedia = 0; // You can implement a check for external media if needed
const sfh = false; // You can implement a check for SFH if needed
const iframe = document.querySelector('iframe') ? true : false;
const popupWindow = false; // You can implement a check for popup windows if needed
const safeAnchor = links.filter(link => link.startsWith('#')).length / links.length;
const onmouseover = false; // You can implement a check for onmouseover if needed
const rightClick = false; // You can implement a check for right click if needed
const emptyTitle = title === '';
const domainInTitle = title.includes(hostname);
const domainWithCopyright = false; // You can implement a check for domain with copyright if needed
const whoisRegisteredDomain = false; // You can implement a check for WHOIS registered domain if needed
const domainRegistrationLength = 0; // You can implement a check for domain registration length if needed
const domainAge = 0; // You can implement a check for domain age if needed
const webTraffic = 0; // You can implement a check for web traffic if needed
const dnsRecord = false; // You can implement a check for DNS record if needed
const googleIndex = false; // You can implement a check for Google index if needed
const pageRank = 0; // You can implement a check for page rank if needed

console.log('URL Length:', urlLength);
console.log('Hostname:', hostname);
console.log('IP:', ip);
console.log('Number of Dots:', nbDots);
console.log('Number of Hyphens:', nbHyphens);
console.log('Number of @:', nbAt);
console.log('Number of ?: ', nbQm);
console.log('Number of &: ', nbAnd);
console.log('Number of |: ', nbOr);
console.log('Number of =: ', nbEq);
console.log('Number of _: ', nbUnderscore);
console.log('Number of ~: ', nbTilde);
console.log('Number of %: ', nbPercent);
console.log('Number of /: ', nbSlash);
console.log('Number of *: ', nbStar);
console.log('Number of :: ', nbColon);
console.log('Number of ,: ', nbComma);
console.log('Number of ;: ', nbSemicolon);
console.log('Number of $: ', nbDollar);
console.log('Number of Spaces: ', nbSpace);
console.log('Number of www: ', nbWww);
console.log('Number of .com: ', nbCom);
console.log('Number of //: ', nbDslash);
console.log('HTTP in Path: ', httpInPath);
console.log('HTTPS Token: ', httpsToken);
console.log('Ratio of Digits in URL: ', ratioDigitsUrl);
console.log('Ratio of Digits in Host: ', ratioDigitsHost);
console.log('Punycode: ', punycode);
console.log('Port: ', port);
console.log('TLD in Path: ', tldInPath);
console.log('TLD in Subdomain: ', tldInSubdomain);
console.log('Abnormal Subdomain: ', abnormalSubdomain);
console.log('Number of Subdomains: ', nbSubdomains);
console.log('Prefix-Suffix: ', prefixSuffix);
console.log('Random Domain: ', randomDomain);
console.log('Shortening Service: ', shorteningService);
console.log('Path Extension: ', pathExtension);
console.log('Number of Redirections: ', nbRedirection);
console.log('Number of External Redirections: ', nbExternalRedirection);
console.log('Length of Words (Raw): ', lengthWordsRaw);
console.log('Character Repetition: ', charRepeat);
console.log('Shortest Word (Raw): ', shortestWordsRaw);
console.log('Shortest Word in Host: ', shortestWordHost);
console.log('Shortest Word in Path: ', shortestWordPath);
console.log('Longest Word (Raw): ', longestWordsRaw);
console.log('Longest Word in Host: ', longestWordHost);
console.log('Longest Word in Path: ', longestWordPath);
console.log('Average Word Length (Raw): ', avgWordsRaw);
console.log('Average Word Length in Host: ', avgWordHost);
console.log('Average Word Length in Path: ', avgWordPath);
console.log('Phish Hints: ', phishHints);
console.log('Domain in Brand: ', domainInBrand);
console.log('Brand in Subdomain: ', brandInSubdomain);
console.log('Brand in Path: ', brandInPath);
console.log('Suspicious TLD: ', suspeciousTld);
console.log('Statistical Report: ', statisticalReport);
console.log('Number of Hyperlinks: ', nbHyperlinks);
console.log('Ratio of Internal Hyperlinks: ', ratioIntHyperlinks);
console.log('Ratio of External Hyperlinks: ', ratioExtHyperlinks);
console.log('Ratio of Null Hyperlinks: ', ratioNullHyperlinks);
console.log('Number of External CSS: ', nbExtCSS);
console.log('Ratio of Internal Redirections: ', ratioIntRedirection);
console.log('Ratio of External Redirections: ', ratioExtRedirection);
console.log('Ratio of Internal Errors: ', ratioIntErrors);
console.log('Ratio of External Errors: ', ratioExtErrors);
console.log('Login Form: ', loginForm);
console.log('External Favicon: ', externalFavicon);
console.log('Links in Tags: ', linksInTags);
console.log('Submit Email: ', submitEmail);
console.log('Ratio of Internal Media: ', ratioIntMedia);
console.log('Ratio of External Media: ', ratioExtMedia);
console.log('SFH: ', sfh);
console.log('Iframe: ', iframe);
console.log('Popup Window: ', popupWindow);
console.log('Safe Anchor: ', safeAnchor);
console.log('Onmouseover: ', onmouseover);
console.log('Right Click: ', rightClick);
console.log('Empty Title: ', emptyTitle);
console.log('Domain in Title: ', domainInTitle);
console.log('Domain with Copyright: ', domainWithCopyright);
console.log('WHOIS Registered Domain: ', whoisRegisteredDomain);
console.log('Domain Registration Length: ', domainRegistrationLength);
console.log('Domain Age: ', domainAge);
console.log('Web Traffic: ', webTraffic);
console.log('DNS Record: ', dnsRecord);
console.log('Google Index: ', googleIndex);
console.log('Page Rank: ', pageRank);
const extractedData = {
    urlLength,
    hostname,
    ip,
    nbDots,
    nbHyphens,
    nbAt,
    nbQm,
    nbAnd,
    nbOr,
    nbEq,
    nbUnderscore,
    nbTilde,
    nbPercent,
    nbSlash,
    nbStar,
    nbColon,
    nbComma,
    nbSemicolon,
    nbDollar,
    nbSpace,
    nbWww,
    nbCom,
    nbDslash,
    httpInPath,
    httpsToken,
    ratioDigitsUrl,
    ratioDigitsHost,
    punycode,
    port,
    tldInPath,
    tldInSubdomain,
    abnormalSubdomain,
    nbSubdomains,
    prefixSuffix,
    randomDomain,
    shorteningService,
    pathExtension,
    nbRedirection,
    nbExternalRedirection,
    lengthWordsRaw,
    charRepeat,
    shortestWordsRaw,
    shortestWordHost,
    shortestWordPath,
    longestWordsRaw,
    longestWordHost,
    longestWordPath,
    avgWordsRaw,
    avgWordHost,
    avgWordPath,
    phishHints,
    domainInBrand,
    brandInSubdomain,
    brandInPath,
    suspeciousTld,
    statisticalReport,
    nbHyperlinks,
    ratioIntHyperlinks,
    ratioExtHyperlinks,
    ratioNullHyperlinks,
    nbExtCSS,
    ratioIntRedirection,
    ratioExtRedirection,
    ratioIntErrors,
    ratioExtErrors,
    loginForm,
    externalFavicon,
    linksInTags,
    submitEmail,
    ratioIntMedia,
    ratioExtMedia,
    sfh,
    iframe,
    popupWindow,
    safeAnchor,
    onmouseover,
    rightClick,
    emptyTitle,
    domainInTitle,
    domainWithCopyright,
    whoisRegisteredDomain,
    domainRegistrationLength,
    domainAge,
    webTraffic,
    dnsRecord,
    googleIndex,
    pageRank
};

    // Send extracted data to the API for phishing prediction
    axios.post('http://your-api-endpoint.com/predict', extractedData)
        .then(response => {
            console.log('Prediction:', response.data);
            if (response.data.isPhishing) {
                const warningMessage = 'Warning: This site is potentially a phishing site!';
                console.warn(warningMessage);
                
                // Display an alert in the browser environment
                if (typeof window !== 'undefined') {
                    alert(warningMessage);
                }
            }
        })
        .catch(error => {
            console.error('Error sending data to API:', error);
        });


// Function to handle URL changes and trigger data extraction and API request
function handleUrlChange() {
    const currentUrl = window.location.href;
    fetchWebsiteData(currentUrl); // Call the feature extraction and API function with the current URL
}

// Listen for URL changes
window.addEventListener('popstate', handleUrlChange);
window.addEventListener('pushstate', handleUrlChange);
window.addEventListener('replacestate', handleUrlChange);

// Override pushState and replaceState to detect SPA URL changes
(function(history) {
    const pushState = history.pushState;
    const replaceState = history.replaceState;

    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({ state: state });
        }
        const result = pushState.apply(history, arguments);
        window.dispatchEvent(new Event('pushstate'));
        return result;
    };

    history.replaceState = function(state) {
        if (typeof history.onreplacestate == "function") {
            history.onreplacestate({ state: state });
        }
        const result = replaceState.apply(history, arguments);
        window.dispatchEvent(new Event('replacestate'));
        return result;
    };
})(window.history);

// Initial check on page load
handleUrlChange();