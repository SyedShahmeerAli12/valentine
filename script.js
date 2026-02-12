(function () {
  var noCount = 0;
  var yesPressed = false;

  var phrases = [
    "No",
    "Are you sure?",
    "What if I asked really nicely?",
    "Pretty please",
    "With a chocolate rice cake on top",
    "What about a matcha frostie",
    "PLEASE POOKIE",
    "But :*(",
    "I am going to die",
    "Yep im dead",
    "ok ur talking to nathan's ghost",
    "please babe",
    ":((((",
    "PRETTY PLEASE",
    "Estoy muerto",
    "No :(",
  ];

  function getNoButtonText() {
    var index = noCount < phrases.length ? noCount : phrases.length - 1;
    return phrases[index];
  }

  var askView = document.getElementById("ask-view");
  var yesView = document.getElementById("yes-view");
  var yesBtn = document.getElementById("yes-btn");
  var noBtn = document.getElementById("no-btn");

  yesBtn.addEventListener("click", function () {
    yesPressed = true;
    askView.classList.add("hidden");
    yesView.classList.remove("hidden");
  });

  noBtn.addEventListener("click", function () {
    noCount += 1;
    noBtn.textContent = getNoButtonText();
    var size = noCount * 20 + 16;
    if (window.innerWidth <= 480) {
      size = Math.min(size, 42);
    }
    yesBtn.style.fontSize = size + "px";
  });
})();
