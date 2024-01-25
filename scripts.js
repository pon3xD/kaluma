/* Fullscreen function */
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }

/* Disable UP/DOWN Arrow scroll */
window.addEventListener("keydown", function(e) {
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
  }
}, false);

var x = 1; //initializes counter
function switchImg() {
  if (x == 1) { //if the counter is at 1
    document.getElementById("imgToSwitch").src = "../img/afonso.png";
    x++; //increments the counter to 2
  } else if (x == 2) { //if this is the 2nd click;
    x = 1; //resets counter to 1
  }
}