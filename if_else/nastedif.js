const age=25;
const price=500;
var discount;
var payable;
if(age<=12){
    console.log("You can eat free");
}
else if(age>=60){
    discount=price *50/100;
    payable=price-discount;

    console.log("You got 50% diuscount")
    console.log(payable);
}
else if(age>50){
    discount=price *25/100;
    payable=price-discount;
    console.log("you got 25% discount")
    console.log(payable)
}
else{
    console.log(price)
}