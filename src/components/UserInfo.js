class UserInfo {
    constructor({ userName, userJob }) {
        this._userNameElement = document.querySelector(userName);
        this._userJobElement = document.querySelector(userJob);
    }

    getUserInfo() {
        return {
            name: this._userNameElement.textContent,
            description: this._userJobElement.textContent
        };
    }

    setUserInfo(element) {
        this._userNameElement.textContent = element.name;
        this._userJobElement.textContent = element.description;
    }
}

export { UserInfo };