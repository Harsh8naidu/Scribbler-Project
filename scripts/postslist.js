// functionality for signup modal
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

// functionality for signin modal
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

// move from signin to signup modal
function signInToSignUp(arg) {
  document.getElementById("signin-Modal").style.display = "none";
  document.getElementById("signup-Modal").style.display = "block";
}

// Delete Modal
var postId;
function deletePostModal(postNumber) {
  document.getElementById("delete-Modal").style.display = "block";
  postId = postNumber;
}

// Yes button in delete modal 
function deletePostYesBtn() {
  document.getElementById(postId).style.display = "none";
  document.getElementById("delete-Modal").style.display = "none";
}

// No button in delete modal
function deletePostNoBtn() {
  document.getElementById("delete-Modal").style.display = "none";
}

// move to post details page to display post details
function getPostDetails(individualPostTitle, individualPostContent, individualPostUsername) {

  var postTitle = document.getElementById(individualPostTitle).innerText;
  var postContent = document.getElementById(individualPostContent).innerText;
  var postUsername = document.getElementById(individualPostUsername).innerText;

  localStorage.setItem("title", postTitle);
  localStorage.setItem('content', postContent);
  localStorage.setItem("username", postUsername);

  window.location.href = "index.html";
}