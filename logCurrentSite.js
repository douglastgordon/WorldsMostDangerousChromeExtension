const logCurrentURL = () => {
  let lastURLVisited = ""
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const currentURL = tab.url
    if (currentURL !== lastURLVisited){
      lastURLVisited = currentURL
      console.log(currentURL)
    }
  })
}

logCurrentURL()
