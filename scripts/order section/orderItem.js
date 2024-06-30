import { products } from "../data/product.js";
import { removeItem, cart } from "../data/cart.js"

orderItem();
export function orderItem() {
    let HTMLcontent = `
    <div id='header-cart'>
    <div class="shoppingCart-text">Shopping Cart

    </div>
    <div id='price-text'>price</div>
    <a style="color: #007185;" id="delete-all-item">delete all item</a>
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

        HTMLcontent += `
    <div class="item item-${matchingItem.id}">
    <div id="image"><img
            src="${matchingItem.imageUrl}">
    </div>
    <div class="leftbox" >
        <div class="pro-name p">${matchingItem.name}
        </div>

        <div class="pro-quantity p">Quantity: ${cartItem.quantity}</div>
       
        <div class="update-delete">
            <button  class="delete remove-item" id='delete-all-item' data-product-id=${matchingItem.id} >delete</button>
            <button class="update">update</button>
        </div>
      
        <div class="pro-arrival p" style="font-weight:bolder; color:#007600" >Delivery Date : sunday , May 15</div>
    </div>
    <div class="middlebox" >
    <label style='font-weight:bold'>Choose a delivery option:</label>
        <label>
            <input type="radio" name="${matchingItem.id}" value="1"> Option 1
        </label>
        <label>
            <input type="radio" name="${matchingItem.id}" value="2"> Option 2
        </label>
        <label>
            <input type="radio" name="${matchingItem.id}" value="3"> Option 3
        </label>
    </div>
    <div class="rightbox" >₹${matchingItem.price}.00</div>
</div>





` ;
    });

    document.querySelector('.container').innerHTML = HTMLcontent;

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


    document.querySelector('#delete-all-item').addEventListener('click', () => {
        let cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    });


}

export function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;

    });
    document.getElementById('cart-q').innerHTML = cartQuantity;

};

