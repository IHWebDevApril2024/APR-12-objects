const firstUser = {
  name: "Marina",
  role: "PM",
  likes: ["Chocolate", "Cats"],
};

firstUser.password = "asd342352rewf"; // Add another key/value
firstUser["age"] = 26; // This also works to add another key/value

firstUser["likes"].push("Taylor Swift"); // add a new like, we can use array methds because it's an array

firstUser.role = ["PM", "Psycologist"]; // modify a value

delete firstUser.role;

firstUser.password = null; // We want to keep password but with nothing

delete firstUser.likes[0]; // This is going to leave an empty space there, not recommended

firstUser.likes.splice(0, 1); // To actually delete the element of the array and don't leave an empty space

Object.keys(firstUser);

console.log(Object.keys(firstUser));

console.log(Object.values(firstUser));

const superBigArray = [
  [
    { category: "tech", product: "iPhone X", price: 320 },
    { category: "food", product: "Cheerios", price: 5 },
    { category: "clothing", product: "T-shirt", price: 15 },
    { category: "home", product: "LED Light Bulbs", price: 10 },
    { category: "tech", product: "Smartwatch", price: 199 },
    { category: "food", product: "Avocado", price: 2 },
    { category: "clothing", product: "Jeans", price: 50 },
    { category: "home", product: "Throw Blanket", price: 30 },
  ],
  [
    { category: "food", product: "Snickers", price: 1.5 },
    { category: "tech", product: "Air Pods", price: 129 },
    { category: "clothing", product: "Hoodie", price: 40 },
    { category: "home", product: "Coffee Maker", price: 80 },
    { category: "tech", product: "Smartphone Case", price: 20 },
    { category: "food", product: "Bananas", price: 0.5 },
    { category: "clothing", product: "Sneakers", price: 70 },
    { category: "home", product: "Throw Pillows", price: 25 },
  ],
];

// 4 CATEGORIES: home, clothing, food, tech

const generalArray = superBigArray[0].concat(superBigArray[1]);

console.log(generalArray);

const foodArray = [];
const clothingArray = [];
const techArray = [];
const homeArray = [];

generalArray.forEach(function (product) {
  switch (product.category) {
    case "food":
      delete product.category;
      foodArray.push(product);
      break;
    case "tech":
      delete product.category;
      techArray.push(product);
      break;
    case "home":
      delete product.category;
      homeArray.push(product);
      break;
    case "clothing":
      delete product.category;
      clothingArray.push(product);
      break;
  }

  /* 
    if(product.category === "food" ){
        foodArray.push(product)
    }
    else if(product.category === "home" ){
        homeArray.push(product)
    }
    else if(product.category === "tech" ){
        techArray.push(product)
    }
    else if(product.category === "clothing" ){
        clothingArray.push(product)
    } 
    */
});

console.log(foodArray, clothingArray, techArray, homeArray);

const mallShops = {
  foodShop: foodArray,
  clothesShop: clothingArray,
  techShop: techArray,
  homeShop: homeArray,
};

console.log("FINAL OBJECT: ", mallShops);

console.log(mallShops.foodShop);
console.log(mallShops["clothesShop"]);

for (const shop in mallShops) { // loop in object
  console.log(mallShops[shop]);
}