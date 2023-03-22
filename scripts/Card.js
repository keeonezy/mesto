import { popupShowCard, openPopup } from "./index.js";

class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const newCard = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
        return newCard;
    }

    _handlerLikeButton() {
        this._likeButton.classList.toggle("card__like_active");
    }

    _handlerDeleteButton() {
        this._cardElement.remove();
    }

    _handlerImageViewer() {
        this._popupImage.src = this._link;
        this._popupImage.alt = this._name;
        this._popupFigcaption.textContent = this._name;
        openPopup(popupShowCard);
    }

    _setEventListeners() {
        this._likeButton.addEventListener("click", () => this._handlerLikeButton());
        this._deleteButton.addEventListener("click", () => this._handlerDeleteButton());
        this._imageElement.addEventListener("click", () => this._handlerImageViewer());
    }

    createCard() {
        this._cardElement = this._getTemplate();
        this._likeButton = this._cardElement.querySelector(".card__like");
        this._deleteButton = this._cardElement.querySelector(".card__trash");
        this._imageElement = this._cardElement.querySelector(".card__image");
        this._titleCard = this._cardElement.querySelector(".card__title");
        this._popupImage = popupShowCard.querySelector(".popup__image");
        this._popupFigcaption = popupShowCard.querySelector(".popup__figcaption");

        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._titleCard.textContent = this._name;

        this._setEventListeners();

        return this._cardElement;
    }
}

export { Card };