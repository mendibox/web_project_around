let editButton = document.querySelector(".profile__edit-btn");
let popupContainer = document.querySelector(".popup__container");
let popup = document.querySelector('.popup');
let popupClose = document.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let popupInputName = document.querySelector(".popup__input-name");
let popupInputAbout = document.querySelector(".popup__input-about");
let popupBtnSubmit = document.querySelector(".popup__btn-submit");

function openPopup() {
  popupContainer.style.display = "flex";
  popupContainer.style.justifyContent = "center";
  popupContainer.style.alignItems = "center";
}

function closePopup() {
  popupContainer.style.display = "none";
  popupContainer.style.justifyContent = "center";
  popupContainer.style.alignItems = "center";
}

function saveInfo(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputAbout.value;
  closePopup();
}

editButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
popup.addEventListener('submit', saveInfo);