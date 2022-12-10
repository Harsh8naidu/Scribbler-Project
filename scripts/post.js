// functionality of signup modal
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

// functionality of signin modal
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

// move from signin to signin modal
function signInToSignUp(arg) {
  document.getElementById("signin-Modal").style.display = "none";
  document.getElementById("signup-Modal").style.display = "block";
}

// Get Post details from Local Storage: title, content, username
var receivePostTitle = localStorage.getItem("title");
var receivePostContent = localStorage.getItem("content");
var receivePostUsername = localStorage.getItem("username");
document.getElementById('title-text').innerHTML = receivePostTitle;
document.getElementById('post-content').innerHTML = receivePostContent;
document.getElementById('author-name-styling').innerHTML = receivePostUsername;

// EDIT button functionality
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

// SAVE button functionality
saveButton.onclick = function() {
  titleEditable.setAttribute('contenteditable', false);
  titleEditable.style.outline = "none";

  contentEditable.setAttribute('contenteditable', false);
  contentEditable.style.outline = "none";
}

// LIKE button functionality
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

// COMMENT button functionality
var commentId = 1;
var postComment = document.getElementById('comments');
postComment.style.display = "none";
var commentButton = document.getElementById('comment-btn');
var receiveComment = document.querySelector('#comment-box');

// SAVE button functionality
function save() {
  localStorage.setItem("comment", receiveComment.value);
}

// COMMENT button functionality
commentButton.onclick = function() {
  var getComment = localStorage.getItem("comment");
  postComment.style.display = "block";
  postComment.innerHTML = '<p id="comment-styling">'+getComment+'</p>' + postComment.innerHTML;
}