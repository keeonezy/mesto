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

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }


    // Получение информации о пользователе с API
    getUserInfo() {
        return this._request(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
    }

    //загрузка карточек
    getInitialCards() {
        return this._request(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
    }

    // Редактирование профиля имя и обо мне
    editUserInfo({ name, about }) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
    }

    // Редактируем аватар пользователя
    editUserAvatar({ avatarInput }) {
        return this._request(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarInput
            })
        })
    }

    // Добавляем новую карточку
    addNewCard({ name, link }) {
        return this._request(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
    }

    // Удаляем карточку
    deleteCard(id) {
        return this._request(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers
        })
    }

    // Ставим лайк
    setlike(id) {
        return this._request(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers
        })
    }

    // Убираем лайк
    deleteLike(id) {
        return this._request(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers
        })
    }

}

export { Api };