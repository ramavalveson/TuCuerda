let showProductDetail = JSON.parse(localStorage.getItem('productToShowDetail'));

// función flecha que escribe las cards de productos en el sitio indicado del html
function showCard(card) {
    document.getElementById("product-detail").innerHTML = card;
} 

// Cards generator
function cardGeneratorOfProductDetail(showProduct) {
    // fetch para pasar el valor de los productos a pesos en las cards generadas en la seccion de productos 
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then((response) => response.json())
        .then((data) => {
            let dolarPrice = data.blue.value_sell;
            const productDetailCard = `<div class="row gx-4 gx-lg-5 align-items-center" style="color: rgba(39, 30, 30, 0.808);">
            <div class="col-md-6 text-center">
                <img class="card-img-top mb-5 mb-md-0" style="width: 32%;" src="${showProduct.image}" alt="Guitarra ${showProduct.model}" />
            </div>
            <div class="col-md-6">
                <div class="small mb-1 d-flex justify-content-between">
                <p>STOCK: ${showProduct.stock}U.</p>
                <p style="font-weight: bolder; font-size: 1.2rem;">${showProduct.brand}</p>
                </div>
                <h1 class="display-5 fw-bolder" style="color: rgba(39, 30, 30, 0.808);">${showProduct.model}</h1>
                <div class="fs-5 mb-2 text-center">
                    <p>Cuerpo de ${showProduct.bodyMaterial}</p>
                </div>
                <p class="lead">${showProduct.detail}</p>
                <div class="d-flex justify-content-between">
                    <div>
                        <input min="1" type="number" id="quantity-${showProduct.id}"  placeholder="Cantidad" style="width: 5.2rem;" class="me-3">
                        <button onclick="addToCart(${showProduct.id})" class="btn btn-dark" style="background-color: rgba(39, 30, 30, 0.808);">
                            Agregar al Carrito
                        </button>
                    </div>
                    <p class="mt-1" style="font-size: 1.2rem;">$ ${Math.round(dolarPrice * showProduct.price)}</p>
                </div>
            </div>
        </div>`;
            showCard(productDetailCard);
        });
};

cardGeneratorOfProductDetail(showProductDetail)