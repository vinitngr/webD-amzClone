import { updateCartQuantity ,addtocart ,cart} from "./data/cart.js";
import { products } from "./data/product.js";



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
                <button class="product-addtocart" data-product-id="${product.id}">Add to Cart</button>
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
//   console.log(content)
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
document.querySelector('.sidebar').addEventListener('click' ,()=>{
    const sidebar = document.querySelector('.show-sidebar');
    sidebar.style.display = sidebarVisible ? 'none' : 'block';
    sidebarVisible = !sidebarVisible;
})

function added(addButton){
    addButton.innerHTML= " <img id='Added' src='./Icons/checkmark.png'> Added"
            setTimeout(()=>{
                addButton.innerHTML = "Add to Cart"; 
            },1500);
}
