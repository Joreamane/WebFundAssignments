function likeOnClick (element) {
  let likeCounterDisplay = element.previousElementSibling
  let currentLikes = Number(likeCounterDisplay.textContent.charAt(0))
  currentLikes = currentLikes + 1
  likeCounterDisplay.textContent = currentLikes + ' likes'
}