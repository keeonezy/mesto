const popup = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const buttonEdit = document.querySelector(".profile__button-edit");
const buttonClose = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__group");

// Работа с инпутами
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");



popupEditProfile.addEventListener("click", handleOverlayClose);
buttonEdit.addEventListener("click", handleOpenedPopup);
buttonClose.addEventListener("click", handleClosePopup);
popupForm.addEventListener("submit", handleFormSubmit);



function handleOpenedPopup() {
    popupEditProfile.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function handleClosePopup() {
    popupEditProfile.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    handleClosePopup();
}

function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
        handleClosePopup();
    }
}


//5 Часть
// Работа с попапом
const popupAddCard = document.querySelector(".popup-add-card");
const addButtonCard = document.querySelector(".profile__button-add");
addButtonCard.addEventListener("click", handleOpenedPopupCard);

function handleOpenedPopupCard() {
    popupAddCard.classList.toggle("popup_opened");
}

//Работа с карточками
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