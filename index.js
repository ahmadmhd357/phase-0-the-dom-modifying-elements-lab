// Write your code here!
const body = document.querySelector('body')
const main = document.getElementById('main')
body.removeChild(main);
const  newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = "AHMAD is the champion"