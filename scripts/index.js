// Для работы с попапами
const popup = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const buttonEditProfile = document.querySelector(".profile__button-edit");
const popupAddCard = document.querySelector(".popup-add-card");
const buttonAddCard = document.querySelector(".profile__button-add");
const buttonClosePopup = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__group");

// Для работы с инпутами
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

popupEditProfile.addEventListener("click", handleOverlayClose);
popupForm.addEventListener("submit", handleFormSubmit);

// Открытие попапа для редактирование профиля
buttonEditProfile.addEventListener("click", function () {
    popupEditProfile.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

// Функция закрытия попапа универсальная
function handleClosePopup(poupToClose) {
    poupToClose.classList.remove("popup_opened");
}

// Отправки формы
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    handleClosePopup(popupEditProfile);
}

// Закрытие попапа за пределами формы
function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
        handleClosePopup(popupEditProfile);
    }
}

// Открываем попап с добавлением карточки
buttonAddCard.addEventListener("click", function () {
    popupAddCard.classList.add("popup_opened");
});

// Работа с template и массивом
const template = document.getElementById("card-li");
const templatePaste = document.querySelector(".elements__list");

const getCardTemplate = (card) => {
    const newCard = template.content.cloneNode(true);
    const newItem = newCard.querySelector(".card__title");
    newItem.textContent = card.name;
    const addLink = newCard.querySelector(".card__image");
    addLink.src = card.link;
    return newCard;
}

const renderItem = (wrap, card) => {
    wrap.append(getCardTemplate(card))
}

initialCards.forEach((card) => {
    renderItem(templatePaste, card)
})