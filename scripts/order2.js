import { products } from "./data/product.js";
import { cart } from "./data/cart.js";
import { saveCart } from "./data/cart.js";

let order = JSON.parse(localStorage.getItem('order'));
if (!order) {
    order = [
      {}
    ];
}
function saveOrder() {
    localStorage.setItem('order', JSON.stringify(order));
}


function addtoOrder(htmlContent) {
        order.push({
            html: htmlContent,
        });
    saveOrder();
};


function containerHTML(){

    let htmlContent = '';
    if (cart.length > 0) {
        htmlContent += 
        `
        <div class="order-header">
            <div class="order-header-left-section">
                <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>June 10</div>
                </div>
                <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$41.90</div>
                </div>
            </div>

            <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>b6b6c212-d30e-4d4a-805d-90b52ce6b37d</div>
            </div>
        </div>

        <div class="order-container">`
        cart.forEach((cartItem)=>{
            let matchingItem = products.find((product)=> product.id === cartItem.id) 
            htmlContent +=  `
            <div class="order-details-grid">
            <div class="product-image-container">
                <img src="${matchingItem.imageUrl}">
            </div>

            <div class="product-details">
                <div class="product-name">
                ${matchingItem.imageUrl}
                </div>
                <div class="product-delivery-date">
                Arriving on: August 19
                </div>
                <div class="product-quantity">
                ${matchingItem.imageUrl}
                </div>
                
                <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">

                <span class="buy-again-message">Buy it again</span>
                </button>
            </div>

            <div class="product-actions">
                <a href="tracking.html">
                <button class="track-package-button button-secondary">
                    Track package
                </button>
                </a>
            </div>
            </div>
            `
        })}
        
        htmlContent += `
        </div>
        `;
    
        
    };
  
    addtoOrder(htmlContent);
    saveOrder();
    cart.length= 0 ;
    saveCart();

    exportHTML();
}

containerHTML()

function exportHTML(){
    let HTML=''
    order.forEach(orderItem=>{
        HTML+= orderItem.html ;
        console.log(orderItem.html)
    })
    document.querySelector('.orders-grid').innerHTML = HTML ;
  
}