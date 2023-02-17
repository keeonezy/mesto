// Для работы с попапами
const popup = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const buttonEditProfile = document.querySelector(".profile__button-edit");
const popupAddCard = document.querySelector(".popup-add-card");
const buttonAddCard = document.querySelector(".profile__button-add");
const popupShowCard = document.querySelector(".popup-show-card");
const buttonClosePopup = document.querySelector(".popup__close");
const formEditProfile = document.forms.editProfile;
const formAddCard = document.forms.addCard;

// Для работы с инпутами
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

formEditProfile.addEventListener("submit", handleFormSubmit);

// Функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
};

// Функция закрытия попапа универсальная
function handleClosePopup(popupToClose) {
    popupToClose.classList.remove("popup_opened");
};

// Закрытие попапа на крестик и за пределами формы
const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            handleClosePopup(popup);
        };
        if (evt.target.classList.contains('popup__close')) {
            handleClosePopup(popup);
        };
    });
});

// Открытие попапа для редактирование профиля
buttonEditProfile.addEventListener("click", function () {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

// Отправки формы профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    handleClosePopup(popupEditProfile);
};

// Открываем попап с добавлением карточки
buttonAddCard.addEventListener("click", function () {
    openPopup(popupAddCard);
});

// Работа с template и массивом(вывод карточек)
const template = document.getElementById("card-li");
const templatePaste = document.querySelector(".elements__list");

const getCardTemplate = (card) => {
    const newCard = template.content.cloneNode(true);
    const newItem = newCard.querySelector(".card__title");
    newItem.textContent = card.name;
    const addLink = newCard.querySelector(".card__image");
    addLink.src = card.link;
    addLink.alt = card.name;
    return newCard;
}

const renderItem = (wrap, card) => {
    wrap.append(getCardTemplate(card));
};

initialCards.forEach((card) => {
    renderItem(templatePaste, card);
});

// Добавление новой карточки
formAddCard.addEventListener("submit", handleFormSubmit2);

function handleFormSubmit2(evt) {
    evt.preventDefault();
    const title = formAddCard.elements.inputName.value;
    const url = formAddCard.elements.inputUrl.value;

    const newCard = template.content.cloneNode(true);
    const newItem = newCard.querySelector(".card__title");
    newItem.textContent = title;
    const addLink = newCard.querySelector(".card__image");
    addLink.src = url;
    const newAlt = newCard.querySelector(".card__image").alt = title;

    templatePaste.prepend(newCard);
    handleClosePopup(popupAddCard);
};

// Лайк карточкам(код здесь т.к после загрузки карточек только работает)
const buttonLike = document.querySelectorAll('.card__like');

for (let button of buttonLike) {
    button.addEventListener('click', function () {
        button.classList.toggle('card__like_active');
    });
};

// Удаление карточек
templatePaste.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('card__trash')) {
        const cardElement = evt.target.closest('.card');
        cardElement.remove();
    };
});

// Открытие попапа с карточкой
const popupImage = document.querySelector(".popup__image");
const popupFigcaption = document.querySelector(".popup__figcaption");

templatePaste.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('card__image')) {
        popupImage.src = target.src;
        popupImage.alt = target.alt;
        popupFigcaption.textContent = target.alt;
        openPopup(popupShowCard);
    };
});