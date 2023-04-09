import { Popup } from "./Popup";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popupElement.querySelector(".popup__image");
        this._textElement = this._popupElement.querySelector(".popup__figcaption");
    }

    open({ name, link }) {
        this._textElement.textContent = name;
        this._imageElement.src = link;
        this._imageElement.alt = name;
        super.open();
    }

}

export { PopupWithImage };