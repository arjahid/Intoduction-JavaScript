const make_avg=(number)=>{
   let sum=0;
    let avg=0; 
    
    for(let num of number){
        sum=sum +num;
         avg=sum/num;
    }
    let size=number.length;
    return {size,sum,avg};
    

}
let value=[1,2,3,4,5,6]
const result=make_avg(value)
console.log("size of array",result.size)
console.log("sum of array",result.sum)
console.log("avg of array",result.avg)
// console.log("sum is:",sum)
