let popup = document.querySelector(".popup");
let buttonEdit = document.querySelector(".profile__button-edit");
let buttonClose = document.querySelector(".popup__close");
let popupForm = document.querySelector(".popup__group");

// Работа с инпутами
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");



popup.addEventListener("click", handleOverlayClose);
buttonEdit.addEventListener("click", handleOpenedPopup);
buttonClose.addEventListener("click", handleClosePopup);
popupForm.addEventListener("submit", handleFormSubmit);



function handleOpenedPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function handleClosePopup() {
    popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    handleClosePopup();
}

function handleOverlayClose(event1) {
    if (event1.target === event1.currentTarget) {
        handleClosePopup();
    }
}


//5 Часть
const initialCards = [
    {
        name: "Москва",
        link: "./images/Moscow.jpg"
    },
    {
        name: "Каппадокия",
        link: "./images/Cappadocia.jpg"
    },
    {
        name: "Оренбург",
        link: "./images/Orenburg.jpg"
    },
    {
        name: "Остров Крит",
        link: "./images/Crete.jpg"
    },
    {
        name: "Санкт-Петербург",
        link: "./images/Saint-Petersburg.jpg"
    },
    {
        name: "Пхукет",
        link: "./images/Phuket.jpg"
    }
];

const template = document.getElementById("card-li");
template.document.querySelector(".card__image")