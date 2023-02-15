// Для работы с попапами
const popup = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const buttonEditProfile = document.querySelector(".profile__button-edit");
const popupAddCard = document.querySelector(".popup-add-card");
const buttonAddCard = document.querySelector(".profile__button-add");
const buttonClosePopup = document.querySelector(".popup__close");
const FormEdit = document.forms.editProfile;
const FormAdd = document.forms.addCard;

// Для работы с инпутами
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

FormEdit.addEventListener("submit", handleFormSubmit);

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
// popupEditProfile.addEventListener("click", handleOverlayClose);
// popupAddCard.addEventListener("click", handleOverlayClose2);

// function handleOverlayClose(evt) {
//     if (evt.target === evt.currentTarget) {
//         handleClosePopup(popupEditProfile);
//     }
// }

// function handleOverlayClose2(evt) {
//     if (evt.target === evt.currentTarget) {
//         handleClosePopup(popupAddCard);
//     }
// }

// Закрытие попапа на крестик и за пределами формы
const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            handleClosePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          handleClosePopup(popup)
        }
    })
})

// Открываем попап с добавлением карточки
buttonAddCard.addEventListener("click", function () {
    popupAddCard.classList.add("popup_opened");
});

// Добавление новой карточки
FormAdd.addEventListener("submit", handleFormSubmit2);

function handleFormSubmit2(evt) {
    evt.preventDefault();
    const title = FormAdd.elements.inputName.value;
    const url = FormAdd.elements.inputUrl.value;

    const newCard = template.content.cloneNode(true);
    const newItem = newCard.querySelector(".card__title");
    newItem.textContent = title;
    const addLink = newCard.querySelector(".card__image");
    addLink.src = url;
    const newAlt = newCard.querySelector(".card__title").alt = title;

    templatePaste.prepend(newCard);
    handleClosePopup(popupAddCard);
}

// Работа с template и массивом
const template = document.getElementById("card-li");
const templatePaste = document.querySelector(".elements__list");

const getCardTemplate = (card) => {
    const newCard = template.content.cloneNode(true);
    const newItem = newCard.querySelector(".card__title");
    newItem.textContent = card.name;
    const addLink = newCard.querySelector(".card__image");
    addLink.src = card.link;
    const newAlt = newCard.querySelector(".card__title").alt = card.name;
    return newCard;
}

const renderItem = (wrap, card) => {
    wrap.append(getCardTemplate(card))
}

initialCards.forEach((card) => {
    renderItem(templatePaste, card)
})

// Лайк карточкам
const buttonLike = document.querySelectorAll('.card__like');

for (let button of buttonLike) {
  button.addEventListener('click', function () {
    button.classList.toggle('card__like_active');
  });
}