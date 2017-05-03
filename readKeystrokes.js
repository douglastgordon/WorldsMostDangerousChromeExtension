const readKeystrokes = () => {
  document.onkeypress = (e) => {
    console.log(e.key)
  }
}
readKeystrokes()
