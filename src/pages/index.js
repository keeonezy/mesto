import "./index.css";
import { profileEditButton, cardAddButton, avatarAddButton, validationOptions, initialCards } from "../utils/constants.js"
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupDelete } from "../components/PopupDelete.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";


// Данные для получения доступа к API предоставленный практикумом
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
        userInfo.setUserInfo(userData);
        cardContainer.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });


// Меняем аватар пользователя в попапе
const avatarChange = new PopupWithForm(".popup_type_avatar", {
    submitForm: ({ avatarInput }) => {
        avatarChange.renderLoading(true);
        api.editUserAvatar({ avatarInput })
            .then((data) => {
                userInfo.setUserInfo(data);
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
    formValidators['changeAvatar'].disableButton();
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
    formValidators['editProfile'].disableButton();

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
    formValidators['addCard'].disableButton();
})


// Попап для удаления карточек
const deletePopup = new PopupDelete(".popup_type_enter");


const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formElement) => {
        const validator = new FormValidator(formElement, config)
        const formName = formElement.getAttribute('name')
        formValidators[formName] = validator;
        validator.enableValidation();
    });
};

enableValidation(validationOptions);


deletePopup.setEventListeners();
avatarChange.setEventListeners();
formProfile.setEventListeners();
addCardPopup.setEventListeners();
openPopupImage.setEventListeners();