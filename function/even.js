const typeOfnumber=(num)=>{
    const even=[];
    const odd=[];
    for (let nums of num){
        if(nums %2===0){
            even.push(nums);
        }else{
            odd.push(nums)
        }
    }
    return {even,odd}
}
const value=[1,2,3,4,5,6,7,8,9,10];
const  result=typeOfnumber(value);
console.log("even number is",result.even)

console.log("odd number is",result.odd)


