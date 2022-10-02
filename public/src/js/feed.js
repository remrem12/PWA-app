var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if (deferPrompt) {
    deferPrompt.prompt()
    deferPrompt.userChoice.then(function(choiceResult) {
      console.log(choiceResult.outcome)
      if(choiceResult.outcome === "dismissed") {
        console.log("User cancel installation")
      } else {
        console.log("User added to homescreen")
      }
    })
    deferPrompt = null
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
