class Card {
    constructor(data, templateSelector, handleCardClick, userId) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
        this._userId = userId;

        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const newCard = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);
        return newCard;
    }

    _handlerLikeButton() {
        this._likeButton.classList.toggle("card__like_active");
    }

    _handlerDeleteButton() {
        this._cardElement.remove();
    }

    _setEventListeners() {
        this._likeButton.addEventListener("click", () => this._handlerLikeButton());
        this._deleteButton.addEventListener("click", () => this._handlerDeleteButton());
        this._imageElement.addEventListener("click", () => this._handleCardClick(this._name, this._link));
    }

    // Проверяем владельца API на разрешение удаления
    _checkOwner() {
        if (this._ownerId !== this._userId) {
            this._deleteButton.remove();
        }
    }

    _checkLikeCard() {
        if (this._likes.find((user) =>
            this._userId === user._id
        )) {
            this._likeButton.classList.add("card__like_active");
        }
    }

    generateCard() {
        this._cardElement = this._getTemplate();
        this._likeButton = this._cardElement.querySelector(".card__like");
        this._likeCounter = this._cardElement.querySelector(".card__like-number");
        this._deleteButton = this._cardElement.querySelector(".card__trash");
        this._imageElement = this._cardElement.querySelector(".card__image");
        this._titleCard = this._cardElement.querySelector(".card__title");

        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._titleCard.textContent = this._name;
        this._likeCounter.textContent = this._likes.length;

        this._checkLikeCard();
        this._checkOwner();
        this._setEventListeners();

        return this._cardElement;
    }
}

export { Card };