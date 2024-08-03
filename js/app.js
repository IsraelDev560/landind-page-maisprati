function submitForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let show = document.getElementById("result");

    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    show.innerHTML = `<p>Obrigado por entrar em contato, ${name}!</p>
                      <button class="btn-close" onclick="closeResult()">Fechar</button>`
    show.style.display = "block";
}
function closeResult() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";

    let show = document.getElementById("result");
    show.style.display = "none";
}

function recarregarPagina() {
    window.location.reload(); 
}
window.onload = function () {

    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
};

const addToCart = (product, price, image, quantity) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let existingItem = cartItems.find(item => item.product === product);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ product, price, image, quantity });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}

const openCart = () => {
    let div = document.getElementById('cartItems');
    div.style.display = 'block';
    displayCartItems();
}

const displayCartItems = () => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let div = document.getElementById('cartItems');
    div.innerText = "";
    closeButton();

    let totalQuantity = 0;
    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        let itemElement = document.createElement('p');

        let itemImage = document.createElement('img');
        itemImage.src = item.image;

        let itemText = document.createElement('span');
        itemText.textContent = `${item.product} - `;

        let priceElement = document.createElement('span');
        priceElement.textContent = `Preço: R$${item.price} `;

        let quantityContainer = document.createElement('span');
        quantityContainer.className = 'quantity-buttons';

        let decreaseButton = document.createElement('button');
        decreaseButton.innerText = '-';
        decreaseButton.className = 'decreaseButton';
        decreaseButton.onclick = () => updateQuantity(index, -1);

        let itemQuantity = document.createElement('span');
        itemQuantity.textContent = `${item.quantity}`;
        itemQuantity.className = 'itemQuantity'

        let increaseButton = document.createElement('button');
        increaseButton.innerText = '+';
        increaseButton.className = 'increaseButton';
        increaseButton.onclick = () => updateQuantity(index, 1);

        quantityContainer.appendChild(decreaseButton);
        quantityContainer.appendChild(itemQuantity);
        quantityContainer.appendChild(increaseButton);

        itemElement.appendChild(itemImage);
        itemElement.appendChild(itemText);
        itemElement.appendChild(priceElement);
        itemElement.appendChild(quantityContainer);
        div.appendChild(itemElement);

        totalQuantity += item.quantity;
        totalPrice += item.quantity * item.price;
    });

    displayCartTotal(totalQuantity, totalPrice);
}

const updateQuantity = (index, change) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems[index].quantity += change;

    if (cartItems[index].quantity <= 0) {
        cartItems.splice(index, 1);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}

const closeButton = () => {
    let div = document.getElementById('cartItems');
    let buttonClose = document.createElement('button');
    buttonClose.innerText = 'X';
    buttonClose.className = 'closeButton';
    buttonClose.onclick = () => closeCart();

    div.appendChild(buttonClose);
}

const closeCart = () => {
    let div = document.getElementById('cartItems');
    div.style.display = 'none';
}

const displayCartTotal = (totalQuantity, totalPrice) => {
    let div = document.getElementById('cartItems');
    let totalDiv = document.createElement('div');
    totalDiv.id = 'cartTotal';
    totalDiv.innerText = `Total de itens: ${totalQuantity} - Preço total: R$${totalPrice.toFixed(2)}`;
    div.appendChild(totalDiv);
}

displayOpenCartButton();

