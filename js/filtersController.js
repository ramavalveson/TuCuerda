/************************************************************/
/******************** Array of Filters *********************/
/************************************************************/

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
