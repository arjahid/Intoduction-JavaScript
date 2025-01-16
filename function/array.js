const sumOfnumber=(number)=>{
    let sum=0;
    for(const num of number){
        sum=sum+num;
    }
    return sum;
}
const value=[1,2,3,4,5]
console.log(sumOfnumber(value));