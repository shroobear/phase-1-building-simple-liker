// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!
const modal = document.getElementById("modal")
const articleHearts = document.querySelectorAll(".like-glyph")


function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage) {
      alert(serverMessage);
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      } else if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
    })
    .catch(function(error) {
      modal.classList.remove("hidden");
      modal.querySelector("#modal-message").innerText = error;
      setTimeout(function() {
        modal.classList.add("hidden");
      }, 3000);
      console.error(error);
    });
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
