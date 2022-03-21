/*******************************************************************/
/******************** Products creator function ********************/
/*******************************************************************/

function Product(id, model, brand, category, mainMaterial, price, stock, quantity) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.category = category;
    this.mainMaterial = mainMaterial;
    this.price = price;
    this.stock = stock;
    this.quantity = quantity;
};



/************************************************************/
/******************** Products (Objects) ********************/
/************************************************************/

// Electric Guitars
const productE1  = new Product (1, 'SG', 'Gibson', 'electrica', 'Mahogany', 1599, 8, 0);
const productE2  = new Product (2, 'Les Paul', 'Gibson', 'electrica', 'Mahogany', 2699, 10, 0);
const productE3  = new Product (3, 'Stratocaster', 'Fender', 'electrica', 'Maple', 1799, 0, 0);
const productE4  = new Product (4, 'Telecaster', 'Fender', 'electrica', 'Maple', 1499, 5, 0);
const productE5  = new Product (5, 'Explorer', 'Gibson', 'electrica', 'Mahogany', 1899, 9, 0);
const productE6  = new Product (6, 'jem7vp', 'Ibanez', 'electrica', 'Maple', 2599, 1, 0);
const productE7  = new Product (7, 'SG', 'Gibson', 'electrica', 'Mahogany', 1599, 8, 0);
const productE8  = new Product (8, 'Les Paul', 'Gibson', 'electrica', 'Mahogany', 2699, 10, 0);
const productE9  = new Product (9, 'Stratocaster', 'Fender', 'electrica', 'Maple', 1799, 0, 0);
const productE10 = new Product (10, 'Telecaster', 'Fender', 'electrica', 'Maple', 1499, 5, 0);
const productE11 = new Product (11, 'Explorer', 'Gibson', 'electrica', 'Mahogany', 1899, 9, 0);
const productE12 = new Product (12, 'jem7vp', 'Ibanez', 'electrica', 'Maple', 2599, 1, 0);
const productE13 = new Product (13, 'SG', 'Gibson', 'electrica', 'Mahogany', 1599, 8, 0);
const productE14 = new Product (14, 'Les Paul', 'Gibson', 'electrica', 'Mahogany', 2699, 10, 0);
const productE15 = new Product (15, 'Stratocaster', 'Fender', 'electrica', 'Maple', 1799, 0, 0);
const productE16 = new Product (16, 'Telecaster', 'Fender', 'electrica', 'Maple', 1499, 5, 0);
// Acoustic Guitars
const productA1  = new Product (17, 'Hummingbird Standard', 'Gibson', 'acustica', 'Mahogany', 3999, 5, 0);
const productA2  = new Product (18, 'SJ-200 Standard', 'Gibson', 'acustica', 'AAA Flame Maple', 4999, 9, 0);
const productA3  = new Product (19, 'Jerry Cantrell "Fire Devil" Songwriter', 'Gibson', 'acustica', 'Rosewood', 3999, 1, 0);
const productA4  = new Product (20, 'Songwriter Standard EC Rosewood', 'Gibson', 'acustica', 'Rosewood', 3249, 8, 0);
const productA5  = new Product (21, '1960 Hummingbird Fixed Bridge ', 'Gibson', 'acustica', 'Mahogany', 5199, 10, 0);
const productA6  = new Product (22, 'Doves in Flight', 'Gibson', 'acustica', 'Flame maple', 7999, 0, 0);
const productA7  = new Product (23, 'J-45 Standard', 'Gibson', 'acustica', 'Mahogany', 2849, 5, 0);
const productA8  = new Product (24, 'L-00 Original', 'Gibson', 'acustica', 'Mahogany', 2799, 5, 0);
const productA9  = new Product (25, 'Explorer', 'Gibson', 'acustica', 'Mahogany', 1899, 9, 0);
const productA10 = new Product (26, 'jem7vp', 'Ibanez', 'acustica', 'Maple', 2599, 1, 0);
const productA11 = new Product (27, 'SG', 'Gibson', 'acustica', 'Mahogany', 1599, 8, 0);
const productA12 = new Product (28, 'Les Paul', 'Gibson', 'acustica', 'Mahogany', 2699, 10, 0);
const productA13 = new Product (29, 'Stratocaster', 'Fender', 'acustica', 'Maple', 1799, 0, 0);
// Classical Guitar
const productC1 = new Product (30, 'Telecaster', 'Fender', 'criolla', 'Maple', 1499, 5, 0);
const productC2 = new Product (31, 'Telecaster', 'Fender', 'criolla', 'Maple', 1499, 5, 0);
const productC3 = new Product (32, 'Explorer', 'Gibson', 'criolla', 'Mahogany', 1899, 9, 0);
const productC4 = new Product (33, 'jem7vp', 'Ibanez', 'criolla', 'Maple', 2599, 1, 0);
const productC5 = new Product (34, 'SG', 'Gibson', 'criolla', 'Mahogany', 1599, 8, 0);
const productC6 = new Product (35, 'Les Paul', 'Gibson', 'criolla', 'Mahogany', 2699, 10, 0);
const productC7 = new Product (36, 'Stratocaster', 'Fender', 'criolla', 'Maple', 1799, 0, 0);
const productC8 = new Product (37, 'Telecaster', 'Fender', 'criolla', 'Maple', 1499, 5, 0);


