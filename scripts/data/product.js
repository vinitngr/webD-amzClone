const products = [
    {   id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
        imageUrl: './products/men-cozy-fleece-zip-up-hoodie-red.jpg',
        name: "Red-hoodie 100% Cotton Bath Towels - 2 Pack, Light Teal",
        rating: {
            stars: 4.5,
            counts: 45
        },
        price: 599
    }

    , { id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        imageUrl: './products/71NeU7k0eRL._AC_SY290_.jpg',
        name: "Men's Marvel T-shirt",
        rating: {
            stars: 4,
            counts: 456
        },
        price: 499
    },
    {   id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        imageUrl: './products/women-chiffon-beachwear-coverup-black.jpg',
        name: "Women's Chiffon Beachwear Cover Up - Black",
        rating: {
            stars: 3.5,
            counts: 235
        },
        price: 249
    },
    {   id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        imageUrl: './products/watch.jpg',
        name: "Smart Watch -bolt",
        rating: {
            stars: 3,
            counts: 1289
        },
        price: 1299
    },
    {   id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        imageUrl: './products/71eWZpgtFiL._AC_SY290_.jpg',
        name: "casual t-shirt set of 3",
        rating: {
            stars: 4.5,
            counts: 89
        },
        price: 699
    },
    {   id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        imageUrl: './products/61x1qmjozKL._AC_SY290_.jpg',
        name: "Vitamin-c face serum - from billare",
        rating: {
            stars: 4,
            counts: 333
        },
        price: 950
    },
    {   id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        imageUrl: './products/coffeemaker-with-glass-carafe-black.jpg',
        name: "Coffeemaker with Glass Carafe and Reusable Filter",
        rating: {
            stars: 4.5,
            counts: 1153
        },
        price: 2250
    },
    {
        imageUrl: 'https://supersimple.dev/projects/amazon/images/products/blackout-curtains-black.jpg',
        name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
        rating: {
            stars: 3.5,
            counts: 579
        },
        price: 389
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/4160gLMnfGL._SX300_SY300_QL70_FMwebp_.jpg',
        name: "SKYCELL Games Pubg Gaming Triggers for Mobile Button Trigger Works with BGMI, CODM & Other Shooting Games (1 Pair Gaming Button)",
        rating: {
            stars: 4.5,
            counts: 89
        },
        price: 699
    },
    {
        imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20230823/3J74/64e636a5afa4cf41f572f9ca/-473Wx593H-466488154-blue-MODEL.jpg',
        name: "Denim-Men's Regular Fit Jeans",
        rating: {
            stars: 4,
            counts: 120
        },
        price: 1499
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/31QB73-5IEL._SX300_SY300_QL70_FMwebp_.jpg',
        name: "Sony-Wireless Bluetooth Headphones",
        rating: {
            stars: 4.5,
            counts: 320
        },
        price: 2499
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/41fCDR6pjpL._SX300_SY300_QL70_FMwebp_.jpg',
        name: "Galaxy s-20 Ultra -Smartphone with 128GB Storage",
        rating: {
            stars: 4,
            counts: 215
        },
        price: 19999
    },
    {
        imageUrl: 'https://contents.mediadecathlon.com/p2155606/d0d1270f3193ae010861df2822d17a07/p2155606.jpg?format=auto&quality=70&f=650x0',
        name: "Women's Athletic Running Shoes",
        rating: {
            stars: 4.5,
            counts: 150
        },
        price: 2999
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/61fjq9eujBL._SL1500_.jpg',
        name: "Gaming Mouse with RGB Lighting",
        rating: {
            stars: 4.5,
            counts: 78
        },
        price: 1499
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/41X+sOw6HVL._SY300_SX300_.jpg',
        name: "Instant Coffee Maker",
        rating: {
            stars: 4,
            counts: 250
        },
        price: 18499
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/8191db+HfLL._SL1500_.jpg',
        name: "Bluetooth Portable Speaker",
        rating: {
            stars: 4,
            counts: 175
        },
        price: 1999
    },
    {
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//71/img/product/73/1226/1.webp',
        name: "Haier-32-inch Smart TV",
        rating: {
            stars: 4,
            counts: 200
        },
        price: 10999
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/41zd-yE0QZL._SX300_SY300_QL70_FMwebp_.jpg',
        name: "Stainless Steel Kitchen Knife Set",
        rating: {
            stars: 4.5,
            counts: 125
        },
        price: 2299
    },
    {
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQKeGCv6YX6DbdWX4B54qEoHBh8CWj3QbhG-OGFUqk5jV6_0PfaoHZdNIPNWA12vjO8jlCeRYyQoaWlcJsqWMzzrV77UAnvgTGaDFuT9kYH4QYsJ3GW3Pde',
        name: "Sony PlayStation 5 PS5 Console",
        rating: {
            stars: 4,
            counts: 5821
        },
        price: 45599
    }
]



