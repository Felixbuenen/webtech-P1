window.addEventListener("load", setupEventListeners, false);

function setupEventListeners() {
  let contentSection = document.getElementsByClassName("content")[0];
  let img = document.getElementsByClassName("author-image")[0];

  // use bubbling as propagation method (when clicking on image, image event is processed first)
  contentSection.addEventListener("click", showContentInfo, false);
  img.addEventListener("click", showImageInfo, false);
}

// seperate event handlers (better readability)
function showContentInfo() {
  alert(
    "For more information, go to her official website at https://www.jkrowling.com/"
  );
}

function showImageInfo() {
  alert("Source: https://en.wikipedia.org/wiki/J._K._Rowling");
}
