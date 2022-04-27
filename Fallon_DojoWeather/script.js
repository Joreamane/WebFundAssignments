function newCity() {
  alert('Loading weather report...')
}

let cookie = document.querySelector('.cookies')
function clearCookie() {
  cookie.remove()
}

function convertTemp () {
  if (document.getElementById('conversion').value = 'celsius') {
    convertC()
  } else if (document.getElementById('conversion').value = 'farenheit') {
    convertF()
  }
}
let highs = Array.from(document.querySelectorAll('.high'))
let lows = Array.from(document.querySelectorAll('.low'))
function convertC() {
  for(high of highs) {
    high.textContent = Math.round((high.textContent - 32) * (5/9))
  }
  for(low of lows) {
    low.textContent = Math.round((low.textContent - 32) * (5/9))
  }
}
function convertF() {
  for(high of highs) {
    high.textContent = Math.round((high.textContent * (9/5)) + 32)
  }
  for(low of lows) {
    low.textContent = Math.round((low.textContent * (9/5)) + 32)
  }
}