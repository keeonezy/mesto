import "./index.css";
import { Card } from "../components/Card.js";
import { initialCards } from "../components/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { Section } from "../components/Section";
import { UserInfo } from "../components/UserInfo";

// Кнопки
const profileEditButton = document.querySelector(".profile__button-edit");
const cardAddButton = document.querySelector(".profile__button-add");

// Формы
const profileForm = document.forms.editProfile;
const cardAddForm = document.forms.addCard;

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");


// Работа с template
const openPopupImage = new PopupWithImage(".popup_type_image");

const createCard = (data) => {
    const card = new Card(data,
        ".card-li",
        () => {
            openPopupImage.open(data);
        });
    return card.generateCard();
};


// Загружаем рендер карточек
const cardContainer = new Section({
    renderer: (card) => {
        cardContainer.addItem(createCard(card));
    },
}, ".elements__list")

cardContainer.renderItems(initialCards);


// Информация о профиле
const userInfo = new UserInfo({
    userName: ".profile__title",
    userJob: ".profile__subtitle"
})


// Редактирования профиля в попапе
const formProfile = new PopupWithForm('.popup_type_profile', {
    submitForm: ({ userName, userJob }) => {
        userInfo.setUserInfo({ userName, userJob })
    }
})

profileEditButton.addEventListener("click", () => {
    formProfile.open()

    formProfile.showInputValues(userInfo.getUserInfo())
})


// Добавляем новую карточку в попапе
const addCardPopup = new PopupWithForm(".popup_type_card", {
    submitForm: ({ name, link }) => {
        cardContainer.addItem(createCard({
            name: name,
            link: link,
            alt: name
        }))
    }
})

cardAddButton.addEventListener("click", () => {
    addCardPopup.open()
})


// Получения данных для API
const validationOptions = {
    formSelector: ".popup__form", // Form класс
    inputSelector: ".popup__input", // Input класс
    submitButtonSelector: ".popup__button", // Button класс
    inputSectionSelector: ".popup__section", // Input + error
    disabledButtonClass: "popup__button_disabled", // Button состояния выключения
    inputErrorSelector: ".popup__error", // Error куда выводить
    inputError: "popup__input_error", // Error линия
    inputErrorClass: "popup__error_active", // Error активация
};

const addCardFormValidator = new FormValidator(cardAddForm, validationOptions);
addCardFormValidator.enableValidation();
const ProfileValidator = new FormValidator(profileForm, validationOptions);
ProfileValidator.enableValidation();


formProfile.setEventListeners();
addCardPopup.setEventListeners();
openPopupImage.setEventListeners();