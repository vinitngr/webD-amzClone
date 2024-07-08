import { renderOrderSummary } from '../order section/orderItem.js';

const cart = {
    items: JSON.parse(localStorage.getItem('cart')) || [
        {
            id: 'aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f',
            quantity: 2,
            deliveryOptionId: '2'
        },
        {
            id: 'e4363d8ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '3'
        },
        {
            id: '83d4ca15-0sf35-48f5-b7a3-1ea210004f2e',
            quantity: 5,
            deliveryOptionId: '1'
        }
    ],

    saveCart : function() {   //another method to write function
        localStorage.setItem('cart', JSON.stringify(this.items));
    },

    addtocart(id, quantitySelected) {
        let matchingItem;
        this.items.forEach((item) => {
            if (id === item.id) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity = matchingItem.quantity + Number(quantitySelected);
        } else {
            this.items.push({
                id: id,
                quantity: Number(quantitySelected),
                deliveryOptionId: '2'
            });
        }
        this.saveCart();
        console.log(this.items);
    },

    removeItem(productId) {
        this.items = this.items.filter(cartItem => cartItem.id !== productId);
        this.saveCart();
    },

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
        this.items.forEach((item) => {
            if (productId === item.id) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveCart();
        }
        renderOrderSummary();
    }
};

export default cart;
console.log(cart);