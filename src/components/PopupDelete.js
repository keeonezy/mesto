import { Popup } from "./Popup.js";

class PopupDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._submitButton = this._popupElement.querySelector(".popup__button");
        this._submitButtonTextContent = this._submitButton.textContent;
    }

    setSubmit(handleSubmit) {
        this._handleSubmit = handleSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener("click", (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        })
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "Удаление..."
        } else {
            this._submitButton.textContent = this._submitButtonTextContent;
        }
    }

}

export { PopupDelete };