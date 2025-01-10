const price = 3200;
if (price >= 5000) {
  const discount = (price * 10) / 100;
  const payable = price - discount;
  console.log("got 10%");
  console.log(payable);
} else if (price >= 4000 && price < 5000) {
  discount = (price * 7) / 100;
  payable = price - discount;
  console.log("you go 7%");
  console.log(payable);
} else if (price >= 3000 && price < 4000) {
  discount = (price * 4) / 100;
  payable = price - discount;
  console.log("you go 4%");
  console.log(payable);
} else {
  console.log(price);
}
