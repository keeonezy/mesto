class Api {
    constructor(options) {
        // тело конструктора
    }

    getInitialCards() {
        // ...
    }

    // другие методы работы с API
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
        authorization: '2b912826-2e01-41bd-a2c8-a9cb197269a0',
        'Content-Type': 'application/json'
    }
});

export { Api };