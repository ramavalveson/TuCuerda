/*******************************************************************/
/******************** Products creator function ********************/
/*******************************************************************/

function Product(id, model, brand, category, mainMaterial, price, stock, quantity) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.category = category;
    this.mainMaterial = mainMaterial;
    this.price = Number(price);
    this.stock = Number(stock);
    this.quantity = Number(quantity);
};



/************************************************************/
/******************** Products (Objects) ********************/
/************************************************************/

const product1 = new Product ('1', 'sg', 'gibson', 'eléctrica', 'mahogany', 1599, 8, 0);
const product2 = new Product ('2', 'les paul', 'gibson', 'eléctrica', 'mahogany', 2699, 10, 0);
const product3 = new Product ('3', 'stratocaster', 'fender', 'eléctrica', 'maple', 1799, 0, 0);
const product4 = new Product ('4', 'telecaster', 'fender', 'eléctrica', 'maple', 1499, 5, 0);
const product5 = new Product ('5', 'explorer', 'gibson', 'eléctrica', 'mahogany', 1899, 9, 0);
const product6 = new Product ('6', 'jem7vp', 'ibanez', 'eléctrica', 'maple', 2599, 1, 0);



/************************************************/
/******************** Arrays ********************/
/************************************************/

const cart = [];
const products = [product1, product2, product3, product4, product5, product6];


console.log('En el carrito:')

/***************************************************/
/******************** Functions ********************/
/***************************************************/

const addToCart = () => {

    // Función para validar el dato ingresado en chooseProduct
    const validationChooseProduct = () => {
        const chooseProduct = Number(prompt(
            `Elija el producto que desea comprar:
            1 - Guitarra ${product1.category} ${product1.brand} ${product1.model} - u$d ${product1.price}
            2 - Guitarra ${product2.category} ${product2.brand} ${product2.model} - u$d ${product2.price}
            3 - Guitarra ${product3.category} ${product3.brand} ${product3.model} - u$d ${product3.price}
            4 - Guitarra ${product4.category} ${product4.brand} ${product4.model} - u$d ${product4.price}
            5 - Guitarra ${product5.category} ${product5.brand} ${product5.model} - u$d ${product5.price}
            6 - Guitarra ${product6.category} ${product6.brand} ${product6.model} - u$d ${product6.price}`
        ));
        if( (chooseProduct < 7) && (chooseProduct > 0) ) {
             // if de validación de stock de producto
            if(products[chooseProduct - 1].stock >= 1) {
                
                const chooseQuantity = Number(prompt( 'Coloquá la cantidad:' ));

                // if de validación de stock de producto con respecto a la cantidad solicitada
                if(products[chooseProduct - 1].stock >= chooseQuantity) {
                    alert( 
                        `Felicitaciones! Acabás de agregar al carrito ${chooseQuantity} guitarra/s ${products[chooseProduct - 1].category}/s ${products[chooseProduct - 1].brand} ${products[chooseProduct - 1].model} por por u$d ${products[chooseProduct - 1].price * chooseQuantity}` 
                        )
                    
                    // Se agrega la cantidad solicitada en la propiedad quantity del producto
                    products[chooseProduct - 1].quantity = chooseQuantity;

                    // Se pushea el producto al array cart
                    cart.push( products[chooseProduct - 1] )

                    console.log(
                        `|=> Guitarra ${products[chooseProduct - 1].category} ${products[chooseProduct - 1].brand} ${products[chooseProduct - 1].model} X *${products[chooseProduct - 1].quantity} unidades* === u$d ${products[chooseProduct - 1].price * chooseQuantity}`                
                        );
                } else {
                    alert( 
                        `Lo sentimos, en este momento no contamos con stock de guitarras ${products[chooseProduct - 1].category}s ${products[chooseProduct - 1].brand} ${products[chooseProduct - 1].model}`
                        )
                }
            
            } else {
                alert( 
                    `Lo sentimos, no contamos con la cantidad requerida de guitarras ${products[chooseProduct - 1].category}s ${products[chooseProduct - 1].brand} ${products[chooseProduct - 1].model}`
                    )
                products[chooseProduct - 1].quantity = 0;
            }
            
            // Función de validación de ingreso de dato en el prompt continueShopping
            const validationContinueShopping = () => {
                const continueShopping = prompt( 'Desea seguir comprando? S/N');
                if( (continueShopping == 'S') || (continueShopping == 's') ){
                    // Se vuelve a llamar a la función addToCart para seguir comprando
                    addToCart();
                } else if( (continueShopping == 'N') || (continueShopping == 'n') ) {
                    alert( 'Muchas gracias por comprar en TuCuerda, tu carrito te espera!' );
                } else {
                    alert( 'Por favor coloquá una opción válida' )
                    // Se llama a la función validationContinueShopping para validar nuevamente la continuidad de la compra
                    validationContinueShopping();
                };
            };

            // Se llama a la función validationContinueShopping
            validationContinueShopping();
        } else {
            alert( 'Por favor coloquá una opción válida' )
            // Se llama a la funcíon para validar nuevamente el dato en chooseProduct
            validationChooseProduct();
        }
    };
    // Se llama a la función validationChooseProduct
    validationChooseProduct();  
};

/**********************************************************/
/******************** Function called ********************/
/**********************************************************/

addToCart();

// Cáclulo del valor total del carrito con el método reduce
const totalCartPrice = cart.reduce( (product1, product2) => (product1 + (product2.price * product2.quantity) ), 0)

console.log( `Total a abonar: u$d ${totalCartPrice}` );

console.log( 'Array cart:' );

console.log(cart);