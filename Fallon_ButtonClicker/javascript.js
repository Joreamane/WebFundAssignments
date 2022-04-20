let loginButton = document.getElementById('login')
loginButton.addEventListener('click', function() {
  loginButton.textContent = 'Logout'
})

let addDefinition = document.getElementById('add-definition')
addDefinition.addEventListener('click', function() {
  this.remove()
})

let likeButtons = document.querySelectorAll('.likes')
likeButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    alert('Ninja has been liked')
  })
})