const allElements = Array.from(document.all)
setInterval(() => {
  allElements.forEach((o) => {
    const rand = Math.floor(Math.random() * 11 - 5)
    o.style.transform = `rotate(${rand}deg)`
  })
}, 1000)
