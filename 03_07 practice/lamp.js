

let deskLamp = {
  color: "white", 
  numBulbs: 2, 
  pluggedIn: true, 
  power: "on", 

  togglePower() { // change internal state
    this.pluggedIn = !this.pluggedIn;

    if (this.power == "on") {
      this.power = "off"
    } else {
      this.power = "on"
    }
  }
}

// Get the DOM objects
const lampState = document.getElementById("lampState");
const toggleButton = document.getElementById("toggleButton")

// Update HTML/CSS
function updateDisplay() {
  if (deskLamp.pluggedIn) {
    lampState.textContent = "ON"
    toggleButton.style.color = "green"
  } else {
    lampState.textContent = "OFF"
    toggleButton.style.color = "red"
  }
}

function togglePower() {
  deskLamp.togglePower();
  updateDisplay()
}

updateDisplay()

toggleButton.addEventListener("click", togglePower)
