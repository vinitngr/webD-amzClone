import { products } from "./data/product.js";
import { cart, removeItem } from "./data/cart.js";

// console.log(cart);
// console.log(products);
// console.log(removeItem);
let HTMLcontent = `
<div id='header-cart'>
<div class="shoppingCart-text">Shopping Cart

</div>
<div id='price-text'>price</div>
<a style="color: #007185;">delete all item</a>
<hr></div>
`;
cart.forEach((cartItem) => {
    let matchingItem;
    products.forEach((product) => {
        if (cartItem.id === product.id) {
            matchingItem = product;
        }
    });

    HTMLcontent += `
    <div class="cart-item cart-delete-${matchingItem.id}">
    <div class="img-box"
        style="background-image: url('.${matchingItem.imageUrl}');"></div>
    <div class="content">
        <div class="details-price">
        
            <div class="product-detail">Quantity:${cartItem.quantity} , Name: ${matchingItem.name}
                <button data-product-id=${matchingItem.id} class='remove-item'>delete</button></div>
            <div class="product-arrival"></div>
            <div class="product-price">price : ${matchingItem.price}</div>
        </div>

    </div>

</div>
` ;
});
// console.log(HTMLcontent);

document.querySelector('.cart-container').innerHTML = HTMLcontent;


document.querySelectorAll('.remove-item')
    .forEach((itemToRemove) => {
        itemToRemove.addEventListener('click', () => {
            const productId = itemToRemove.dataset.productId;
            removeItem(productId);
            console.log(cart);
            document.querySelector(`.cart-delete-${productId}`).remove();
            
        });

    });