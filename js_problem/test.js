const matchProduct = (products, search) => {
  const match = [];
  for (let product of products) {
    if (product.name.toLowerCase().includes(search)) match.push(product);
  }
  return match;
};
const products = [
  { id: 1, name: "waltop phone", price: 19000 },
  { id: 2, name: "xiami ", price: 19000 },
  { id: 3, name: "iphone phone", price: 119000 },
  { id: 4, name: "samsung ", price: 67000 },
  { id: 5, name: "lenvo ", price: 29000 },
  { id: 6, name: "vivo phone", price: 29000 },
  { id: 7, name: "symphony phone", price: 49000 },
];
const result = matchProduct(products, "phone");
console.log(result);
