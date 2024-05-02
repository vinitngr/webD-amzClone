const products = [
    {
        imageUrl: './products/cream.jpg',
        name: "Red-hoodie 100% Cotton Bath Towels - 2 Pack, Light Teal",
        rating: {
            stars: 4.5,
            counts: 45
        },
        price: 599
    }

    , {
        imageUrl: './products/71NeU7k0eRL._AC_SY290_.jpg',
        name: "Men's Marvel T-shirt",
        rating: {
            stars: 4,
            counts: 456
        },
        price: 499
    },
    {
        imageUrl: './products/women-chiffon-beachwear-coverup-black.jpg',
        name: "Women's Chiffon Beachwear Cover Up - Black",
        rating: {
            stars: 3.5,
            counts: 235
        },
        price: 249
    }

]


let HTMLcontent = '';
products.forEach((product) => {
    HTMLcontent = HTMLcontent +  `<div class="project-shell">
        <div class="product-image" style="background-image: url(${product.imageUrl});"></div>
        <div class="product-detail">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price}₹</div>
            <div class="product-rating">
                <div class="product-rating-stars"><img src="./ratings/rating-${product.rating.stars * 10}.png"></div>
                <div class="product-rating-counts">${product.rating.counts}</div>
            </div>

            <div class="product-add-quantity">
                <button class="product-addtocart">Add to Cart</button>
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
document.querySelector('.products-container').innerHTML=HTMLcontent;