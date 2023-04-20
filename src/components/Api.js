class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    // Проверяем на ошибку
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // Получение информации о пользователе с API
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })

            .then(res => this._checkResponse(res));
    }

    //загрузка карточек
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then((res) => this._checkResponse(res));
    }

    // Редактирование профиля имя и обо мне
    editUserInfo({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })

            .then((res) => this._checkResponse(res));
    }

    // Редактируем аватар пользователя
    editUserAvatar({ link }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
            })
        })

            .then((res) => this._checkResponse(res));
    }

    // Добавляем новую карточку
    addNewCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })

            .then((res) => this._checkResponse(res));
    }

    // Удаляем карточку
    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then((res) => this._checkResponse(res));
    }

    // Ставим лайк
    setlike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers
        })

            .then((res) => this._checkResponse(res));
    }

    // Убираем лайк
    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers
        })

            .then((res) => this._checkResponse(res));
    }

}

export { Api };