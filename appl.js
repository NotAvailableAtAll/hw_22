
const store = new Store();
const milk = new Milk(123, 'Milk', 'Man', 10, 4);
const chocolate = new Chocolate(124, 'Choc', 'Man', 12, 'dark');
const wine = new Wine(125, 'Wine', 'Man', 35, 15);
store.add(milk);
store.add(chocolate);
store.add(wine);
// localStorage.getItem('products');
// let store = storageVal ? JSON.parse(storageVal) : [];

console.log(store)
const form = document.getElementById('form');
const card_product = document.getElementById('card_product');
const view_add = document.getElementById('view_add');
const view_products = document.getElementById('view_products');
const filter = document.getElementById('filter');
const container = document.querySelector('.container_form')

form.addEventListener('change', (event) => {
    let product_type = event.target.value
    switch (product_type) {
        case 'milk' : {
            form.querySelector('label').innerHTML =
                `
                <input type="number" name="fat" class="fat" id="fat" placeholder="Type fat">
                `
            break;
        }
        case 'chocolate' : {
            form.querySelector('label').innerHTML =
                `
                <input type="text" name="chocolate" class="kind" id="kind" placeholder="Type kind">
                `
            break;
        }
        case 'wine' : {
            form.querySelector('label').innerHTML =
                `
                <input type="number" name="alcohol" class="alcohol" id="alcohol" placeholder="Type alcohol %">
                `
            break;
        }
    }
})

// FORM
form.onsubmit = e => {
    e.preventDefault()
    let res = {};
    switch (e.target.form_selector.value) {
        case 'milk' : {
            res = new Milk (
                e.target.product_id.value,
                e.target.title.value,
                e.target.manufacture.value,
                e.target.price.value,
                e.target.fat.value,
                )
            break;
        }
        case 'chocolate' : {
            res = new Chocolate (
                e.target.product_id.value,
                e.target.title.value,
                e.target.manufacture.value,
                e.target.price.value,
                e.target.kind.value,
            )
            break;
        }
        case 'wine' : {
            res = new Wine (
                e.target.product_id.value,
                e.target.title.value,
                e.target.manufacture.value,
                e.target.price.value,
                e.target._alcohol.value,
            )
            break;
        }
    }
    store.add(res);
    document.forms[0].reset();
    console.log(store);
    // localStorage.setItem("products",
    //     JSON.stringify(store));
}

// RENDER
function render(product){
    function card(product) {
        const selector = (product) => {
            if (product._fat)
                return `Fat: ${product._fat}%`
            else if (product._kind)
                return `Kind: ${product._kind}`
            else if (product._alcohol)
                return `Alcohol: ${product._alcohol}%`
            else return `----`
        };
        return `
            <div class="card">
            <p>Name: ${product.constructor.name}</p>
            <p>Title: ${product.title}</p>
            <p>Manufacture: ${product.manufacture}</p>
            <p>Price: ${product.price}</p>
            <p>${selector(product)}</p>
            </div>
            `
    }

    card_product.innerHTML = product.map(card).join(' ');
}

// BUTTONS NAV

view_add.onclick = e => {
    form.classList.remove('none');
    filter.classList.add('none');
    card_product.classList.add('none');
    card_product.classList.remove('card_product');
    container.classList.remove('none')

}

view_products.onclick = e => {
    container.classList.add('none')
    card_product.classList.add('card_product');
    filter.classList.remove('none')
    render(store.getAll());
}

// FILTER
filter.addEventListener('change', (event) => {
    if (event.target.value === 'all') {
        render(store.getAll())
        form.classList.add('none')
    } else {
        render(store.getByType(event.target.value));
        form.classList.add('none')
    }
})



