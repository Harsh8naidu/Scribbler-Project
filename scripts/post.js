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

//Post details: title, content, comments
var receivePostTitle = localStorage.getItem("title");
var receivePostContent = localStorage.getItem("content");
var receivePostUsername = localStorage.getItem("username");
document.getElementById('title-text').innerHTML = receivePostTitle;
document.getElementById('post-content').innerHTML = receivePostContent;
document.getElementById('author-name-styling').innerHTML = receivePostUsername;

//Edit button functionality
var titleEditable = document.getElementById('title-text');
var contentEditable = document.getElementById('post-content');
var editButton = document.getElementById('edit-btn');
var saveButton = document.getElementById('save-btn');
saveButton.style.display = "none";

editButton.onclick = function() {
  titleEditable.setAttribute('contenteditable',true);
  titleEditable.style.outline = "2px solid pink";

  contentEditable.setAttribute('contenteditable', true);
  contentEditable.style.outline = "2px solid pink";

  editButton.style.display = "none";
  saveButton.style.display = "block";

}

saveButton.onclick = function() {
  titleEditable.setAttribute('contenteditable', false);
  titleEditable.style.outline = "none";

  contentEditable.setAttribute('contenteditable', false);
  contentEditable.style.outline = "none";
}

//Like button functionality
var likeCounter = 0;
var likeButton = document.getElementById('like-btn');
var likedButton = document.getElementById('liked-btn');
var viewLikes = document.getElementById('like-counter');
likedButton.style.display = "none";

likeButton.onclick = function() {
  likeButton.style.display = "none";
  likedButton.style.display = "block";
  likeCounter++;
  viewLikes.innerHTML = likeCounter + " person likes this!";
  viewLikes.style.color = "black";
}

likedButton.onclick = function() {
  likeCounter++;
  viewLikes.innerHTML = likeCounter + " person likes this!";
  viewLikes.style.color = "black";
}

//Comment button functionality
var commentId = 1;
var postComment = document.getElementById('comments');
postComment.style.display = "none";
var commentButton = document.getElementById('comment-btn');
var receiveComment = document.querySelector('#comment-box');


function save() {
  localStorage.setItem("comment", receiveComment.value);
}

commentButton.onclick = function() {
  var getComment = localStorage.getItem("comment");
  postComment.style.display = "block";
  postComment.innerHTML += '<p id="comment-styling">'+getComment+'</p>';
}