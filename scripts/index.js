// Get the modal
var modalSignUp = document.getElementById("signup-Modal");

// Get the button that opens the modal
var btnSignUp = document.getElementById("signup-nav-btn");

// Get the <span> element that closes the modal
var spanCloseSignUp = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnSignUp.onclick = function() {
  modalSignUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCloseSignUp.onclick = function() {
  modalSignUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalSignUp.style.display = "none";
  }
}

var modalSignIn = document.getElementById("signin-Modal");

// Get the button that opens the modal
var btnSignIn = document.getElementById("signin-nav-btn");

// Get the <span> element that closes the modal
var spanCloseSignIn = document.getElementsByClassName("close-signIn")[0];

// When the user clicks the button, open the modal 
btnSignIn.onclick = function() {
    modalSignIn.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCloseSignIn.onclick = function() {
    modalSignIn.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalSignIn.style.display = "none";
  }
}

function signInToSignUp(arg) {
    document.getElementById("signin-Modal").style.display = "none";
    document.getElementById("signup-Modal").style.display = "block";
}