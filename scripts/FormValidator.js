export { FormValidator };

class FormValidator {
    constructor(formElement, options) {
        this._formElement = formElement;
        this._options = options;
    }

    _hiddenError = (errorElement, inputErrorClass) => {
        errorElement.innerText = '';
        errorElement.classList.remove(inputErrorClass);
    };

    _showError = (errorElement, message, inputErrorClass) => {
        errorElement.innerText = message;
        errorElement.classList.add(inputErrorClass);
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
        this._formElement.removeAttribute('disabled');
        this._formElement.classList.remove(this._options.disabledButtonClass);
    };

    // Деактивация кнопки
    disableButton = () => {
        this._formElement.setAttribute('disabled', true);
        this._formElement.classList.add(this._options.disabledButtonClass);
    };

    _toggleButtonState = (inputs) => {
        const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

        if (formIsValid) {
            this._enableButton(this._formElement, this._options.disabledButtonClass);
        } else {
            this.disableButton(this._formElement, this._options.disabledButtonClass);
        }
    };

    _setEventListeners = (form) => {
        const submitElement = form.querySelector(this._options.submitButtonSelector);
        const inputs = Array.from(form.querySelectorAll(this._options.inputSelector));

        inputs.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._toggleInputState(inputElement, this._options);
                this._toggleButtonState(inputs, submitElement, this._options.disabledButtonClass);
            });
        });
        this._toggleButtonState(inputs, submitElement, this._options.disabledButtonClass);
    };

    enableValidation = () => {
        const forms = Array.from(document.querySelectorAll(this._options.formSelector));
        forms.forEach(form => {
            this._setEventListeners(form, this._options);
        });
    };
}