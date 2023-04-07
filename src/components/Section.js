class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._rendere = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }

    addItem(item) {
        this._containerSelector.prepend(item);
    }

    rendererItems() {
        this._items.forEach(this._renderer);
    }
}