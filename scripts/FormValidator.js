export { FormValidator };

class FormValidator {
    constructor(formElement, options) {
        this._formElement = formElement;
        this._options = options;
    }

    hiddenError = (errorElement, inputErrorClass) => {
        errorElement.innerText = '';
        errorElement.classList.remove(inputErrorClass);
    };

    showError = (errorElement, message, inputErrorClass) => {
        errorElement.innerText = message;
        errorElement.classList.add(inputErrorClass);
    };

    setInputState = (inputElement, isValid) => {
        const inputSectionElement = inputElement.closest(this._options.inputSectionSelector);
        const errorElement = inputSectionElement.querySelector(this._options.inputErrorSelector);
        if (isValid) {
            this.hiddenError(errorElement, this._options.inputErrorClass);
        } else {
            this.showError(errorElement, inputElement.validationMessage, this._options.inputErrorClass);
        }
    };

    toggleInputState = (inputElement) => {
        const isValid = inputElement.validity.valid;
        this.setInputState(inputElement, isValid, this._options);
    };

    // Активация кнопки
    enableButton = () => {
        this._formElement.removeAttribute('disabled');
        this._formElement.classList.remove(this._options.disabledButtonClass);
    };

    // Деактивация кнопки
    disableButton = () => {
        this._formElement.setAttribute('disabled', true);
        this._formElement.classList.add(this._options.disabledButtonClass);
    };

    toggleButtonState = (inputs) => {
        const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

        if (formIsValid) {
            this.enableButton(this._formElement, this._options.disabledButtonClass);
        } else {
            this.disableButton(this._formElement, this._options.disabledButtonClass);
        }
    };

    setEventListeners = (form) => {
        const submitElement = form.querySelector(this._options.submitButtonSelector);
        const inputs = Array.from(form.querySelectorAll(this._options.inputSelector));

        inputs.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this.toggleInputState(inputElement, this._options);
                this.toggleButtonState(inputs, submitElement, this._options.disabledButtonClass);
            });
        });
        this.toggleButtonState(inputs, submitElement, this._options.disabledButtonClass);
    };

    enableValidation = () => {
        const forms = Array.from(document.querySelectorAll(this._options.formSelector));
        forms.forEach(form => {
            this.setEventListeners(form, this._options);
        });
    };
}