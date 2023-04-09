class UserInfo {
    constructor({ profileSelector, jobSelector }) {
        this._profile = document.querySelector(profileSelector);
        this._profileJob = document.querySelector(jobSelector);
    }

    getUserInfo() {
        const profile = {
            name: this._profile,
            job: this._profileJob
        }
        return profile;
    }

    setUserInfo(profile) {
        this._profile.textContent = profile.name;
        this._profileJob.textContent = profile.job;
    }
}

export { UserInfo };