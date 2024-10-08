

class Product{
  id;
  imageUrl;
  name ;
  rating;
  price;

  constructor(productdetails){
      this.id = productdetails.id ;
      this.imageUrl = productdetails.imageUrl ;
      this.name = productdetails.name ;
      this.rating = productdetails.rating ;
      this.price = productdetails.price ;
  }
  
  getStarUrl(){
   return `./ratings/rating-${this.rating.stars * 10}.png`    //one of the benefit of making class, it makes code look clean and organized
  }

  extraInfoHTML(){
    return ''
  }
}

class Clothing extends Product{
  sizeChartLink;

  constructor(productdetails){
    super(productdetails)   //call parents constructor 
    this.sizeChartLink= productdetails.sizeChartLink ;
  }

  extraInfoHTML(){
    //super.extraInfoHTML() ; //to stop method overwritting // calls parents method
    return `
      <a href='https://www.shutterstock.com/shutterstock/photos/1947503983/display_1500/stock-vector-size-chart-for-women-measurements-for-clothing-women-s-eu-sizes-and-uk-sizes-chart-in-sm-1947503983.jpg' target= "_main ">size chart</a>
    `
  }
}

export const products = [
        {
          id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
          imageUrl: "./products/bathroom-rug.jpg",
          name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
          rating: {
            stars: 4.5,
            counts: 119
          },
          price: 1250,
          keywords: [
            "bathmat",
            "bathroom",
            "home"
          ]
        },
        {
          id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
          imageUrl: "./products/women-knit-ballet-flat-black.jpg",
          name: "Women's Knit Ballet Flat",
          rating: {
            stars: 4,
            counts: 326
          },
          price: 2640,
          keywords: [
            "shoes",
            "flats",
            "womens",
            "footwear"
          ]
        },
        {
          id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
          imageUrl: "./products/men-golf-polo-t-shirt-blue.jpg",
          name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
          rating: {
            stars: 4.5,
            counts: 2556
          },
          price: 1599,
          keywords: [
            "tshirts",
            "shirts",
            "apparel",
            "mens"
          ],
          type: "clothing",
          sizeChartLink: "images/clothing-size-chart.png"
        },
        {
          id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
          imageUrl: "./products/trash-can-with-foot-pedal-50-liter.jpg",
          name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
          rating: {
            stars: 4.5,
            counts: 2286
          },
          price: 8300,
          keywords: [
            "garbage",
            "bins",
            "cans",
            "kitchen"
          ]
        },
        {
          id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
          imageUrl: "./products/duvet-cover-set-blue-twin.jpg",
          name: "Duvet Cover Set with Zipper Closure",
          rating: {
            stars: 4,
            counts: 456
          },
          price: 2399,
          keywords: [
            "bedroom",
            "bed sheets",
            "sheets",
            "covers",
            "home"
          ]
        },
        {
          id: "d2785924-743d-49b3-8f03-ec258e640503",
          imageUrl: "./products/women-chunky-beanie-gray.webp",
          name: "Women's Chunky Cable Beanie - Gray",
          rating: {
            stars: 5,
            counts: 83
          },
          price: 1250,
          keywords: [
            "hats",
            "winter hats",
            "beanies",
            "tuques",
            "apparel",
            "womens"
          ]
        },
        {
          id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
          imageUrl: "./products/men-chino-pants-beige.jpg",
          name: "Men's Classic-fit Pleated Chino Pants",
          rating: {
            stars: 4.5,
            counts: 9017
          },
          price: 2290,
          keywords: [
            "pants",
            "apparel",
            "mens"
          ]
        },
        {
          id: "1c079479-8586-494f-ab53-219325432536",
          imageUrl: "./products/men-athletic-shoes-green.jpg",
          name: "Men's Athletic Sneaker",
          rating: {
            stars: 4,
            counts: 229
          },
          price: 3890,
          keywords: [
            "shoes",
            "running shoes",
            "footwear",
            "mens"
          ]
        },
        {
          id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
          imageUrl: "./products/men-navigator-sunglasses-brown.jpg",
          name: "Men's Navigator Sunglasses Pilot",
          rating: {
            stars: 3.5,
            counts: 42
          },
          price: 1690,
          keywords: [
            "sunglasses",
            "glasses",
            "accessories",
            "shades"
          ]
        },
        {
          id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
          imageUrl: "./products/non-stick-cooking-set-15-pieces.webp",
          name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
          rating: {
            stars: 4.5,
            counts: 511
          },
          price: 6797,
          keywords: [
            "cooking set",
            "kitchen"
          ]
        },
        {
          id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
          imageUrl: "./products/vanity-mirror-silver.jpg",
          name: "Vanity Mirror with Heavy Base - Chrome",
          rating: {
            stars: 4.5,
            counts: 130
          },
          price: 1649,
          keywords: [
            "bathroom",
            "washroom",
            "mirrors",
            "home"
          ]
        },
        {
          id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
          imageUrl: "./products/women-french-terry-fleece-jogger-camo.jpg",
          name: "Women's Fleece Jogger Sweatpant",
          rating: {
            stars: 4.5,
            counts: 248
          },
          price: 2400,
          keywords: [
            "pants",
            "sweatpants",
            "jogging",
            "apparel",
            "womens"
          ]
        },
        {
          id: "d339adf3-e004-4c20-a120-40e8874c66cb",
          imageUrl: "./products/double-elongated-twist-french-wire-earrings.webp",
          name: "Double Oval Twist French Wire Earrings - Gold",
          rating: {
            stars: 4.5,
            counts: 117
          },
          price: 2400,
          keywords: [
            "accessories",
            "womens"
          ]
        },
        {
          id: "d37a651a-d501-483b-aae6-a9659b0757a0",
          imageUrl: "./products/round-airtight-food-storage-containers.jpg",
          name: "Round Airtight Food Storage Containers - 5 Piece",
          rating: {
            stars: 4,
            counts: 126
          },
          price: 2899,
          keywords: [
            "boxes",
            "food containers",
            "kitchen"
          ]
        },
        {
          id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
          imageUrl: "./products/coffeemaker-with-glass-carafe-black.jpg",
          name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
          rating: {
            stars: 4.5,
            counts: 1211
          },
          price: 2250,
          keywords: [
            "coffeemakers",
            "kitchen",
            "appliances"
          ]
        },
        {
          id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
          imageUrl: "./products/blackout-curtains-black.jpg",
          name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
          rating: {
            stars: 4.5,
            counts: 363
          },
          price: 3099,
          keywords: [
            "bedroom",
            "home"
          ]
        },
        {
          id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
          imageUrl: "./products/cotton-bath-towels-teal.webp",
          name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
          rating: {
            stars: 4.5,
            counts: 93
          },
          price: 2110,
          keywords: [
            "bathroom",
            "home",
            "towels"
          ]
        },
        { id: "e4363d8ce-6aa0-4b85-b27f-e1d07eb678c6",
            imageUrl: './products/71NeU7k0eRL._AC_SY290_.jpg',
            name: "Men's Marvel T-shirt",
            rating: {
                stars: 4,
                counts: 456
            },
            price: 499
        },
        {   id: "15b6fc6f-327a-4ec4-8f96f-486349e85a3d",
            imageUrl: './products/women-chiffon-beachwear-coverup-black.jpg',
            name: "Women's Chiffon Beachwear Cover Up - Black",
            rating: {
                stars: 3.5,
                counts: 235
            },
            price: 249
        },
        {   id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
          imageUrl: './products/men-cozy-fleece-zip-up-hoodie-red.jpg',
          name: "Red-hoodie 100% Cotton Bath Towels - 2 Pack, Light Teal",
          rating: {
              stars: 4.5,
              counts: 45
          },
          price: 599
      }

      , 
      {
        id: "04701903-bc79-49c6-bc11-1af7e3651358",
        imageUrl: "./products/women-beach-sandals.jpg",
        name: "Women's Two Strap Buckle Sandals - Tan",
        rating: {
          stars: 4.5,
          counts: 562
        },
        price: 2499,
        keywords: [
          "footwear",
          "sandals",
          "womens",
          "beach",
          "summer"
        ]
      },
      {
        id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
        imageUrl: "./products/blackout-curtain-set-beige.webp",
        name: "Blackout Curtains Set 4-Pack - Beige",
        rating: {
          stars: 4.5,
          counts: 232
        },
        price: 4599,
        keywords: [
          "bedroom",
          "curtains",
          "home"
        ]
      },
      {
        id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        imageUrl: "./products/men-slim-fit-summer-shorts-gray.jpg",
        name: "Men's Slim-Fit Summer Shorts",
        rating: {
          stars: 4,
          counts: 160
        },
        price: 1699,
        keywords: [
          "shorts",
          "apparel",
          "mens"
        ]
      },
      {
        id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
        imageUrl: "./products/electric-glass-and-steel-hot-water-kettle.webp",
        name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
        rating: {
          stars: 5,
          counts: 846
        },
        price: 3074,
        keywords: [
          "water boiler",
          "appliances",
          "kitchen"
        ]
      },
      {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        imageUrl: "./products/facial-tissue-2-ply-18-boxes.jpg",
        name: "Ultra Soft Tissue 2-Ply - 18 Box",
        rating: {
          stars: 4,
          counts: 99
        },
        price: 2374,
        keywords: [
          "kleenex",
          "tissues",
          "kitchen",
          "tissues box",
          "napkins"
        ]
      },
      {
        id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
        imageUrl: "./products/straw-sunhat.webp",
        name: "Straw Lifeguard Sun Hat",
        rating: {
          stars: 4,
          counts: 215
        },
        price: 2200,
        keywords: [
          "hats",
          "straw hats",
          "summer",
          "apparel"
        ]
      },
      {
        id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
        imageUrl: "./products/sky-flower-stud-earrings.webp",
        name: "Sterling Silver Sky Flower Stud Earrings",
        rating: {
          stars: 4.5,
          counts: 52
        },
        price: 1799,
        keywords: [
          "jewelry",
          "accessories",
          "womens"
        ]
      },
      {
        id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
        imageUrl: "./products/women-stretch-popover-hoodie-black.jpg",
        name: "Women's Stretch Popover Hoodie",
        rating: {
          stars: 4.5,
          counts: 2465
        },
        price: 1374,
        keywords: [
          "hooded",
          "hoodies",
          "sweaters",
          "womens",
          "apparel"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
      },
        {   id: "83d4ca15-0sf35-48f5-b7a3-1ea210004f2e",
            imageUrl: './products/watch.jpg',
            name: "Smart Watch -bolt",
            rating: {
                stars: 3,
                counts: 1289
            },
            price: 1299
        },
        {   id: "54e0eccd-8f36-46fd2b-b68a-8182611d9add",
            imageUrl: './products/71eWZpgtFiL._AC_SY290_.jpg',
            name: "casual t-shirt set of 3",
            rating: {
                stars: 4.5,
                counts: 89
            },
            price: 699
        },
        {   id: "3ebe75dc-6sdf4d2-4137-8860-1f5a963e534b",
            imageUrl: './products/61x1qmjozKL._AC_SY290_.jpg',
            name: "Vitamin-c face serum - from billare",
            rating: {
                stars: 4,
                counts: 333
            },
            price: 950
        },
        {   id: "8c9c52b5-5a19-4bcdfdsb-a5d1-158a74287c53",
            imageUrl: './products/coffeemaker-with-glass-carafe-black.jpg',
            name: "Coffeemaker with Glass Carafe and Reusable Filter",
            rating: {
                stars: 4.5,
                counts: 1153
            },
            price: 2250
        },
        
     
      
        {
          id: "e43638ce-6aa0-4b85-b27f-e1d07eb678cc6",
          imageUrl: "./products/athletic-cotton-socks-6-pairs.jpg",
          name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
          rating: {
            stars: 4.5,
            counts: 87
          },
          price: 1090,
          keywords: [
            "socks",
            "sports",
            "apparel"
          ]
        },
        {
          id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          imageUrl: "./products/intermediate-composite-basketball.jpg",
          name: "Intermediate Size Basketball",
          rating: {
            stars: 4,
            counts: 127
          },
          price: 2095,
          keywords: [
            "sports",
            "basketballs"
          ]
        },
        {
          id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
          imageUrl: "./products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
          name: "Adults Plain Cotton T-Shirt - 2 Pack",
          rating: {
            stars: 4.5,
            counts: 56
          },
          price: 799,
          keywords: [
            "tshirts",
            "apparel",
            "mens"
          ],
          type: "clothing",
          sizeChartLink: "images/clothing-size-chart.png"
        },
        {
          id: "54e0eccd-8f36-462b-b68a-8182611d9add",
          imageUrl: "./products/black-2-slot-toaster.jpg",
          name: "2 Slot Toaster - Black",
          rating: {
            stars: 5,
            counts: 2197
          },
          price: 1899,
          keywords: [
            "toaster",
            "kitchen",
            "appliances"
          ]
        },
        {
          id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
          imageUrl: "./products/6-piece-white-dinner-plate-set.jpg",
          name: "6 Piece White Dinner Plate Set",
          rating: {
            stars: 4,
            counts: 37
          },
          price: 2067,
          keywords: [
            "plates",
            "kitchen",
            "dining"
          ]
        },
        {
          id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
          imageUrl: "./products/6-piece-non-stick-baking-set.webp",
          name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
          rating: {
            stars: 4.5,
            counts: 175
          },
          price: 3499,
          keywords: [
            "kitchen",
            "cookware"
          ]
        },
        {
          id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
          imageUrl: "./products/plain-hooded-fleece-sweatshirt-yellow.jpg",
          name: "Plain Hooded Fleece Sweatshirt",
          rating: {
            stars: 4.5,
            counts: 317
          },
          price: 2400,
          keywords: [
            "hoodies",
            "sweaters",
            "apparel"
          ]
        },
        {
          id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
          imageUrl: "./products/luxury-tower-set-6-piece.jpg",
          name: "Luxury Towel Set - Graphite Gray",
          rating: {
            stars: 4.5,
            counts: 144
          },
          price: 3599,
          keywords: [
            "bathroom",
            "washroom",
            "restroom",
            "towels",
            "bath towels"
          ]
        },
        {
          id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
          imageUrl: "./products/liquid-laundry-detergent-plain.jpg",
          name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
          rating: {
            stars: 4.5,
            counts: 305
          },
          price: 2899,
          keywords: [
            "bathroom",
            "cleaning"
          ]
        },
        {
          id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
          imageUrl: "./products/knit-athletic-sneakers-gray.jpg",
          name: "Waterproof Knit Athletic Sneakers - Gray",
          rating: {
            stars: 4,
            counts: 89
          },
          price: 3390,
          keywords: [
            "shoes",
            "running shoes",
            "footwear"
          ]
        },
        {
          id: "5968897c-4d27-4872-89f6-5bcb052746d7",
          imageUrl: "./products/women-chiffon-beachwear-coverup-black.jpg",
          name: "Women's Chiffon Beachwear Cover Up - Black",
          rating: {
            stars: 4.5,
            counts: 235
          },
          price: 2070,
          keywords: [
            "robe",
            "swimsuit",
            "swimming",
            "bathing",
            "apparel"
          ],
          type: "clothing",
          sizeChartLink: "images/clothing-size-chart.png"
        },
        {
          id: "aad29d11-ea98-41ee-9285-b916638cac4a",
          imageUrl: "./products/round-sunglasses-black.jpg",
          name: "Round Sunglasses",
          rating: {
            stars: 4.5,
            counts: 30
          },
          price: 1560,
          keywords: [
            "accessories",
            "shades"
          ]
        },
       
        {
          id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
          imageUrl: "./products/knit-athletic-sneakers-pink.webp",
          name: "Waterproof Knit Athletic Sneakers - Pink",
          rating: {
            stars: 4,
            counts: 89
          },
          price: 3390,
          keywords: [
            "shoes",
            "running shoes",
            "footwear",
            "womens"
          ]
        },
        {
          id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
          imageUrl: "./products/countertop-blender-64-oz.jpg",
          name: "countsertop Blender - 64oz, 1400 Watts",
          rating: {
            stars: 4,
            counts: 3
          },
          price: 10747,
          keywords: [
            "food blenders",
            "kitchen",
            "appliances"
          ]
        },
        {
          id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
          imageUrl: "./products/floral-mixing-bowl-set.jpg",
          name: "10-Piece Mixing Bowl Set with Lids - Floral",
          rating: {
            stars: 5,
            counts: 679
          },
          price: 3899,
          keywords: [
            "mixing bowls",
            "baking",
            "cookware",
            "kitchen"
          ]
        },
   
      ].map((productdetails)=>{
        productdetails.price = Math.round(productdetails.price * 0.5);

        if( productdetails.type== 'clothing'){
          return new Clothing(productdetails);
        }
        return new Product(productdetails);
      });




export const fetchProducts = async () => {
  try {
      const response = await fetch('https://supersimplebackend.dev/products');
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const products = await response.json(); // Fetch and parse JSON data

      // Map through fetched products and create instances of Clothing or Product
      return products.map((productDetails) => {
          if (productDetails.type === 'clothing') {
              return new Clothing(productDetails);
          }
          return new Product(productDetails);
      }); 

  } catch (error) {
      console.error('Error fetching product:', error);
  }
}

// fetchproduct will return you promice and you have to use promise go get data
// fetchProducts()     
//     .then(products => console.log(products))
//     .catch(error => console.error('Error:', error));

 
// METHOD-2  for fatching and doing console with mapping
// Define async function to fetch and map products
// const fetchProducts = async () => {
//     try {
//         const response = await fetch('https://supersimplebackend.dev/products');
//         const products = await response.json();

//         // Map through fetched products and create instances of Clothing or Product
//         return products.map((productDetails) => {
//             if (productDetails.type === 'clothing') {
//                 return new Clothing(productDetails);
//             }
//             return new Product(productDetails);
//         });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         return []; // Return an empty array in case of error
//     }
// };

// // Call async function and handle result
// const handleProducts = async () => {
//     try {
//         const products = await fetchProducts();
//         console.log(products); // Logs the mapped array with class instances
//     } catch (error) {
//         console.error('Error handling products:', error);
//     }
// };

// handleProducts();


// const fetchProducts = async () => {
//   try {
//       const response = await fetch('https://supersimplebackend.dev/products');
//       if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const products = await response.json(); // Fetch and parse JSON data

//       // Map through fetched products and create instances of Clothing or Product
//       return products.map((productDetails) => {
//           if (productDetails.type === 'clothing') {
//               return new Clothing(productDetails);
//           }
//           return new Product(productDetails);
//       });
//   } catch (error) {
//       console.error('Error fetching product:', error);
//       return []; // Return an empty array in case of error
//   }
// };


