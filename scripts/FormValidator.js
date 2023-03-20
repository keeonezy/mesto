export { disableButton, enableValidation };

const hiddenError = (errorElement, inputErrorClass) => {
    errorElement.innerText = '';
    errorElement.classList.remove(inputErrorClass);
};

const showError = (errorElement, message, inputErrorClass) => {
    errorElement.innerText = message;
    errorElement.classList.add(inputErrorClass);
};

const setInputState = (inputElement, isValid, options) => {
    const { inputSectionSelector, inputErrorSelector, inputErrorClass } = options;
    const inputSectionElement = inputElement.closest(inputSectionSelector);
    const errorElement = inputSectionElement.querySelector(inputErrorSelector);
    if (isValid) {
        hiddenError(errorElement, inputErrorClass);
    } else {
        showError(errorElement, inputElement.validationMessage, inputErrorClass);
    }
};

const toggleInputState = (inputElement, options) => {
    const isValid = inputElement.validity.valid;
    setInputState(inputElement, isValid, options);
};

// Активация кнопки
const enableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(disabledButtonClass);
};

// Деактивация кнопки
const disableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(disabledButtonClass);
};

const toggleButtonState = (inputs, submitElement, disabledButtonClass) => {
    const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

    if (formIsValid) {
        enableButton(submitElement, disabledButtonClass);
    } else {
        disableButton(submitElement, disabledButtonClass);
    }
};

const setEventListeners = (form, options) => {
    const submitElement = form.querySelector(options.submitButtonSelector);
    const inputs = Array.from(form.querySelectorAll(options.inputSelector));

    inputs.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            toggleInputState(inputElement, options);
            toggleButtonState(inputs, submitElement, options.disabledButtonClass);
        });
    });
    toggleButtonState(inputs, submitElement, options.disabledButtonClass);
};

const enableValidation = (options) => {
    const forms = Array.from(document.querySelectorAll(options.formSelector));
    forms.forEach(form => {
        setEventListeners(form, options);
    });
};