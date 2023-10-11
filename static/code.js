const socket = io();

/*if (localStorage.getItem("district") && localStorage.getItem("username") && localStorage.getItem("password")) {
  window.location.replace("/dashboard.html");
}*/

const loginui = document.getElementById("loginui")
const dInput = document.getElementById("districtInput")
const uInput = document.getElementById("usernameInput")
const pInput = document.getElementById("passwordInput")
const lError = document.getElementById("loginError")

function toggleLoginUI(t) {
  if (t) {
    loginui.style.transition = "opacity 0.5s"
    loginui.style.pointerEvents = "auto"
    loginui.style.opacity = "1"
  } else {
    loginui.style.pointerEvents = "none"
    loginui.style.opacity = "0"
  }
}

function login() {
  socket.emit("checkLogin", dInput.value,uInput.value,pInput.value)
  /*localStorage.setItem("district", dInput.value);
  localStorage.setItem("username", uInput.value);
  localStorage.setItem("password", pInput.value);*/
}

toggleLoginUI(false)

socket.on('data', (msg) => {
  alert(msg)
});

socket.on('alert', (msg) => {
  alert(msg)
});