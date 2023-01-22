
class Products {
    #id
    constructor(id, title, manufacture, price) {
        this.#id = id;
        this._title = title;
        this._manufacture = manufacture;
        this._price = price;
    }


    get id() {
        return this.#id;
    }


    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get manufacture() {
        return this._manufacture;
    }

    set manufacture(value) {
        this._manufacture = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

class Milk extends Products {
    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this._fat = fat;
    }
}

class Chocolate extends Products {
    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this._kind = kind;
    }
}

class Wine extends Products {

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this._alcohol = alcohol;
    }
}

class Store {
    #products = [];

    add(product) {
        this.#products.push(product);
    }

    getAll() {
        return this.#products;
    }

    getByType(type) {
        let res = this.#products.filter(tr => tr.constructor.name.toLowerCase() === type);
        return [...res];
    }
}





