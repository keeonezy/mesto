// Переменные основные
const popup = document.querySelector(".popup");
const popups = document.querySelectorAll(".popup");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const buttonEditProfile = document.querySelector(".profile__button-edit");
const popupAddCard = document.querySelector(".popup-add-card");
const buttonAddCard = document.querySelector(".profile__button-add");
const popupShowCard = document.querySelector(".popup-show-card");
const buttonClosePopup = document.querySelector(".popup__close");
const popupImage = document.querySelector(".popup__image");
const popupFigcaption = document.querySelector(".popup__figcaption");
const formEditProfile = document.forms.editProfile;
const formAddCard = document.forms.addCard;
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
//Template
const template = document.getElementById("card-li");
const cardList = document.querySelector(".elements__list");
// Инпуты
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

// Функция открытия попапа
function openPopup(popup) {
    popup.classList.add("popup_opened");
};

// Функция закрытия попапа универсальная
function handleClosePopup(popupToClose) {
    popupToClose.classList.remove("popup_opened");
};

// Закрытие попапа на крестик и за пределами формы
popups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
        if (evt.target.classList.contains("popup_opened")) {
            handleClosePopup(popup);
        };
        if (evt.target.classList.contains("popup__close")) {
            handleClosePopup(popup);
        };
    });
});

// Popup открытие для редактирования профиля
buttonEditProfile.addEventListener("click", function () {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

// Отправки формы профиля
function handleFormEditProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    handleClosePopup(popupEditProfile);
};

// Popup открытие для добавления карточки
buttonAddCard.addEventListener("click", function () {
    openPopup(popupAddCard);
});

// Вывод массив карточек cards.js и не только
const getCardTemplate = (card) => {
    const newCard = template.content.cloneNode(true);
    const newItem = newCard.querySelector(".card__title").textContent = card.name;
    const addAltImage = newCard.querySelector(".card__image").alt = card.name;
    const addLinkImage = newCard.querySelector(".card__image").src = card.link;

    // Удаление карточки
    buttonDeleteCard = newCard.querySelector(".card__trash");

    buttonDeleteCard.addEventListener("click", function () {
        this.closest('.card').remove();
    });

    // Поставить или убрать карточки лайк
    const buttonLike = newCard.querySelector(".card__like");

    buttonLike.addEventListener("click", function () {
        buttonLike.classList.toggle('card__like_active');
    });

    // popup открытие с просмотром карточки
    const viewImage = newCard.querySelector(".card__image");

    viewImage.addEventListener("click", () => {
        popupImage.src = card.link;
        popupImage.alt = card.name;
        popupFigcaption.textContent = card.name;
        openPopup(popupShowCard);
    });

    return newCard;
};

// Показываем карточки
initialCards.forEach(card => {
    const newCard = getCardTemplate(card);
    cardList.prepend(newCard);
});

// Добавление новой карточки
function handleFormAddCardSubmit(evt) {
    evt.preventDefault();
    const title = formAddCard.elements.inputName.value;
    const url = formAddCard.elements.inputUrl.value;

    const card = {
        name: title,
        link: url,
    };

    const newCard = getCardTemplate(card);

    cardList.prepend(newCard);
    handleClosePopup(popupAddCard);
    formAddCard.reset();
};

formEditProfile.addEventListener("submit", handleFormEditProfileSubmit);
formAddCard.addEventListener("submit", handleFormAddCardSubmit);