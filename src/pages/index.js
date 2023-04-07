import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { initialCards } from "../components/constants.js";

// Переменные основные
const popups = document.querySelectorAll(".popup");
const buttonEditProfile = document.querySelector(".profile__button-edit");
const buttonAddCard = document.querySelector(".profile__button-add");
const popupEditProfile = document.querySelector(".popup_type_profile");
const popupAddCard = document.querySelector(".popup_type_card");
const popupShowCard = document.querySelector(".popup_type_image");
const formEditProfile = document.forms.editProfile;
const formAddCard = document.forms.addCard;
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
//Template
const cardList = document.querySelector(".elements__list");
// Инпуты
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

// Функция открытия попапа
function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", handlerKeyEscape);
};

// Функция закрытия попапа универсальная
function handlerClosePopup(popupToClose) {
    popupToClose.classList.remove("popup_opened");
    document.removeEventListener("keydown", handlerKeyEscape);
};

// Закрытие попапа на крестик и за пределами формы
popups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
        if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close")) {
            handlerClosePopup(popup);
        }
    });

});

// Закрытие попапа через кнопку ESQ
function handlerKeyEscape(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        handlerClosePopup(openedPopup);
    }
}

// Popup открытие для редактирования профиля
buttonEditProfile.addEventListener("click", function () {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

// Отправки формы профиля
function handlerFormEditProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    handlerClosePopup(popupEditProfile);
};

// Popup открытие для добавления карточки
buttonAddCard.addEventListener("click", function () {
    openPopup(popupAddCard);
});

function createCard(card) {
    const newCard = new Card(card, '.card-li', openPopup).createCard();
    return newCard
}

// Показываем карточки
initialCards.forEach(card => {
    cardList.prepend(createCard(card));
});

// Добавление новой карточки
function handlerFormAddCardSubmit(evt) {
    evt.preventDefault();
    const title = formAddCard.elements.inputName.value;
    const url = formAddCard.elements.inputUrl.value;

    const card = {
        name: title,
        link: url,
    };

    cardList.prepend(createCard(card));

    addCardFormValidator.disableButton();
    handlerClosePopup(popupAddCard);
    formAddCard.reset();

};


formEditProfile.addEventListener("submit", handlerFormEditProfileSubmit);
formAddCard.addEventListener("submit", handlerFormAddCardSubmit);

// Получения данных для API
const validationOptions = {
    formSelector: ".popup__group", // Form класс
    inputSelector: ".popup__input", // Input класс
    submitButtonSelector: ".popup__button", // Button класс
    inputSectionSelector: ".popup__section", // Input + error
    disabledButtonClass: "popup__button_disabled", // Button состояния выключения
    inputErrorSelector: ".popup__error", // Error куда выводить
    inputError: "popup__input_error", // Error линия
    inputErrorClass: "popup__error_active", // Error активация
};

const addCardFormValidator = new FormValidator(formAddCard, validationOptions);
addCardFormValidator.enableValidation();

export { formAddCard, popupShowCard, openPopup };