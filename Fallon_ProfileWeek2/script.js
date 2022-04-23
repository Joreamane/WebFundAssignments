let usrName = document.getElementById('usr-name')
let incomingCounter = document.querySelector('.requests .content-top .counter')
let connectionsCounter = document.querySelector('.your-connections .content-top .counter')
let incRequest = ''
function rename() {
  usrName.textContent = prompt('What do you what your new name to be?')
}

function requestResponse(element) {
  incRequest = element.parentNode.parentNode
  incRequest.remove()
  incomingCounter.textContent = Number(incomingCounter.textContent) -1

  if (element.classList.contains('yes')) {
    connectionsCounter.textContent = Number(connectionsCounter.textContent) +1
  }
  requestsArr.pop()
  noRequests()
}

let requestArea = document.querySelector('.requests .content-bottom')
let requests = document.querySelectorAll('.inc-request')
let requestsArr = Array.from(requests)
function noRequests() {
  if (requestsArr.length === 0) {
    let noRequest = document.createElement('p')
    noRequest.textContent = 'There are no new requests'
    requestArea.appendChild(noRequest)
  }
}

