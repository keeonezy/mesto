import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, { submitForm }) {
        super(popupSelector);
        this._handleFormSubmit = submitForm;
        this._formElement = this._popupElement.querySelector(".popup__form");
        this._inputList = this._formElement.querySelectorAll(".popup__input");
        this._submitButton = this._formElement.querySelector(".popup__button");
        this._submitButtonTextContent = this._submitButton.textContent;
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    setInputValues(element) {
        this._inputList.forEach((input) => {
            input.value = element[input.name]
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._formElement.reset();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "Сохранение..."
        } else {
            this._submitButton.textContent = this._submitButtonTextContent;
        }
    }
}

export { PopupWithForm };