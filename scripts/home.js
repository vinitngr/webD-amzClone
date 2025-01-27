import { addtocart, cart } from "./data/cart.js";
import { products } from "./data/product.js";
import svgs from "./data/svgs.js";
import { filterAndSortProducts } from "./data/utils.js";

window.querySearch = function () {
    const searchInput = document.querySelector('#search');
    let query = searchInput.value;
    if(!query) return;
    const filteredProducts= filterAndSortProducts(products, query)
    render(filteredProducts);
    searchInput.value = "";
};

function render(products){
    let HTMLcontent = `
    <div class='banner'></div>`;
    products.forEach((product) => {
        HTMLcontent = HTMLcontent + `<div class="product-shell">
            <div class="product-image" style="background-image: url(${product.imageUrl});"></div>
            <div class="product-detail">
                <div class="product-name line-limit">${product.name}</div>
                <div class="product-price">${product.price}₹</div>
                <div class="product-rating">
                    <div class="product-rating-stars"><img src="${product.getStarUrl()}"></div>
                    <div class="product-rating-counts">${product.rating.counts}</div>
                </div>

                <div class="product-add-quantity">
                    <button class="product-addtocart" data-product-id="${product.id}">Add to Cart
                    ${svgs.icon1}
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
            ${
                product.extraInfoHTML()
            }
        </div>
    
    `;
    });
    document.querySelector('.products-container').innerHTML = HTMLcontent;

    document.querySelectorAll('.product-addtocart').forEach((addButton) => {
        addButton.addEventListener('click', () => {
            const id = addButton.dataset.productId;
            const quantitySelect = addButton.closest('.product-add-quantity').querySelector('.quantity');
            const quantitySelected = quantitySelect.value;
            addtocart(id , quantitySelected);
            added(addButton);
            updateCartQuantity();
    
        });
    });
    
}


function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;

    });
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
    document.getElementById('list-cartquantity').innerHTML = cartQuantity;

}

let sidebarVisible = false;
document.querySelector('.sidebar').addEventListener('click', () => {
    const sidebar = document.querySelector('.show-sidebar');
    sidebar.style.display = sidebarVisible ? 'none' : 'block';
    sidebarVisible = !sidebarVisible;
})

function added(addButton) {
    addButton.innerHTML = " <img id='Added' src='./Icons/checkmark.png'>  Added"
    setTimeout(() => {
        addButton.innerHTML = "Add to Cart " + svgs.icon1;
    }, 1500);
}
render(products)
updateCartQuantity();

window.onkeydown = (e) =>{
    const searchInput = document.querySelector('#search');
    let query = searchInput.value;
    if(e.key === "Enter" && query){
        querySearch();
    }
}



//cant use fetch data as my data's are slightly different
// fetchProducts() 
//   .then(products => {
//     // Create HTML content based on fetched products
//     let HTMLcontent = `
//       <div class='banner'></div>`;
    
//     products.forEach((product) => {
//       HTMLcontent += `
//         <div class="product-shell">
//           <div class="product-image" style="background-image: url(${product.imageUrl});"></div>
//           <div class="product-detail">
//             <div class="product-name line-limit">${product.name}</div>
//             <div class="product-price">${product.price}₹</div>
//             <div class="product-rating">
//               <div class="product-rating-stars"><img src="${product.getStarUrl()}"></div>
//               <div class="product-rating-counts">${product.rating.counts}</div>
//             </div>
//             <div class="product-add-quantity">
//               <button class="product-addtocart" data-product-id="${product.id}">Add to Cart
//               ${svgs.icon1}
//               </button>
//               <select class="quantity">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//                 <option>8</option>
//                 <option>9</option>
//                 <option>10</option>
//               </select>
//             </div>
//           </div>
//           ${product.extraInfoHTML()}
//         </div>
//       `;
//     });
    
//     // Update the products container with the new HTML content
//     document.querySelector('.products-container').innerHTML = HTMLcontent;

//     // Add event listeners to the "Add to Cart" buttons
//     document.querySelectorAll('.product-addtocart').forEach((addButton) => {
//       addButton.addEventListener('click', () => {
//         const id = addButton.dataset.productId;
//         const quantitySelect = addButton.closest('.product-add-quantity').querySelector('.quantity');
//         const quantitySelected = quantitySelect.value;
//         addtocart(id, quantitySelected);
//         added(addButton);
//         updateCartQuantity();
//       });
//     });
//   })
//   .catch(error => console.error('Error:', error));