/************************************************/
/******************** Arrays ********************/
/************************************************/

const cart = [];
const products = [productE1, productE2, productE3, productE4, productE5, productE6, productE7, productE8, productE9, productE10, productE11, productE12, productE13, productE14, productE15, productE16, productA1, productA2, productA3, productA4, productA5, productA6, productA7, productA8, productA9, productA9, productA10, productA11, productA12, productA13, productC1, productC2, productC3, productC4, productC5, productC6, productC7, productC8];



/***************************************************/
/******************** Functions ********************/
/***************************************************/

const addToCart = (idProduct) => {
    const addedProduct = products.find(product => product.id === idProduct)
    if(addedProduct.stock > 0) {
        cart.push(addedProduct);
        addedProduct.stock--;
        const totalCartPrice = cart.reduce( (acc, addedProduct) => (acc + addedProduct.price ), 0)
        document.getElementById("total-price").innerHTML = totalCartPrice;
        document.getElementById("cart-quantity").innerHTML = cart.length;
        cardGeneratorOfCart(cart);
    } else {
        alert(`Ups! no disponemos de la cantidad solicitada de ${addedProduct.brand} ${addedProduct.model} para agregar a tu carrito.`);
    }
};

cardGenerator(products);

function cardGenerator(productsToShow) {
    let cardAcumulator = '';
    productsToShow.forEach((productArray) => {
        cardAcumulator += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product model-->
                    <h5 class="fw-bolder">${productArray.brand} ${productArray.model}</h5>
                    <!-- Product material-->
                    <p> Material predominante: ${productArray.mainMaterial} </p>
                    <!-- Product price-->
                    u$d ${productArray.price}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <button onclick="addToCart(${productArray.id})" class="btn btn-outline-dark mt-auto">${(productArray.stock <= 0) ? 'Sin Stock' : 'Agregar al Carrito'}</button>
                </div>
            </div>
        </div>
    </div>`
    });
    showCards(cardAcumulator);
}; 

function showCards(cards) {
    document.getElementById("products-container").innerHTML = cards;
};

function cardGeneratorOfCart(productsOfCart) {
    let cardOfCartAcumulator = '';
    productsOfCart.forEach((productArray) => {
        cardOfCartAcumulator += `<div class="col md-1">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product model-->
                    <h5 class="fw-bolder">${productArray.brand} ${productArray.model}</h5>
                    <!-- Product material-->
                    <p> Material predominante: ${productArray.mainMaterial} </p>
                    <!-- Product price-->
                    u$d ${productArray.price}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <button onclick="removeProductFromCart(${productArray.id})" class="btn btn-outline-dark mt-auto">Quitar del Carrito</button>
                </div>
            </div>
        </div>
    </div>`
    });
    showCardsOfCart(cardOfCartAcumulator);
};

function showCardsOfCart(cards) {
    document.getElementById("modal-contain").innerHTML = cards;
};

function removeProductFromCart(idProduct) {
    const productToRemove = cart.find(product => product.id === idProduct)
    let indexOfProduct = cart.indexOf(productToRemove);
    cart.splice((indexOfProduct), 1);
    productToRemove.stock++;
    const totalCartPrice = cart.reduce( (acc, addedProduct) => (acc + addedProduct.price ), 0)
    document.getElementById("total-price").innerHTML = totalCartPrice;
    document.getElementById("cart-quantity").innerHTML = cart.length;
    cardGeneratorOfCart(cart);
};


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

function productToFind() {
    const productModel = document.getElementById("product-to-find").value.toUpperCase().trim();
    const findedProducts = products.filter((product) => {
        return product.model.toUpperCase().match(productModel);
    });
    cardGenerator(findedProducts);
};
