let popup = document.querySelector(".popup");
let buttonEdit = document.querySelector(".profile__button-edit");
let buttonClose = document.querySelector(".popup__close");
// let popupForm = document.querySelector(".");
let popupGroup = document.querySelector(".popup__group");
// let popupInput = document.querySelector(".");
// let popupOpened = document.querySelector(".");
// let popupTitle = document.querySelector(".");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");



function openedPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup() {
    popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}



buttonEdit.addEventListener("click", openedPopup);
buttonClose.addEventListener("click", closePopup);
popupGroup.addEventListener("submit", handleFormSubmit);