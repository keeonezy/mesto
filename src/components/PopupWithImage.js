import { Popup } from "./Popup";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super.popupSelector;
        this._imageElement = this._popupSelector.querySelector('.popup__image');
        this._textElement = this._popupSelector.querySelector('.popup__figcaption');
    }

    open(evt) {
        this._textElement.textContent = evt.name;
        this._imageElement.src = evt.link;
        this._imageElement.alt = evt.name;
        super.open();
    }

}

export { PopupWithImage };