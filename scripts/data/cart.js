export const cart=["vinit"];

export function addtocart(productId){
    let matchingItem;
    cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }
    });
    if (matchingItem) {
        matchingItem.quantity++;
    }
    else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}
let cartQuantity = 0;
export function updateCartQuantity(){
    cartQuantity++;
        document.getElementById('cart-box').innerHTML = cartQuantity;
        document.getElementById('list-cartquantity').innerHTML= cartQuantity;
}