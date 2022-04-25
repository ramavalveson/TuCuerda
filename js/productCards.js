// función flecha que escribe las cards de productos en el sitio indicado del html
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
                            <button onclick="productDetail(${productArray.id})" class="btn btn-light" style="border: solid 0.1rem rgba(39, 30, 30, 0.808);">
                            <a href="detail.html" style="color: rgba(39, 30, 30, 0.808);">Ver Detalle</a>
                            </button>
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