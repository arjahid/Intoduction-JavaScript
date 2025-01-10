const height=175/100;

const weight=80;
const bmi=(weight/(height*height));

const bmiRounded = bmi.toFixed(2);
console.log(`your bmi is:${bmiRounded}`)
if(bmi<18.5){
    console.log("you are unweighted")
}
else{
    if(bmi>=18.5 && bmi<=24.5){
        console.log("you are normal")
    }
    else {
        if(bmi>=25 && bmi<=29.5){
            console.log("you are overweight")

        }
        else{
            console.log("you are obses")
        }
    }
}