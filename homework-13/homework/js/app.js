const showCategories = () => {
    const parent = document.querySelector('.categories');
    if (!parent) {
        return;
    }

    const categoriesList = document.createElement('ul');
    categoriesList.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'LI') {
            const categoryId = event
                .target
                .getAttribute('data-category');
            // const category = getCategoryById(categoryId);
            const category = categories[categoryId];
            if (!category) {
                return;
            }
            // console.log(category);
            showProductsByCategory(category);
        }
    });

    Object
        .values(categories)
        .forEach(category => {
            const element = document.createElement('li');
            element.textContent = category.name;
            element.setAttribute('data-category', category.id);

            // element.addEventListener('click', () => {   console.log(category); });

            categoriesList.appendChild(element);
        });

    parent.appendChild(categoriesList);
}

// const getCategoryById = id => categories.find(category => category.id == id);

const showProductsByCategory = category => {
    // const { products } = category; те саме, що і нижче
    const products = category.products;
    const parent = document.querySelector('.products');
    if (!parent) {
        return;
    }

    parent.innerHTML = '';

    const productsList = document.createElement('ul');

    productsList.addEventListener('click', event => {
        if (event.target && event.target.tagName === 'LI') {
            // const categoryId = category.id
            const categoryId = event
                .target
                .getAttribute('data-category');
            const productId = event
                .target
                .getAttribute('data-product');
            // TODO: (at home) Add content to the third column

            const product = products.find(prod => prod.id == productId);
            if (!product) {
                return
            }

            const elementInfoList = document.createElement('ul');

            parent.appendChild(elementInfoList);

            showProductInfo(product);
        }
    });

    products.forEach(product => {
        const element = document.createElement('li');
        element.textContent = `${product.name} - $${product.price}`;
        element.setAttribute('data-product', product.id);
        element.setAttribute('data-category', category.id);
        // element.addEventListener('click', () => {   console.log(product); })
        productsList.appendChild(element);
    });

    parent.appendChild(productsList);
}
const showProductInfo = product => {
    const infoParent = document.querySelector('.info');
    if (!infoParent) {
        return;
    }
    infoParent.innerHTML = '';

    const name = document.createElement('h3');
    name.textContent = product.name;
    const description = document.createElement('p')
    description.textContent = product.description;
    const price = document.createElement('span');
    price.textContent = `Ціна: $${product.price}`;
    const buyBtn = document.createElement('button');

    const orderDetails = document.querySelector('.order-details');

    buyBtn
        .classList
        .add('button');
    buyBtn.textContent = 'Buy';

    buyBtn.addEventListener('click', function () {
        orderDetails.textContent = `${product.name} було додано в кошик, перейдіть до оформлення замовлення нижче`;

        showOrderForm();
    });

    infoParent.appendChild(name)
    infoParent.appendChild(description)
    infoParent.appendChild(price)
    infoParent.appendChild(buyBtn)
}
const cities = {
    kyiv: 'Kyiv',
    rivne: 'Rivne',
    london: 'London',
    tokyo: 'Tokyo'
};
const form = document.forms.orderForm;
form.classList.add('display-none');

function showOrderForm() {
    form.classList.remove('display-none');
    form.scrollIntoView({ behavior: 'smooth' });
}
document
    .querySelector('.order-btn')
    .addEventListener('click', () => {
        const userName = form.userName.value.trim();
        const phoneNumber = form.phoneNumber.value.trim();
        const email = form.email.value.trim();
        const city = form.city.value;
        const address = form.address.value.trim();
        const paymentMethod = form.paymentMethod.value;
        const amount = form.amount.value;
        
        if (!userName || !phoneNumber || !email || !city || !address || !paymentMethod || !amount) {
        alert('Будь ласка, заповніть всі поля!');
        return;
    }

        form
            .classList
            .add('display-none');
        const userInfoWrap = document.createElement('div');
    userInfoWrap.classList.add('order-details');
    const userInfo = document.createElement('div');

        userInfo.innerHTML = `
        <h3>Оформлення замовлення</h3>
        <p>ПІБ: ${userName}</p>
        <p>Номер телефону: ${phoneNumber}</p>
        <p>Email: ${email}</p>
        <p>Місто: ${cities[city]}</p>
        <p>Адреса: ${address}</p>
        <p>Спосіб оплати: ${paymentMethod}</p>
        <p>Кількість: ${amount}</p>
        `
        userInfoWrap.appendChild(userInfo);

        const orderDetails = document.querySelector('.order-details');
        orderDetails.innerHTML = '';
        orderDetails.appendChild(userInfoWrap);
    })

showCategories();