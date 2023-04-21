import moscow from "../../src/images/Moscow.jpg";
import cappadocia from "../../src/images/Cappadocia.jpg";
import orenburg from "../../src/images/Orenburg.jpg";
import crete from "../../src/images/Crete.jpg";
import saintPetersburg from "../../src/images/Saint-Petersburg.jpg";
import phuket from "../../src/images/Phuket.jpg";

const initialCards = [
    {
        name: "Москва",
        link: moscow
    },
    {
        name: "Каппадокия",
        link: cappadocia
    },
    {
        name: "Оренбург",
        link: orenburg
    },
    {
        name: "Остров Крит",
        link: crete
    },
    {
        name: "Санкт-Петербург",
        link: saintPetersburg
    },
    {
        name: "Пхукет",
        link: phuket
    }
];

// Кнопки
const profileEditButton = document.querySelector(".profile__button-edit");
const cardAddButton = document.querySelector(".profile__button-add");
const avatarAddButton = document.querySelector(".profile__button-change");

// Получения данных для API валидации
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

export { profileEditButton, cardAddButton, avatarAddButton, validationOptions, initialCards }