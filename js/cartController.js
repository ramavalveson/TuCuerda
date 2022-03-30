/************************************************************/
/******* Cart Validation for Storage and Refresh Page *******/
/************************************************************/

const cart = storageCartValidation();

function storageCartValidation() {
    if (localStorage.getItem('cart') != null) {
        const storageCart = JSON.parse(localStorage.getItem('cart'));
        return storageCart;
    } else {
        return [];
    };
};
cartItemsQuantity();
cartPrice();
cardGeneratorOfCart(cart);

// Total Price of Cart
function cartPrice() {
    const totalCartPrice = cart.reduce((acc, addedProduct) => ( acc + (addedProduct.quantity * addedProduct.price) ), 0);
    document.getElementById("total-price").innerHTML = totalCartPrice;
};

// Total Items of Cart
function cartItemsQuantity() {
    const cartQuantity = cart.reduce((acc, addedProduct) => (acc + addedProduct.quantity), 0);
    document.getElementById("cart-quantity").innerHTML = cartQuantity;
};

// Card generator of Cart
function cardGeneratorOfCart(productsOfCart) {
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
                    u$d ${productArray.price}
                </div>
            </div>
        </div>
    </div>
    <div class="col md-1 mb-5">
        <div class="d-flex justify-content-center align-items-center">
            <button onclick="removeOneProduct(${productArray.id})" class="btn me-3">
                <img src="multimedia/iconos/arrow-down.png" alt="flecha hacia abajo">
            </button>
                <p class="me-3 ms-3">${productArray.quantity}</p>
            <button onclick="addOneProduct(${productArray.id})" class="btn ms-3">
                <img src="multimedia/iconos/arrow-up.png" alt="flecha hacia arriba">
            </button>
        </div>
    </div>`
    });
    showCardsOfCart(cardOfCartAcumulator);
};

function showCardsOfCart(cards) {
    document.getElementById("modal-card").innerHTML = cards;
};

// Remove one product from Cart
function removeOneProduct(idProduct) {
    const productToRemove = cart.find(product => product.id === idProduct);
    let indexOfProduct = cart.indexOf(productToRemove);
    // Valida si solamente se debe disminuir una unidad en la solicitud del producto o si queda 1 unica unidad elimina la card
    if(productToRemove.quantity === 1) {
        cart.splice((indexOfProduct), 1);
        productToRemove.stock++;
        productToRemove.quantity--;
    } else {
        productToRemove.stock++;
        productToRemove.quantity--;
    }
    cartPrice();
    cartItemsQuantity();
    cardGeneratorOfCart(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Add one product to Cart
function addOneProduct(idProduct) {
    const productAdded = cart.find(product => product.id === idProduct);
    if(productAdded.stock != 0) {
        productAdded.stock--;
        productAdded.quantity++;
        cartPrice();
        cartItemsQuantity();
        cardGeneratorOfCart(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        outOfStock(productAdded);
    }
};



