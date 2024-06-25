import { updateCartQuantity, orderItem } from "./order section/orderItem.js";
// import { products } from "./data/product.js";
import {removeItem ,cart} from "./data/cart.js"
updateCartQuantity();
orderItem();

document.querySelector('#delete-all-item').addEventListener('click', () => {
    let cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
});



document.querySelectorAll('.remove-item')
    .forEach((itemToRemove) => {
        itemToRemove.addEventListener('click', () => {
            const productId = itemToRemove.dataset.productId;
            removeItem(productId);
            console.log(cart);
            document.querySelector(`.item-${productId}`).remove();
            updateCartQuantity();
        
        });

    });