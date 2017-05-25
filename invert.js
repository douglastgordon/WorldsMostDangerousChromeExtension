let x = 100
setInterval(() => {
  document.documentElement.style.filter = `invert(${x}%)`
  x = (x === 100) ? 0 : 100
}, 1000)
