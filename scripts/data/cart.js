
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        id: 'aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f',
        quantity: 2
    },
    {
        id: 'e4363d8ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1

    },
    {
        id: "83d4ca15-0sf35-48f5-b7a3-1ea210004f2e",
        quantity: 5
    }];
}

export function addtocart(id , quantitySelected) {
    let matchingItem;
    cart.forEach((item) => {
        if (id === item.id) {
            matchingItem = item;
        }
    });
    if (matchingItem) {

        matchingItem.quantity = matchingItem.quantity + 1*quantitySelected;
    }
    else {
        cart.push({
            id: id,
            quantity: 1
        });
    }
    saveCart();
    console.log(cart);
};

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
export function removeItem(productId) {
    let newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.id !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveCart();
}

// console.log(cart);
