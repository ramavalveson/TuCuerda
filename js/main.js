/************************************************************/
/******************** Array of Products *********************/
/************************************************************/

const products = [
    // Electric Guitars
    {id:  1, model: 'Rhoads RRT-5',                                     brand: 'Jackson',  category: 'electrica', bodyMaterial: 'Caoba',  price: 2399, stock: 3, quantity: 0, image: 'multimedia/imagenes/rhoads-rrt-5.png'},
    {id:  2, model: 'Dinky Arch Top JS32Q DKA HT',                      brand: 'Jackson',  category: 'electrica', bodyMaterial: 'Caoba',  price: 2599, stock: 8, quantity: 0, image: 'multimedia/imagenes/dinky-arch-top-js32q-dka-ht.png'},
    {id:  3, model: 'American Ultra Stratocaster',                      brand: 'Fender',   category: 'electrica', bodyMaterial: 'Aliso',  price: 2099, stock: 4, quantity: 0, image: 'multimedia/imagenes/stratocaster-ultra.jpg'},
    {id:  4, model: 'American Professional II Telecaster',              brand: 'Fender',   category: 'electrica', bodyMaterial: 'Aliso',  price: 1699, stock: 1, quantity: 0, image: 'multimedia/imagenes/american-professional-ll-telecaster.jpg'},
    {id:  5, model: 'American Professional II Jazzmaster',              brand: 'Fender',   category: 'electrica', bodyMaterial: 'Aliso',  price: 1799, stock: 4, quantity: 0, image: 'multimedia/imagenes/american-professional-ll-jazzmaster.jpg'},
    {id:  6, model: 'American Performer Telecaster',                    brand: 'Fender',   category: 'electrica', bodyMaterial: 'Aliso',  price: 1399, stock: 2, quantity: 0, image: 'multimedia/imagenes/american-performer-telecaster.jpg'},
    {id:  7, model: 'Player Plus Meteora HH',                           brand: 'Fender',   category: 'electrica', bodyMaterial: 'Aliso',  price: 1149, stock: 8, quantity: 0, image: 'multimedia/imagenes/player-plus-meteora-hh.jpg'},
    {id:  8, model: 'American Ultra Luxe Telecaster Floyd Rose HH',     brand: 'Fender',   category: 'electrica', bodyMaterial: 'Aliso',  price: 2599, stock: 1, quantity: 0, image: 'multimedia/imagenes/american-ultra-luxe-telecaster-floyd-rose-hh.jpg'},
    {id:  9, model: 'Ben Gibbard Mustang',                              brand: 'Fender',   category: 'electrica', bodyMaterial: 'Arce',   price: 1199, stock: 2, quantity: 0, image: 'multimedia/imagenes/ben-gibbard-mustang.jpg'},
    {id: 10, model: 'XPTB620',                                          brand: 'Ibanez',   category: 'electrica', bodyMaterial: 'Okoume', price: 2799, stock: 3, quantity: 0, image: 'multimedia/imagenes/xptb620.png'},
    {id: 11, model: 'Les Paul 70s Deluxe - 70s Cherry Sunburst',        brand: 'Gibson',   category: 'electrica', bodyMaterial: 'Caoba',  price: 2699, stock: 5, quantity: 0, image: 'multimedia/imagenes/les-paul-70s-deluxe-70s-cherry-sunburst.jpg'},
    {id: 12, model: 'SG Standard 61 Maestro Vibrola - Vintage Cherry',  brand: 'Gibson',   category: 'electrica', bodyMaterial: 'Caoba',  price: 2199, stock: 4, quantity: 0, image: 'multimedia/imagenes/sg-standard-61-maestro-vibrola-vintage-cherry.jpg'},
    {id: 13, model: '70s Explorer - Ebony',                             brand: 'Gibson',   category: 'electrica', bodyMaterial: 'Caoba',  price: 2199, stock: 6, quantity: 0, image: 'multimedia/imagenes/70s-explorer-ebony.jpg'},
    {id: 14, model: 'Firebird Custom Ebony Fingerboard Gloss - Ebony',  brand: 'Gibson',   category: 'electrica', bodyMaterial: 'Caoba',  price: 5299, stock: 1, quantity: 0, image: 'multimedia/imagenes/firebird-custom-w-ebony-fingerboard-gloss -ebony.jpg'},
    {id: 15, model: 'JEM7VP',                                           brand: 'Ibanez',   category: 'electrica', bodyMaterial: 'Aliso',  price: 5699, stock: 1, quantity: 0, image: 'multimedia/imagenes/jem7vp.png'},
    {id: 16, model: 'GRGM21M',                                          brand: 'Ibanez',   category: 'electrica', bodyMaterial: 'Maple',  price: 1799, stock: 6, quantity: 0, image: 'multimedia/imagenes/grgm21m.png'},
    // Acoustic Guitars
    {id: 17, model: 'GD11M-NS',                                         brand: 'Takamine', category: 'acustica',  bodyMaterial: 'Caoba',  price: 599,  stock: 8, quantity: 0, image: 'multimedia/imagenes/takamine-1.png'},
    {id: 18, model: 'GD10CE-NS',                                        brand: 'Takamine', category: 'acustica',  bodyMaterial: 'Caoba',  price: 549,  stock: 7, quantity: 0, image: 'multimedia/imagenes/takamine-2.png'},
    {id: 19, model: 'GF15CE-BLK',                                       brand: 'Takamine', category: 'acustica',  bodyMaterial: 'Caoba',  price: 649,  stock: 6, quantity: 0, image: 'multimedia/imagenes/takamine-3.png'},
    {id: 20, model: 'G530SBF',                                          brand: 'Takamine', category: 'acustica',  bodyMaterial: 'Caoba',  price: 749,  stock: 3, quantity: 0, image: 'multimedia/imagenes/takamine-4.png'},
    {id: 21, model: 'CD-60SCE DREADNOUGHT',                             brand: 'Fender',   category: 'acustica',  bodyMaterial: 'Caoba',  price: 349,  stock: 9, quantity: 0, image: 'multimedia/imagenes/fender-acoustic-1.jpg'},
    {id: 22, model: 'REDONDO PLAYER',                                   brand: 'Fender',   category: 'acustica',  bodyMaterial: 'Caoba',  price: 449,  stock: 4, quantity: 0, image: 'multimedia/imagenes/fender-acoustic-2.jpg'},
    {id: 23, model: 'NEWPORTER SPECIAL MAHOGANY',                       brand: 'Fender',   category: 'acustica',  bodyMaterial: 'Caoba',  price: 749,  stock: 2, quantity: 0, image: 'multimedia/imagenes/fender-acoustic-3.jpg'},
    {id: 24, model: 'AEWC400',                                          brand: 'Ibanez',   category: 'acustica',  bodyMaterial: 'Maple',  price: 599,  stock: 5, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-1.png'},
    {id: 25, model: 'TCM50',                                            brand: 'Ibanez',   category: 'acustica',  bodyMaterial: 'Sapele', price: 849,  stock: 1, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-2.png'},
    {id: 26, model: 'AAD50CE',                                          brand: 'Ibanez',   category: 'acustica',  bodyMaterial: 'Sapele', price: 1199, stock: 4, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-3.png'},
    {id: 27, model: 'PA230E',                                           brand: 'Ibanez',   category: 'acustica',  bodyMaterial: 'Okoume', price: 649,  stock: 7, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-4.png'},
    {id: 28, model: 'AEG5012',                                          brand: 'Ibanez',   category: 'acustica',  bodyMaterial: 'Okoume', price: 799,  stock: 3, quantity: 0, image: 'multimedia/imagenes/ibanez-acoustic-5.png'},
    {id: 29, model: 'CD-140SCE',                                        brand: 'Fender',   category: 'acustica',  bodyMaterial: 'Caoba',  price: 449,  stock: 8, quantity: 0, image: 'multimedia/imagenes/fender-acoustic-4.jpg'},
    // Classical Guitar
    {id: 30, model: 'CN-60S',                                           brand: 'Fender',   category: 'criolla',   bodyMaterial: 'Caoba',  price: 229,  stock: 9, quantity: 0, image: 'multimedia/imagenes/fender-classical-1.jpg'},
    {id: 31, model: 'FA-15N 3/4 NYLON',                                 brand: 'Fender',   category: 'criolla',   bodyMaterial: 'Caoba',  price: 179,  stock: 8, quantity: 0, image: 'multimedia/imagenes/fender-classical-2.jpg'},
    {id: 32, model: 'GA35TCE',                                          brand: 'Ibanez',   category: 'criolla',   bodyMaterial: 'Sapele', price: 379,  stock: 7, quantity: 0, image: 'multimedia/imagenes/ibanez-classical-1.png'},
    {id: 33, model: 'GA6CE',                                            brand: 'Ibanez',   category: 'criolla',   bodyMaterial: 'Sapele', price: 289,  stock: 4, quantity: 0, image: 'multimedia/imagenes/ibanez-classical-2.png'},
    {id: 34, model: 'GA5TCE',                                           brand: 'Ibanez',   category: 'criolla',   bodyMaterial: 'Sapele', price: 439,  stock: 3, quantity: 0, image: 'multimedia/imagenes/ibanez-classical-3.png'}
];

// localStorage.setItem('products', JSON.stringify(products));


/***************************************************/
/******************** Functions ********************/
/***************************************************/

// Add to Cart
const addToCart = (idProduct) => {
    const quantityValue = Math.ceil(document.getElementById(`quantity-${idProduct}`).value);
    const addedProduct = products.find(product => product.id === idProduct)
    const productOnCart = cart.find(product => product.id === idProduct)
    // Valida si se debe generar la card en el carrito o solo se debe sumar 1 unidad a la cantidad solicitada 
    // teniendo en cuenta también el stock del producto
    if(quantityValue <= 0) {
        quantityError();
    } else if( (addedProduct.stock >= quantityValue) && (productOnCart === undefined) ) {
        cart.push(addedProduct);
        addedProduct.quantity = quantityValue;
        addedProduct.stock = addedProduct.stock - quantityValue;
        cartDataStorage();
        addedToCartToastify(addedProduct);
    } else if( (addedProduct.stock < quantityValue) && (productOnCart === undefined) ) {
        outOfStockButtonCard(addedProduct);
    } else if(productOnCart.id === addedProduct.id) {
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
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then((response) => response.json())
        .then((data) => {   
            let dolarPrice = parseFloat(data[1].casa.venta)
            let cardAcumulator = '';
            productsToShow.forEach((productArray) => {
                cardAcumulator += `<div class="col mb-5">
                <div class="card h-100">
                    <!-- Product image-->
                    <div class="d-flex justify-content-center mt-3">
                    <img class="card-img-top w-50" src="${productArray.image}" alt="Guitarra ${productArray.model}"/>
                    </div>
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product model-->
                            <h5 class="fw-bolder">${productArray.brand} <br>${productArray.model}</br></h5>
                            <!-- Product material-->
                            <p>Cuerpo de ${productArray.bodyMaterial}</p>
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <input value="1" min="1" id="quantity-${productArray.id}" type="number" placeholder="Cantidad">
                            <!-- Product price-->
                            <p>$ ${dolarPrice * productArray.price}</p>
                            <button onclick="addToCart(${productArray.id})" class="btn btn-secondary mt-auto">
                            ${(productArray.stock <= 0) ? 'Sin Stock' : 'Agregar al Carrito'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
            });
            showCards(cardAcumulator);
            });
}; 

// Input search results
function productToFind() {
    const inputContent = document.getElementById("product-to-find").value.toUpperCase().trim();
    const findedProducts = products.filter((product) => {
        return (( product.model + product.brand + product.bodyMaterial + product.category ).toUpperCase().match(inputContent));
    });
    if(inputContent != '') {
        document.getElementById("tittle-products-to-show").innerHTML = `Resultados que coinciden con "${inputContent}"`;
        cardGenerator(findedProducts);
    } else {
        document.getElementById("tittle-products-to-show").innerHTML = `Debes ingresar un valor de búsqueda`;
        cardGenerator([]);
    };
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
        if(value) {
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
        onClick: function(){}
    }).showToast();
};

// Filter by category - top of page
const btnElectric = document.getElementById("filter-electric")
btnElectric.onclick = () => {
    const categoryFilterElectric = products.filter((product) => product.category.includes('electrica'));
    cardGenerator(categoryFilterElectric);
    document.getElementById("tittle-products-to-show").innerHTML = 'Guitarras Eléctricas';
};

const btnAcoustic = document.getElementById("filter-acoustic")
btnAcoustic.onclick = () => {
    const categoryFilterAcoustic = products.filter((product) => product.category.includes('acustica'));
    cardGenerator(categoryFilterAcoustic);
    document.getElementById("tittle-products-to-show").innerHTML = 'Guitarras Acústicas';
};

const btnClassic = document.getElementById("filter-classic")
btnClassic.onclick = () => {
    const categoryFilterClassic = products.filter((product) => product.category.includes('criolla'));
    cardGenerator(categoryFilterClassic);
    document.getElementById("tittle-products-to-show").innerHTML = 'Guitarras Criollas';
};



    



