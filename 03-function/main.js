
// Вхідні дані

const users = [    
    { login: 'mark', password: 'm', type: 'VIP', sale: 15 },
    { login: 'pol', password: 'p', type: 'public', sale: 5 }
];
            
const products = [
    { 
        name: 'Daenerys Sitting on Throne', 
        price: 512, 
        img: 'daenerys.jpeg', 
        type: 'public' 
    },
    { name: 'Fawkes Vinyl Figure', price: 312, img: 'fawkes.jpeg', type: 'VIP' },
    { name: 'Flash Vinyl Figure', price: 645, img: 'flash.jpeg', type: 'public' },
    { name: 'Kakashi', price: 700, img: 'kakashi.jpeg', type: 'VIP' },
    { name: 'The Mandalorian on Blurg', price: 400, img: 'mandalorian.jpeg', type: 'public' },
    { name: 'Naruto', price: 639, img: 'naruto.jpeg', type: 'VIP' },
    { name: 'Rey Vinyl Figure', price: 138, img: 'rey.jpeg', type: 'public' },
    { name: 'Steve Trevor Vinyl Figure', price: 138, img: 'steve.jpeg', type: 'public' },
    { name: 'Moana Te Ka', price: 211, img: 'te_ka.jpeg', type: 'public' }
];

// 1. обєкт стану сторінки/додатку
const appState = {
    currentUser: null,
    defaultType: 'public',
    defaultSale: 0,
}

// 2.

// users --> масив 
function verifyUser(login, password, users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
       
        if (user.login === login && user.password === password){
            return user;
        }
    }

    return null;
}

// розрахунок ціни
function calculatePrice(price, sale) {
    let discount  = (price * sale) / 100;
    let finalPrice = price - discount;
    return Math.round(finalPrice);
}

function initApp() {
    let isRegistered = confirm('Ви зареєстрований користувач?');

    if(isRegistered) {
        let userLogin = prompt('Введіть логін');
        let userPassword = prompt('Введіть пароль');

        let foundUser = verifyUser(userLogin, userPassword, users);

        if (foundUser !== null){
            appState.currentUser = foundUser;
            alert(`Вітаємо, ${foundUser.login}!`)
        } else {
            alert(`Користувача не знайдено!`)
        }
    }

    renderPage()
}

//
function renderPage(){
    let userType = appState.defaultType;
    let userSale = appState.defaultSale;
    let headerUserName = 'Режим гостя';

    if (appState.currentUser !== null) {
        userType = appState.currentUser.type;
        userSale = appState.currentUser.sale;
        headerUserName = 'Акаунт: ' + appState.currentUser.login;
    }

    let productLIstHtml = '';

    for(let i = 0; i < products.length; i++) {
        let product = products[i];

        if(userType === 'public' && product.type === 'VIP')
        {
            
        }

        let finalPrice = calculatePrice(product.price, userSale)
        
        productLIstHtml += `
            <li>
                <img src="${product.img}" alt="${product.name}" />
                <div>
                    <h3>${product.name}</h3>
                    <span>${finalPrice}</span>
                </div>
            </li>
        `;
    }


    let appContainer = document.getElementById("app");

    appContainer.innerHTML = `
        <header>
            <h1>Funko Shop</h1>
            <p>${headerUserName}</p>
        </header>
        <section>
            <h2>Новини</h2>
            <ul>
                ${productLIstHtml}
            </ul>
        </section>
    `;
}

initApp()