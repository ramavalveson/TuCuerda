/************************************************************/
/******* Cart Validation for Storage and Refresh Page *******/
/************************************************************/

// Se cambió la función por un operador OR
const cart = JSON.parse(localStorage.getItem('cart')) || [];

cartData();

// función flecha que escribe las cards del carrito en el sitio indicado del html
const showCardsOfCart = (cards) => document.getElementById("modal-card").innerHTML = cards;

// Card generator of Cart
function cardGeneratorOfCart(productsOfCart) {
    // fetch para pasar el valor de los productos en las cards del carrito a pesos
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then((response) => response.json())
        .then((data) => {   
            let dolarPrice = data.blue.value_sell;
            let cardOfCartAcumulator = '';
            productsOfCart.forEach((productArray) => {
                cardOfCartAcumulator += `<div class="col md-1 mb-5">
                <div class="card h-100">
                    <!-- Product image-->
                    <div class="d-flex justify-content-center">
                    <img class="card-img-top w-25" src="${productArray.image}" alt="Guitarra ${productArray.model}" />
                    </div>
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product model-->
                            <h5 class="fw-bolder">${productArray.brand} ${productArray.model}</h5>
                            <!-- Product material-->
                            <p> Material predominante: ${productArray.bodyMaterial} </p>
                            <!-- Product price-->
                            <p>$ ${Math.round(dolarPrice * productArray.price)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col md-1 mb-5">
                <div class="d-flex justify-content-center align-items-center">
                    <button onclick="removeOneProduct(${productArray.id})" class="btn me-3">
                        <img src="multimedia/iconos/minus.png" alt="eliminar una unidad del producto">
                    </button>
                        <p class="me-3 ms-3">${productArray.quantity}</p>
                    <button onclick="addOneProduct(${productArray.id})" class="btn ms-3">
                        <img src="multimedia/iconos/plus.png" alt="agregar una unidad del producto">
                    </button>
                </div>
            </div>
            <div class="col md-1 mb-5">
                <button onclick="removeProductFromCart(${productArray.id})" class="btn">
                    <img src="multimedia/iconos/trash.png" alt="eliminar del carrito">
            </div>`
            });
            showCardsOfCart(cardOfCartAcumulator); 
        });
};

// Total Price of Cart
function cartPrice() {
    // fetch para pasar el total del carrito a pesos argentinos
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then((response) => response.json())
        .then((data) => {   
            let dolarPrice = data.blue.value_sell;
            const totalCartPrice = cart.reduce((acc, productToAdd) => ( acc + (productToAdd.quantity * productToAdd.price) ), 0);
            document.getElementById("total-price").innerHTML = `$ ${Math.round(dolarPrice * totalCartPrice)}`;
        });
};

// Total Items of Cart
function cartItemsQuantity() {
    const cartQuantity = cart.reduce((acc, productToAdd) => (acc + productToAdd.quantity), 0);
    document.getElementById("cart-quantity").innerHTML = cartQuantity;
};

// Se realizaron funciones para reducir lineas de codigo en otras funciones que comparten funcionalidades y para que sea escalable
function cartData() {
    cartPrice();
    cartItemsQuantity();
    cardGeneratorOfCart(cart);
}

function cartDataStorage() {
    cartData();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function cartDataStorageProductAdded(product) {
    product.stock--;
    product.quantity++;
    cartDataStorage();
};

// Remove all unities of products from cart
function removeProductFromCart(idProduct) {
    const productToRemove = cart.find(product => product.id === idProduct);
    let indexOfProduct = cart.indexOf(productToRemove);
    cart.splice((indexOfProduct), 1)
    productToRemove.stock = productToRemove.stock + productToRemove.quantity
    productToRemove.quantity = 0;
    removeProductFromCartToastify(productToRemove)
    cartDataStorage();
};

// Remove one product from Cart
function removeOneProduct(idProduct) {
    const productToRemove = cart.find(product => product.id === idProduct);
    // Se aplicó operador logico AND
    productToRemove.quantity > 1 && ( (productToRemove.stock++) + ( productToRemove.quantity--) );
    cartDataStorage();
};

// Add one product to Cart
function addOneProduct(idProduct) {
    const productToAdd = cart.find(product => product.id === idProduct);
    // Se aplico if ternario
    productToAdd.stock != 0 ? cartDataStorageProductAdded(productToAdd) : outOfStockButtonCart(productToAdd)
};

// SweetAlert out of stock on button of cart
function outOfStockButtonCart(addedProduct) {
    swal({
        icon: 'warning',
        title: 'Sin Stock',
        text: `Lo sentimos, no contamos con más ${addedProduct.brand} ${addedProduct.model}!`
    })
};

// Toastify remove product from cart
function removeProductFromCartToastify(product) {
    Toastify({
        text: `Eliminaste ${product.brand} ${product.model} del Carrito`,
        duration: 2500,
        gravity: "bottom", 
        position: "left", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #FF0000, #FF8800)",
        },
        onClick: function(){}
    }).showToast();
};

//SweetAlert shopping confirm
const shoppingConfirm = () => cart != '' ? shoppingConfirmSucces() : shoppingConfirmError()

function shoppingConfirmSucces() {
    swal({
        icon: 'success',
        title: 'Felicitaciones! Confirmaste tu compra!',
        text: `Te redireccionaremos a la plataforma de pago! Muchas gracias por confiar en TuCuerda!`,
        buttons: 'Continuar con el Pago'
    });
};

function shoppingConfirmError() {
    swal({
        icon: 'error',
        title: 'Oops!',
        text: `El carrito está vacío!`
    });
};