import { updateCartQuantity, addtocart, cart } from "./data/cart.js";
import { products } from "./data/product.js";


const cartsvg =` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
<path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>`

let HTMLcontent = '';
products.forEach((product) => {
    HTMLcontent = HTMLcontent + `<div class="product-shell">
        <div class="product-image" style="background-image: url(${product.imageUrl});"></div>
        <div class="product-detail">
            <div class="product-name line-limit">${product.name}</div>
            <div class="product-price">${product.price}₹</div>
            <div class="product-rating">
                <div class="product-rating-stars"><img src="./ratings/rating-${product.rating.stars * 10}.png"></div>
                <div class="product-rating-counts">${product.rating.counts}</div>
            </div>

            <div class="product-add-quantity">
                <button class="product-addtocart" data-product-id="${product.id}">Add to Cart
                ${cartsvg}
                </button>
                <select class="quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
        </div>
    </div>`;


});
document.querySelector('.products-container').innerHTML = HTMLcontent;

document.querySelectorAll('.product-addtocart').forEach((addButton) => {
    addButton.addEventListener('click', () => {
        const productId = addButton.dataset.productId;
        addtocart(productId);
        added(addButton);
        updateCartQuantity();
    });
});


let sidebarVisible = false;
document.querySelector('.sidebar').addEventListener('click', () => {
    const sidebar = document.querySelector('.show-sidebar');
    sidebar.style.display = sidebarVisible ? 'none' : 'block';
    sidebarVisible = !sidebarVisible;
})

function added(addButton) {
    addButton.innerHTML = " <img id='Added' src='./Icons/checkmark.png'>  Added"
    setTimeout(() => {
        addButton.innerHTML = "Add to Cart "+ cartsvg;
    }, 1500);
}
