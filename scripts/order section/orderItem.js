import { products } from "../data/product.js";
import { removeItem, cart, updateDeliveryOption } from "../data/cart.js";
import { deliveryOptions } from "../data/delivery.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export function orderItem() {
    let HTMLcontent = `
        <div id='header-cart'>
            <div class="shoppingCart-text">Shopping Cart</div>
            <div id='price-text'>Price</div>
            <a style="color: #007185;" id="delete-all-item">Delete all items</a>
            <hr>
        </div>
    `;

    cart.forEach((cartItem) => {
        let matchingItem;
        products.forEach((product) => {
            if (cartItem.id === product.id) {
                matchingItem = product;
            }
        });

        const deliveryOptionId = cartItem.deliveryOptionId;
        let deliveryOption;
        deliveryOptions.forEach((option) => {
         
            if (option.deliveryId == deliveryOptionId) {
                deliveryOption = option;

            }
        
        
        });
       
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');

        HTMLcontent += `
            <div class="item item-${matchingItem.id}">
                <div id="image"><img src="${matchingItem.imageUrl}"></div>
                <div class="leftbox">
                    <div class="pro-name p">${matchingItem.name}</div>
                    <div class="pro-quantity p">Quantity: ${cartItem.quantity}</div>
                    <div class="update-delete">
                        <a class="delete remove-item" id='delete-all-item' data-product-id="${matchingItem.id}">delete</a>
                        <a class="update">update</a>
                    </div>
                    <div class="pro-arrival p">Delivery date: ${dateString}</div>
                </div>
                <div class="middlebox">
                    <label style='font-weight:bold; color: rgb(26, 26, 26); padding: 0 0; margin-bottom:10px'>Choose a delivery option:</label>
                    ${deliveryOptionHTML(matchingItem, cartItem)}
                </div>
                <div class="rightbox">₹${matchingItem.price}.00</div>
            </div>
        `;
    });

    function deliveryOptionHTML(matchingItem, cartItem) {
        let HTML = '';
        deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
            const dateString = deliveryDate.format('dddd, MMMM D');
            const priceRs = deliveryOption.deliveryCost === 0 ? 'FREE shipping' : `₹${deliveryOption.deliveryCost} shipping`;

            const isChecked = deliveryOption.deliveryId == cartItem.deliveryOptionId;

            HTML += `
                <label class="deliveryOptions js-delivery-option">
                    <input type="radio" data-delivery-option-id="${deliveryOption.deliveryId}" data-product-id="${matchingItem.id}" ${isChecked ? 'checked' : ''}>
                    <div class="deliveryDate-Price">
                        <div class="deliverDate">${dateString}</div>
                        <div class="deliveryPrice">${priceRs}</div>
                    </div>
                </label>
            `;
        });
        return HTML;
    }

    document.querySelector('.container').innerHTML = HTMLcontent;

    document.querySelectorAll('.remove-item').forEach((itemToRemove) => {
        itemToRemove.addEventListener('click', () => {
            const productId = itemToRemove.dataset.productId;
            removeItem(productId);
            document.querySelector(`.item-${productId}`).remove();
            updateCartQuantity();
        });
    });

    document.querySelector('#delete-all-item').addEventListener('click', () => {
        let cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    });

    document.querySelectorAll('.js-delivery-option input[type="radio"]').forEach((element) => {
        element.addEventListener('click', function () {
            const productId = this.dataset.productId;
            const deliveryOptionId = this.dataset.deliveryOptionId;
            updateDeliveryOption(productId, deliveryOptionId);
        });
    });
}

export function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.getElementById('cart-q').innerHTML = cartQuantity;
}
