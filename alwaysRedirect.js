const redirect = () => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const google404URL = "https://www.google.com/404"
    const currentURL = tab.url
    if (google404URL !== tab.url) {
      chrome.tabs.update(tab.id, {url: google404URL})
    }
  })
}

redirect()
