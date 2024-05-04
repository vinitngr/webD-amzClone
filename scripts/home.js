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
                </select>
            </div>
        </div>
    </div>`;


});
//   console.log(content)
document.querySelector('.products-container').innerHTML = HTMLcontent;
let cartQuantity = 0;
document.querySelectorAll('.product-addtocart').forEach((addButton) => {
        addButton.addEventListener('click', () => {
            cartQuantity++;
            document.getElementById('cart-box').innerHTML = cartQuantity;
           
            const productId = addButton.dataset.productId;
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
            // console.log(cart)
            document.getElementById('list-cartquantity').innerHTML= cartQuantity;
            added(addButton);
        });
    });


let sidebarVisible = false;
function clickshowSidebar() {
    if (!sidebarVisible) {
        document.querySelector('.show-sidebar').style.display = 'block';
    }
    else {
        document.querySelector('.show-sidebar').style.display = 'none';
    }
    sidebarVisible=!sidebarVisible;
    
}

function added(addButton){
    addButton.innerHTML= " <img id='Added' src='./Icons/checkmark.png'> Added"
            setTimeout(()=>{
                addButton.innerHTML = "Add to Cart"; 
            },1500);
}
