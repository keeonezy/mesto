import { popupShowCard, openPopup } from "./index.js";

export { Card };

class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const newCard = document.getElementById(this._templateSelector).content.querySelector('.card').cloneNode(true);
        return newCard;
    }

    _handleLikeButton() {
        this._buttonLike.classList.toggle("card__like_active");
    }

    _handleImageViewer() {
        this._popupImage.src = this._link;
        this._popupImage.alt = this._name;
        this._popupFigcaption.textContent = this._name;
        openPopup(this._imageViewerPopup);
    }

    _handleDeleteButton() {
        this._cardElement.remove();
    }

    _setEventListeners() {
        this._buttonLike.addEventListener("click", () => this._handleLikeButton());
        this._deleteButton.addEventListener("click", () => this._handleDeleteButton());
        this._imageViewer.addEventListener("click", () => this._handleImageViewer());
    }

    createCard() {
        this._cardElement = this._getTemplate();
        this._imageElement = this._cardElement.querySelector(".card__image");
        this._captionElement = this._cardElement.querySelector(".card__title");
        this._buttonLike = this._cardElement.querySelector(".card__like");
        this._deleteButton = this._cardElement.querySelector(".card__trash");
        this._imageViewer = this._imageElement;
        this._popupImage = popupShowCard.querySelector(".popup__image");
        this._popupFigcaption = popupShowCard.querySelector(".popup__figcaption");
        this._imageViewerPopup = popupShowCard;

        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._captionElement.textContent = this._name;

        this._setEventListeners();

        return this._cardElement;
    }
}