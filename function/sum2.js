const sumOfnumber=(number)=>{
    let sum=0;
    for(let num of number){
        if(num%2===0){
            sum=sum +num;
        }
    }
    return sum;

}
// const value=[1,2,3,4];
// const result=sumOfnumber(value);
// console.log(result)
console.log(sumOfnumber([1,2,3,4]));