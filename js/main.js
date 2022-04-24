/************************************************************/
/******************** Array of Products *********************/
/************************************************************/

const products = [
    // Electric Guitars
    { id: 1, model: 'Rhoads RRT-5', brand: 'Jackson', category: 'electrica', bodyMaterial: 'Caoba', price: 2399, stock: 3, quantity: 0, image: 'multimedia/imagenes/rhoads-rrt-5.png' },
    { id: 2, model: 'Dinky Arch Top JS32Q DKA HT', brand: 'Jackson', category: 'electrica', bodyMaterial: 'Caoba', price: 2599, stock: 8, quantity: 0, image: 'multimedia/imagenes/dinky-arch-top-js32q-dka-ht.png' },
    { id: 3, model: 'American Ultra Stratocaster', brand: 'Fender', category: 'electrica', bodyMaterial: 'Aliso', price: 2099, stock: 4, quantity: 0, image: 'multimedia/imagenes/stratocaster-ultra.jpg' },
    { id: 4, model: 'American Professional II Telecaster', brand: 'Fender', category: 'electrica', bodyMaterial: 'Aliso', price: 1699, stock: 1, quantity: 0, image: 'multimedia/imagenes/american-professional-ll-telecaster.jpg' },
    { id: 5, model: 'American Professional II Jazzmaster', brand: 'Fender', category: 'electrica', bodyMaterial: 'Aliso', price: 1799, stock: 4, quantity: 0, image: 'multimedia/imagenes/american-professional-ll-jazzmaster.jpg' },
    { id: 6, model: 'American Performer Telecaster', brand: 'Fender', category: 'electrica', bodyMaterial: 'Aliso', price: 1399, stock: 2, quantity: 0, image: 'multimedia/imagenes/american-performer-telecaster.jpg' },
    { id: 7, model: 'Player Plus Meteora HH', brand: 'Fender', category: 'electrica', bodyMaterial: 'Aliso', price: 1149, stock: 8, quantity: 0, image: 'multimedia/imagenes/player-plus-meteora-hh.jpg' },
    { id: 8, model: 'American Ultra Luxe Telecaster Floyd Rose HH', brand: 'Fender', category: 'electrica', bodyMaterial: 'Aliso', price: 2599, stock: 1, quantity: 0, image: 'multimedia/imagenes/american-ultra-luxe-telecaster-floyd-rose-hh.jpg' },
    { id: 9, model: 'Ben Gibbard Mustang', brand: 'Fender', category: 'electrica', bodyMaterial: 'Arce', price: 1199, stock: 2, quantity: 0, image: 'multimedia/imagenes/ben-gibbard-mustang.jpg' },
    { id: 10, model: 'XPTB620', brand: 'Ibanez', category: 'electrica', bodyMaterial: 'Okoume', price: 2799, stock: 3, quantity: 0, image: 'multimedia/imagenes/xptb620.png' },
    { id: 11, model: 'Les Paul 70s Deluxe - 70s Cherry Sunburst', brand: 'Gibson', category: 'electrica', bodyMaterial: 'Caoba', price: 2699, stock: 5, quantity: 0, image: 'multimedia/imagenes/les-paul-70s-deluxe-70s-cherry-sunburst.jpg' },
    { id: 12, model: 'SG Standard 61 Maestro Vibrola - Vintage Cherry', brand: 'Gibson', category: 'electrica', bodyMaterial: 'Caoba', price: 2199, stock: 4, quantity: 0, image: 'multimedia/imagenes/sg-standard-61-maestro-vibrola-vintage-cherry.jpg' },
    { id: 13, model: '70s Explorer - Ebony', brand: 'Gibson', category: 'electrica', bodyMaterial: 'Caoba', price: 2199, stock: 6, quantity: 0, image: 'multimedia/imagenes/70s-explorer-ebony.jpg' },
    { id: 14, model: 'Firebird Custom Ebony Fingerboard Gloss - Ebony', brand: 'Gibson', category: 'electrica', bodyMaterial: 'Caoba', price: 5299, stock: 1, quantity: 0, image: 'multimedia/imagenes/firebird-custom-w-ebony-fingerboard-gloss -ebony.jpg' },
    { id: 15, model: 'JEM7VP', brand: 'Ibanez', category: 'electrica', bodyMaterial: 'Aliso', price: 5699, stock: 1, quantity: 0, image: 'multimedia/imagenes/jem7vp.png' },
    { id: 16, model: 'GRGM21M', brand: 'Ibanez', category: 'electrica', bodyMaterial: 'Maple', price: 1799, stock: 6, quantity: 0, image: 'multimedia/imagenes/grgm21m.png' },
    // Acoustic Guitars
    { id: 17, model: 'GD11M-NS', brand: 'Takamine', category: 'acustica', bodyMaterial: 'Caoba', price: 599, stock: 8, quantity: 0, image: 'multimedia/imagenes/takamine-1.png' },
    { id: 18, model: 'GD10CE-NS', brand: 'Takamine', category: 'acustica', bodyMaterial: 'Caoba', price: 549, stock: 7, quantity: 0, image: 'multimedia/imagenes/takamine-2.png' },
    { id: 19, model: 'GF15CE-BLK', brand: 'Takamine', category: 'acustica', bodyMaterial: 'Caoba', price: 649, stock: 6, quantity: 0, image: 'multimedia/imagenes/takamine-3.png' },
    { id: 20, model: 'G530SBF', brand: 'Takamine', category: 'acustica', bodyMaterial: 'Caoba', price: 749, stock: 3, quantity: 0, image: 'multimedia/imagenes/takamine-4.png' },
    { id: 21, model: 'CD-60SCE DREADNOUGHT', brand: 'Fender', category: 'acustica', bodyMaterial: 'Caoba', price: 349, stock: 9, quantity: 0, image: 'multimedia/imagenes/fender-acoustic-1.jpg' },
    { id: 22, model: 'REDONDO PLAYER', brand: 'Fender', category: 'acustica', bodyMaterial: 'Caoba', price: 449, stock: 4, quantity: 0, image: 'multimedia/imagenes/fender-acoustic-2.jpg' },
    { id: 23, model: 'NEWPORTER SPECIAL MAHOGANY', brand: 'Fender', category: 'acustica', bodyMaterial: 'Caoba', price: 749, stock: 2, quantity: 0, image: 'multimedia/imagenes/fender-acoustic-3.jpg' },
    { id: 24, model: 'AEWC400', brand: 'Ibanez', category: 'acustica', bodyMaterial: 'Maple', price: 599, stock: 5, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-1.png' },
    { id: 25, model: 'TCM50', brand: 'Ibanez', category: 'acustica', bodyMaterial: 'Sapele', price: 849, stock: 1, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-2.png' },
    { id: 26, model: 'AAD50CE', brand: 'Ibanez', category: 'acustica', bodyMaterial: 'Sapele', price: 1199, stock: 4, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-3.png' },
    { id: 27, model: 'PA230E', brand: 'Ibanez', category: 'acustica', bodyMaterial: 'Okoume', price: 649, stock: 7, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-4.png' },
    { id: 28, model: 'AEG5012', brand: 'Ibanez', category: 'acustica', bodyMaterial: 'Okoume', price: 799, stock: 3, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-5.png' },
    { id: 29, model: 'CD-140SCE', brand: 'Fender', category: 'acustica', bodyMaterial: 'Caoba', price: 449, stock: 8, quantity: 0, image: 'multimedia/imagenes/fender-acoustic-4.jpg' },
    // Classical Guitar
    { id: 30, model: 'CN-60S', brand: 'Fender', category: 'criolla', bodyMaterial: 'Caoba', price: 229, stock: 9, quantity: 0, image: 'multimedia/imagenes/fender-classical-1.jpg' },
    { id: 31, model: 'FA-15N 3/4 NYLON', brand: 'Fender', category: 'criolla', bodyMaterial: 'Caoba', price: 179, stock: 8, quantity: 0, image: 'multimedia/imagenes/fender-classical-2.jpg' },
    { id: 32, model: 'GA35TCE', brand: 'Ibanez', category: 'criolla', bodyMaterial: 'Sapele', price: 379, stock: 7, quantity: 0, image: 'multimedia/imagenes/ibanez-classical-1.png' },
    { id: 33, model: 'GA6CE', brand: 'Ibanez', category: 'criolla', bodyMaterial: 'Sapele', price: 289, stock: 4, quantity: 0, image: 'multimedia/imagenes/ibanez-classical-2.png' },
    { id: 34, model: 'GA5TCE', brand: 'Ibanez', category: 'criolla', bodyMaterial: 'Sapele', price: 439, stock: 3, quantity: 0, image: 'multimedia/imagenes/ibanez-classical-3.png' }
];

// Arrays for filters
const fender = products.filter((product) => product.brand.includes('Fender'));
const gibson = products.filter((product) => product.brand.includes('Gibson'));
const ibanez = products.filter((product) => product.brand.includes('Ibanez'));
const jackson = products.filter((product) => product.brand.includes('Jackson'));
const takamine = products.filter((product) => product.brand.includes('Takamine'));
const aliso = products.filter((product) => product.bodyMaterial.includes('Aliso'));
const arce = products.filter((product) => product.bodyMaterial.includes('Arce'));
const caoba = products.filter((product) => product.bodyMaterial.includes('Caoba'));
const maple = products.filter((product) => product.bodyMaterial.includes('Maple'));
const okoume = products.filter((product) => product.bodyMaterial.includes('Okoume'));
const sapele = products.filter((product) => product.bodyMaterial.includes('Sapele'));
const acoustics = products.filter((product) => product.category.includes('acustica'));
const classics = products.filter((product) => product.category.includes('criolla'));
const electrics = products.filter((product) => product.category.includes('electrica'));

/***************************************************/
/******************** Functions ********************/
/***************************************************/

// Add to Cart
const addToCart = (idProduct) => {
    const quantityValue = Math.ceil(document.getElementById(`quantity-${idProduct}`).value);
    const addedProduct = products.find(product => product.id === idProduct)
    const productOnCart = cart.find(product => product.id === idProduct)
    if (quantityValue == "") { //Si está vacío el input de cantidad avisa que se debe ingresar una cantidad
        chooseQuantity();
    } else if (quantityValue <= 0) { //Si el valor ingresado en el input de cantidad es menor o igual a 0 indica que se ingrese un valor correcto
        quantityError();
    } else if ((addedProduct.stock >= quantityValue) && (productOnCart === undefined)) { //Si el stock es mayor a la cantidad solicitada y todavía no se agregó ese producto al carrito, entonces suma esa cantidad y genera la card en el carrito, además actualiza valores del producto
        cart.push(addedProduct);
        addedProduct.quantity = quantityValue;
        addedProduct.stock = addedProduct.stock - quantityValue;
        cartDataStorage();
        addedToCartToastify(addedProduct);
    } else if ((addedProduct.stock < quantityValue) && (productOnCart === undefined)) { //Si el stock es menor que la cantidad requerida avisa que no hay stock y muestra cuanto stock hay
        outOfStockButtonCard(addedProduct);
    } else if (productOnCart.id === addedProduct.id) { //Si se quiere agregar un producto que ya está en el carrito avisa que ese producto ya se encuentra en el carrito
        productAllreadyAdded(addedProduct);
    };
};

// función flecha que escribe las cards en el sitio indicado del html
const showCards = (cards) => document.getElementById("products-container").innerHTML = cards;

// llamado a la función para generar las cards
cardGenerator(products);

// Cards generator
function cardGenerator(productsToShow) {
    // fetch para pasar el valor de los productos a pesos en las cards generadas en la seccion de productos 
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then((response) => response.json())
        .then((data) => {
            let dolarPrice = data.blue.value_sell;
            let cardAcumulator = '';
            productsToShow.forEach((productArray) => {
                cardAcumulator += `<div class="col-products col mb-5">
                <div class="card h-100 rounded">
                    <!-- Product image -->
                    <div class="d-flex justify-content-center mt-3">
                    <img class="card-img-top w-50" src="${productArray.image}" alt="Guitarra ${productArray.model}"/>
                    </div>
                    <!-- Product details-->
                    <div class="card-body">
                        <div class="text-center">
                            <!-- Product model -->
                            <h5 class="fw-bolder">${productArray.brand} <br>${productArray.model}</br></h5>
                            <!-- Product material -->
                            <p>Cuerpo de ${productArray.bodyMaterial}</p>
                        </div>
                    </div>
                    <!-- Product actions -->
                    <div class="card-footer mb-3 border-top-0 bg-transparent">
                        <div class="text-center">
                        <!-- Product price -->
                            <p>$ ${Math.round(dolarPrice * productArray.price)}</p>
                            <button onclick="addToCart(${productArray.id})" class="btn btn-dark" style="background-color: rgba(39, 30, 30, 0.808);">
                                ${(productArray.stock <= 0) ? 'Sin Stock' : 'Agregar al Carrito'}
                            </button>
                            <input min="1" type="number" id="quantity-${productArray.id}"  placeholder="Cantidad" style="width: 5.2rem;" class="mt-2">
                        </div>
                    </div>
                </div>
            </div>`
            });
            showCards(cardAcumulator);
        });
};

// SweetAlert choose quantity
function chooseQuantity() {
    swal({
        icon: 'warning',
        text: 'Por favor indique la cantidad que desea agregar al carrito!'
    });
};

// SweetAlert quantity error
function quantityError() {
    swal({
        icon: 'error',
        text: 'Por favor coloque un valor válido!'
    });
};

// SweetAlert product allready added
function productAllreadyAdded(addedProduct) {
    swal({
        icon: 'error',
        title: 'Oops!',
        text: `El producto ${addedProduct.brand} ${addedProduct.model} ya está en el carrito!`
    });
};

// SweetAlert out of stock on button card
function outOfStockButtonCard(addedProduct) {
    swal({
        icon: 'warning',
        title: 'Sin Stock',
        text: `Lo sentimos, no contamos con la cantidad requerida de ${addedProduct.brand} ${addedProduct.model}!`,
        button: 'Ver Stock'
    })
        .then((value) => {
            if (value) {
                swal(`El stock disponible es de ${addedProduct.stock} unidades`)
            }
        })
};

// Toastify added to cart
function addedToCartToastify(product) {
    Toastify({
        text: `Agregaste ${product.quantity} ${product.brand} ${product.model} al Carrito`,
        duration: 2500,
        gravity: "bottom",
        position: "right",
        offset: {
            x: '5rem'
        },
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { }
    }).showToast();
};

// Functions Filter
let productsToOrder = 0 || products;

function filterButtons(productsFiltered) { 
    productsToOrder = productsFiltered;
    cardGenerator(productsFiltered);
    document.getElementById("style-order").innerHTML = '';
};

function filterBrand(productsFiltered) {
    filterButtons(productsFiltered);
    document.getElementById("tittle-products-to-show").innerHTML = `Guitarras marca ${productsFiltered[0].brand}`; 
}; 

function filterBodyMaterial(productsFiltered) {
    filterButtons(productsFiltered);
    document.getElementById("tittle-products-to-show").innerHTML = `Guitarras con cuerpo de  ${productsFiltered[0].bodyMaterial}`;
};

function filterCategory(productsFiltered) {
    filterButtons(productsFiltered);
    document.getElementById("tittle-products-to-show").innerHTML = `Guitarras ${productsFiltered[0].category}s`;
};

function cleanFilters() {
    filterButtons(products);
    document.getElementById("tittle-products-to-show").innerHTML = 'Todas nuestras guitarras'; 
};

// Input search results
function productToFind() {
    const inputContent = document.getElementById("product-to-find").value.toUpperCase().trim();
    const findedProducts = products.filter((product) => {
        return ((product.model + product.brand + product.bodyMaterial + product.category).toUpperCase().match(inputContent));
    });
    if (inputContent != '') {
        document.getElementById("tittle-products-to-show").innerHTML = `Resultados que coinciden con "${inputContent}"`;
        filterButtons(findedProducts);
    } else {
        document.getElementById("tittle-products-to-show").innerHTML = `Debes ingresar un valor de búsqueda`;
        cardGenerator([]);
    };
};

// Functions order products by price
function orderProducts() {
    const order = productsToOrder.sort(function (a,b) {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1;
        }
        return 0;
    });
    return order;
}

function orderByLowerPrice() { 
    const lowerPrice = orderProducts()
    cardGenerator(lowerPrice);
    document.getElementById("style-order").innerHTML = 'Ordenadas por menor precio';
};

function orderByHigherPrice() {
    const lowerPrice = orderProducts()
    cardGenerator(lowerPrice.reverse());
    document.getElementById("style-order").innerHTML = 'Ordenadas por mayor precio'; 
};
