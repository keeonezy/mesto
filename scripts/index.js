let popup = document.querySelector(".popup");
let buttonEdit = document.querySelector(".profile__button-edit");
let buttonClose = document.querySelector(".popup__close");
// let popupForm = document.querySelector(".");
// let popupGroup = document.querySelector(".");
// let popupInput = document.querySelector(".");
// let popupOpened = document.querySelector(".");
// let popupTitle = document.querySelector(".");



function openedPopup() {
    popup.classList.add("popup__opened");
}

function closePopup() {
    popup.classList.remove("popup__opened");
}



buttonEdit.addEventListener("click", openedPopup);
buttonClose.addEventListener("click", closePopup);