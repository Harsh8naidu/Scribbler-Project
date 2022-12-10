// signup modal functionality
var modalSignUp = document.getElementById("signup-Modal");
var btnSignUp = document.getElementById("signup-nav-btn");
var spanCloseSignUp = document.getElementsByClassName("close")[0];

// display signup modal when signup button is clicked
btnSignUp.onclick = function() {
  modalSignUp.style.display = "block";
}

// close signup modal when close button is clicked
spanCloseSignUp.onclick = function() {
  modalSignUp.style.display = "none";
}

//signin modal functionality starts here
var modalSignIn = document.getElementById("signin-Modal");
var btnSignIn = document.getElementById("signin-nav-btn");
var spanCloseSignIn = document.getElementsByClassName("close-signIn")[0];

// display signin modal when signin button is clicked
btnSignIn.onclick = function() {
  modalSignIn.style.display = "block";
}

 // close signin modal when close button is clicked
spanCloseSignIn.onclick = function() {
  modalSignIn.style.display = "none";
}

//move from signin modal to signup modal
function signInToSignUp(arg) {
  document.getElementById("signin-Modal").style.display = "none";
  document.getElementById("signup-Modal").style.display = "block";
}

// display create post modal when Create Post button is clicked
function createPostDisplay() {
  document.getElementById("createpost-Modal").style.display = "block";
}

// close create post modal when close button is clicked
function closePostDisplay() {
  document.getElementById("createpost-Modal").style.display = "none";
}

