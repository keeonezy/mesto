import "./index.css";
import { Card } from "../components/Card.js";
import { initialCards } from "../components/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupDelete } from "../components/PopupDelete";
import { PopupWithForm } from "../components/PopupWithForm";
import { Section } from "../components/Section";
import { UserInfo } from "../components/UserInfo";
import { Api } from "../components/Api";

// Кнопки
const profileEditButton = document.querySelector(".profile__button-edit");
const cardAddButton = document.querySelector(".profile__button-add");
const avatarAddButton = document.querySelector(".profile__button-change");

// Формы
const profileForm = document.forms.editProfile;
const cardAddForm = document.forms.addCard;
const changeAvatarForm = document.forms.changeAvatar;


// Данные для получения доступа к API
const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
    headers: {
        authorization: "2b912826-2e01-41bd-a2c8-a9cb197269a0",
        "Content-Type": "application/json"
    }
});


// Работа с template
const openPopupImage = new PopupWithImage(".popup_type_image");

const createCard = (data) => {
    const card = new Card(data,
        ".card-li",
        () => {
            openPopupImage.open(data);
        },
        userId,
        {
            handleTrashCard: () => {
                deletePopup.open();
                deletePopup.setSubmit(() => {
                    deletePopup.renderLoading(true);
                    api.deleteCard(data._id)
                        .then(() => {
                            card.deleteCard(),
                                deletePopup.close();
                        })
                        .catch((err) => {
                            console.log(`Ошибка: ${err}`);
                        })
                        .finally(() => {
                            deletePopup.renderLoading(false);
                        })
                })
            },
            handleSetLike: () => {
                api.setlike(data._id)
                    .then((data) => {
                        card.handleLikeCard(data);
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                    })
            },
            handleRemoveLike: () => {
                api.deleteLike(data._id)
                    .then((data) => {
                        card.handleLikeCard(data);
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                    })
            }
        });

    return card.generateCard();
}

// Загружаем рендер карточек
const cardContainer = new Section({
    renderer: (card) => {
        cardContainer.addItem(createCard(card));
    },
}, ".elements__list")


// Информация о профиле
const userInfo = new UserInfo({
    userName: ".profile__title",
    userAbout: ".profile__about",
    userAvatar: ".profile__avatar"
})


// Получаем данные о пользователях по API
let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([initialCards, userData]) => {
        userId = userData._id;
        userInfo.setUserInfo(userData);
        userInfo.setUserAvatar(userData);
        cardContainer.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });


// Меняем аватар пользователя в попапе
const avatarChange = new PopupWithForm(".popup_type_avatar", {
    submitForm: ({ link }) => {
        avatarChange.renderLoading(true);
        api.editUserAvatar({ link })
            .then((data) => {
                userInfo.setUserAvatar(data);
                avatarChange.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                avatarChange.renderLoading(false);
            })
    }
});

avatarAddButton.addEventListener("click", () => {
    avatarChange.open()
    changeAvatarValidator.disableButton();
});


// Редактирования профиля в попапе
const formProfile = new PopupWithForm(".popup_type_profile", {
    submitForm: ({ name, about }) => {
        formProfile.renderLoading(true);
        api.editUserInfo({ name, about })
            .then((data) => {
                userInfo.setUserInfo(data);
                formProfile.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                formProfile.renderLoading(false);
            })
    }
});

profileEditButton.addEventListener("click", () => {
    formProfile.open()
    profileValidator.disableButton();

    formProfile.setInputValues(userInfo.getUserInfo())
})


// Добавляем новую карточку в попапе
const addCardPopup = new PopupWithForm(".popup_type_card", {
    submitForm: ({ name, link }) => {
        addCardPopup.renderLoading(true);
        api.addNewCard({ name, link })
            .then((data) => {
                cardContainer.addItem(createCard(data))
                addCardPopup.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                addCardPopup.renderLoading(false);
            })
    }
});

cardAddButton.addEventListener("click", () => {
    addCardPopup.open()
    addCardFormValidator.disableButton();
})

const deletePopup = new PopupDelete(".popup_type_enter");
deletePopup.setEventListeners();


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
const profileValidator = new FormValidator(profileForm, validationOptions);
profileValidator.enableValidation();
const changeAvatarValidator = new FormValidator(changeAvatarForm, validationOptions);
changeAvatarValidator.enableValidation();


avatarChange.setEventListeners();
formProfile.setEventListeners();
addCardPopup.setEventListeners();
openPopupImage.setEventListeners();