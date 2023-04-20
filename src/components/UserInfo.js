class UserInfo {
    constructor({ userName, userAbout, userAvatar }) {
        this._userNameElement = document.querySelector(userName);
        this._userAboutElement = document.querySelector(userAbout);
        this._userAvatarElement = document.querySelector(userAvatar);
    }

    getUserInfo() {
        return {
            name: this._userNameElement.textContent,
            about: this._userAboutElement.textContent
        };
    }

    setUserInfo({ name, about }) {
        this._userNameElement.textContent = name;
        this._userAboutElement.textContent = about;
    }

    setUserAvatar({ avatar }) {
        this._userAvatarElement.src = avatar;
    }

}

export { UserInfo };