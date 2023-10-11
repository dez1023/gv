const popupHolder = document.createElement("div")
const popup = document.createElement("div")
const popupIcon = document.createElement("img")
const popupTitle = document.createElement("span")
const popupDesc = document.createElement("p")

document.body.appendChild(popupHolder)

popupHolder.appendChild(popup)

popup.appendChild(popupIcon)
popup.appendChild(popupTitle)
popup.appendChild(popupDesc)

//popup.style.display = "none"

function createPopup(title, desc, icon, duration) {
  
}