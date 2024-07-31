import { products } from "./data/product.js";
import { cart, saveCart } from "./data/cart.js";
import { deliveryOptions } from "./data/delivery.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

const today = dayjs();
const formattedDate = today.format('MMMM D');
let order = JSON.parse(localStorage.getItem('order')) || [];

function saveOrder() {
    localStorage.setItem('order', JSON.stringify(order));
}
function addtoOrder(htmlContent) {
    order.push({ html: htmlContent });
    saveOrder();
}
function generateRandomCode() {
    return `${randomHex(8)}-${randomHex(4)}-${randomHex(4)}-${randomHex(4)}-${randomHex(12)}`;
}
function randomHex(length) {
    return Math.random().toString(16).slice(2, 2 + length);
}
function calculatePrices() {
    let productsPrice = 0;
    let deliverysPrice = 0;
    cart.forEach((cartItem) => {
        const matchingItem = products.find(product => product.id === cartItem.id);
        const deliveryOption = deliveryOptions.find(option => option.deliveryId == cartItem.deliveryOptionId);
        productsPrice += matchingItem.price * cartItem.quantity;
        deliverysPrice += deliveryOption.deliveryCost;
    });
    const totalBeforeTax = productsPrice + deliverysPrice;
    const tax = totalBeforeTax * 0.05;
    return totalBeforeTax + tax;
}
function containerHTML() {
    let htmlContent = '';
    if (cart.length > 0) {
        const total = calculatePrices();
        const randomCode = generateRandomCode();

        htmlContent += `
        <div class="order-header">
            <div class="order-header-left-section">
                <div class="order-date">
                    <div class="order-header-label">Order Placed:</div>
                    <div>${formattedDate}</div>
                </div>
                <div class="order-total">
                    <div class="order-header-label">Total:</div>
                    <div>₹${total.toFixed(0)}.00</div>
                </div>
            </div>
            <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>${randomCode}</div>
            </div>
        </div>
        <div class="order-container">`;

        cart.forEach((cartItem) => {
            const matchingItem = products.find(product => product.id === cartItem.id);
            const deliveryOption = deliveryOptions.find(option => option.deliveryId == cartItem.deliveryOptionId);
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
            const dateString = deliveryDate.format('MMMM D');
            htmlContent += `
            <div class="order-details-grid">
                <div class="product-image-container">
                    <img src="${matchingItem.imageUrl}">
                </div>
                <div class="product-details">
                    <div class="product-name">${matchingItem.name}</div>
                    <div class="product-delivery-date">Arriving on: ${dateString}</div>
                    <div class="product-quantity">Quantity: ${cartItem.quantity}</div>
                    <button class="buy-again-button button-primary" data-item-id="${matchingItem.id}">
                        <img class="buy-again-icon" src="https://static.thenounproject.com/png/776827-200.png">
                        <span class="buy-again-message">Buy it again</span>
                    </button>
                </div>
                <div class="product-actions">
                    <a href="tracking.html">
                        <button class="track-package-button button-secondary">Track package</button>
                    </a>
                </div>
            </div>`;
        });

        htmlContent += `
        </div>`;
    }

    addtoOrder(htmlContent);
    
    exportHTML();
}
function exportHTML() {
    let HTML = '';
    order.reverse().forEach(orderItem => {
        HTML += orderItem.html;
    });
    document.querySelector('.orders-grid').innerHTML = HTML;
}
function setupBuyAgainButtons() {
    document.querySelectorAll('.buy-again-button').forEach((addButton) => {
        addButton.addEventListener('click', () => {
            const id = addButton.dataset.itemId;
            addtocart(id);
            added(addButton);
            updateCartQuantity()
        });
        
    });
}
function addtocart(id) {
    const matchingItem = cart.find(item => id === item.id);
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({ id: id, quantity: 1, deliveryOptionId: '2' });
    }
    saveCart();
    
   
}
function added(addButton) {
    addButton.innerHTML = " <img id='Added' src='./Icons/checkmark.png'>  Added"
    setTimeout(() => {
        addButton.innerHTML = `<img class="buy-again-icon" src="https://static.thenounproject.com/png/776827-200.png">
                        <span class="buy-again-message">Buy it again</span> `
    }, 1500);
}
function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;

    });
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
    document.getElementById('list-cartquantity').innerHTML = cartQuantity;

}
containerHTML();
setupBuyAgainButtons();
updateCartQuantity();