var feedbackButton = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".write-us-popup");
var popupClose = feedbackPopup.querySelector(".popup-close");
var popupName = feedbackPopup.querySelector(".input-name-popup");
var popupEmail = feedbackPopup.querySelector(".input-email-popup");
var popupMessage = feedbackPopup.querySelector(".input-message-popup");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-show");

  if (storage) {
    popupName.value = storage;
    popupEmail.focus();
  } else {
    popupName.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("popup-show");
  feedbackPopup.classList.remove("popup-error");
});

feedbackPopup.addEventListener("submit", function (evt) {
  if (!popupName.value || !popupEmail.value || !popupMessage.value) {
  evt.preventDefault();
  feedbackPopup.classList.remove("popup-error");
  feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
  feedbackPopup.classList.add("popup-error");
} else {
  if (isStorageSupport) {
  localStorage.setItem("name", popupName.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("popup-show");
      feedbackPopup.classList.remove("popup-error");
    }
  }
});
