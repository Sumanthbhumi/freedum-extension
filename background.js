// Function to enable or disable the browser action icon
function updateIcon(tab) {
    if (tab.url.startsWith('https://medium.com/') || tab.url.startsWith('http://medium.com/')) {
        chrome.browserAction.enable(tab.id);
    } else {
        chrome.browserAction.disable(tab.id);
    }
}

// Listen for tab updates
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    updateIcon(tab);
});

// Listen for tab activations
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        updateIcon(tab);
    });
});

// Listen for browser action clicks
chrome.browserAction.onClicked.addListener(function(tab) {
    var newURL = "https://freedium-miror-saqg.vercel.app/" + tab.url;
    chrome.tabs.create({ url: newURL });
});