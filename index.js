const main = document.getElementById("main")
main.remove()

const body = document.getElementsByTagName("body")[0]
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "BOO BOO is the champion" 
body.appendChild(newHeader)
