class FormValidator {
    constructor(formElement, options) {
        this._formElement = formElement;
        this._options = options;
        this._submitButton = this._formElement.querySelector(this._options.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._options.inputSelector));
    }

    _showError = (errorElement, inputElement) => {
        errorElement.innerText = inputElement.validationMessage;
        errorElement.classList.add(this._options.inputErrorClass);
        inputElement.classList.add(this._options.inputError);

    };

    _hiddenError = (errorElement, inputElement) => {
        errorElement.innerText = '';
        errorElement.classList.remove(this._options.inputErrorClass);
        inputElement.classList.remove(this._options.inputError);
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

    _setInputState = (inputElement, isValid) => {
        const inputSectionElement = inputElement.closest(this._options.inputSectionSelector);
        const errorElement = inputSectionElement.querySelector(this._options.inputErrorSelector);
        if (isValid) {
            this._hiddenError(errorElement, inputElement);
        } else {
            this._showError(errorElement, inputElement);
        }
    };

    _toggleInputState = (inputElement) => {
        const isValid = inputElement.validity.valid;
        this._setInputState(inputElement, isValid);
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
        const inputs = Array.from(this._formElement.querySelectorAll(this._options.inputSelector));

        inputs.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._toggleInputState(inputElement);
                this._toggleButtonState(inputs);
            });
        });
        this._toggleButtonState(inputs);
    };

    enableValidation = () => {
        this._inputList.forEach(form => {
            this._setEventListeners();
        });
    };
}

export { FormValidator };