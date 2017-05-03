const addNastySiteToHistory = () => {
  const nastySite = {
    url: "http://www.bing.com/",
  }
  chrome.history.addUrl(nastySite, () => {
    console.log(`${nastySite.url} has been added to your history.`)
  })
}

const findNastySite = () => {
  const nastySite = {
    url: "http://www.bing.com/",
    title: "Bing"
  }
  chrome.history.getVisits((visits) => {
    console.log(`${nastySite.title} has been visited ${visits.length} times.`)
    console.log("visit times:")
    visits.forEach((visit) => {
      console.log(visit.visitTime)
    })
  })
}

addNastySiteToHistory()
findNastySite()

// title: "Bing",
// transition: "typed",
