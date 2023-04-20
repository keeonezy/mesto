class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(card) {
        this._container.prepend(card)
    }

    renderItems(items) {
        items.reverse().forEach(item => {
            this._renderer(item)
        })
    }
}

export { Section };