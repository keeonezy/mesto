class UserInfo {
    constructor({ userName, userAbout, userAvatar }) {
        this._userNameElement = document.querySelector(userName);
        this._userAboutElement = document.querySelector(userAbout);
        this._userAvatarElement = document.querySelector(userAvatar);
    }

    getUserInfo() {
        return {
            name: this._userNameElement.textContent,
            about: this._userAboutElement.textContent,
            userId: this._userId,
        };
    }

    setUserInfo({ name, about, _id, avatar }) {
        this._userNameElement.textContent = name;
        this._userAboutElement.textContent = about;
        this._userId = _id;
        this._userAvatarElement.src = avatar;

    }

}

export { UserInfo };