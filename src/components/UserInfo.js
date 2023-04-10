class UserInfo {
    constructor({ userName, userJob }) {
        this._userNameElement = document.querySelector(userName);
        this._userJobElement = document.querySelector(userJob);
    }

    getUserInfo() {
        return {
            name: this._userNameElement.textContent,
            about: this._userJobElement.textContent
        };
    }

    setUserInfo({ name, about }) {
        this._userNameElement.textContent = name;
        this._userJobElement.textContent = about;
    }
}

export { UserInfo };