const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

let editButton = document.querySelector(".profile__edit-btn");
let popupContainer = document.querySelector(".popup__container");
let popup = document.querySelector(".popup");
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
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileProfession.textContent;
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
popup.addEventListener("submit", saveInfo);
