class FormValidator {
    constructor(submitButton, options) {
        this._submitButton = submitButton;
        this._options = options;
        this._submitElement = document.querySelector(this._options.submitButtonSelector);
        this._inputList = Array.from(this._submitButton.querySelectorAll(this._options.inputSelector));
    }

    _hiddenError = (errorElement) => {
        errorElement.innerText = '';
        errorElement.classList.remove(this._options.inputErrorClass);
    };

    _showError = (errorElement, message) => {
        errorElement.innerText = message;
        errorElement.classList.add(this._options.inputErrorClass);

    };

    _setInputState = (inputElement, isValid) => {
        const inputSectionElement = inputElement.closest(this._options.inputSectionSelector);
        const errorElement = inputSectionElement.querySelector(this._options.inputErrorSelector);
        if (isValid) {
            this._hiddenError(errorElement, this._options.inputErrorClass);
        } else {
            this._showError(errorElement, inputElement.validationMessage, this._options.inputErrorClass);
        }
    };

    _toggleInputState = (inputElement) => {
        const isValid = inputElement.validity.valid;
        this._setInputState(inputElement, isValid, this._options);
    };

    // Активация кнопки
    _enableButton = () => {
        this._submitButton.removeAttribute('disabled');
        this._submitButton.classList.remove(this._options.disabledButtonClass);
    };

    // Деактивация кнопки
    disableButton = () => {
        this._submitButton.setAttribute('disabled', true);
        this._submitButton.classList.add(this._options.disabledButtonClass);
    };

    _toggleButtonState = (inputs) => {
        const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

        if (formIsValid) {
            this._enableButton();
        } else {
            this.disableButton();
        }
    };

    _setEventListeners = () => {
        const inputs = Array.from(document.querySelectorAll(this._options.inputSelector));

        inputs.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._toggleInputState(inputElement, this._options);
                this._toggleButtonState(inputs, this._submitElement, this._options.disabledButtonClass);
            });
        });
        this._toggleButtonState(inputs, this._submitElement, this._options.disabledButtonClass);
    };

    enableValidation = () => {
        this._inputList.forEach(form => {
            this._setEventListeners(form, this._options);
        });
    };
}

export { FormValidator };