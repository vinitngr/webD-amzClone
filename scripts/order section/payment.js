import { cart } from '../data/cart.js';
import { products } from '../data/product.js';
import { deliveryOptions } from '../data/delivery.js';
import { saveCart } from '../data/cart.js';

export function renderPaymentSummary() {
    let productsPrice = 0;
    let deliverysPrice = 0;
    cart.forEach((cartItem) => {
        let matchingItem;
        let deliveryOption;
        products.forEach((product) => {
            if (cartItem.id === product.id) {
                matchingItem = product;
            }
        });
        const deliveryOptionId = cartItem.deliveryOptionId;

        deliveryOptions.forEach((option) => {
            if (option.deliveryId == deliveryOptionId) {
                deliveryOption = option;
            }
        });
        productsPrice += matchingItem.price * cartItem.quantity;
        deliverysPrice += deliveryOption.deliveryCost;

    });

    const totalBeforeTax = productsPrice + deliverysPrice;
    const tax = totalBeforeTax * 0.05;

    const total = tax + totalBeforeTax;


    const paymentSummaryHTML = `
             
            <div class="payment-summary-title">Payment Summary</div>
        
            <div class="payment-summary-row">
                <div class="ItemNumber">Items (11):</div>
                <div class="itemPrice">₹${productsPrice.toFixed(2)}</div>
            </div>
            <div class="payment-summary-row">
                <div>Shipping & handling:</div>
                <div class="shippingPrice">₹${deliverysPrice.toFixed(2)}</div>
            </div>
            <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="BeforeTax">₹${totalBeforeTax.toFixed(2)}</div>
            </div>
            <div class="payment-summary-row">
                <div>Estimated tax (5%):</div>
                <div class="totalTax">₹${tax.toFixed(2)}</div>
            </div>
            <div class="payment-summary-row total">
                <div>Order total:</div>
                <div class="totalPrice">₹${total.toFixed(0)}.00</div>
            </div>

            <a href="orders.html"><button class="placeOrder">
                Place Your Order
            </button></a>
      
    
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;


    updateCartQuantity();
    function updateCartQuantity() {
        let cartQuantity = 0;
        cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });
        document.querySelector('.ItemNumber').innerHTML = `Item (${cartQuantity})`;
    }


    document.querySelector('.placeOrder').addEventListener('click', function () {
        localStorage.setItem('placeOrder', 'true');
        window.location.href = '../../orders.html';
        
    })
 
}

