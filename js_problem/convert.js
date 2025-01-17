const inchToFet=(inch)=>{
    const feet=inch/12;
    const feetNumber=parseInt(feet);
    const remaingInch=inch%12;
    const result=feetNumber+" fit "+ remaingInch+' inch '
    return result;
}
const yourHight=inchToFet(75);
console.log("your height is :",yourHight)