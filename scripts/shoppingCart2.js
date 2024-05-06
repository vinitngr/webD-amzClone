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
<a style="color: #007185;" id="delete-all-item">delete all item</a>
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
        
            <div class="product-detail" style="font-weight:500 ; font-size:20px">Quantity:${cartItem.quantity} , Name: ${matchingItem.name}
                <button data-product-id=${matchingItem.id} class='remove-item'>delete</button></div>
            <div class="product-arrival"></div>
            <div class="product-price">price : ${matchingItem.price}</div>
        </div>

    </div>

</div>
` ;
});

document.querySelector('.cart-container').innerHTML = HTMLcontent;


document.querySelectorAll('.remove-item')
    .forEach((itemToRemove) => {
        itemToRemove.addEventListener('click', () => {
            const productId = itemToRemove.dataset.productId;
            removeItem(productId);
            console.log(cart);
            document.querySelector(`.cart-delete-${productId}`).remove();
            updateCartQuantity();

        });

    });

document.addEventListener('DOMContentLoaded', () => {
    updateCartQuantity();
});

function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;

    });
    document.getElementById('cart-q').innerHTML = cartQuantity;

};

document.querySelector('#delete-all-item').addEventListener('click', () => {
    let cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
});