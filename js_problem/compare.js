const value=(number)=>{
   let max=number[0];
    for(let num of number){
        if(num>max){
            max=num;
        }
    }
    
return max;
}
const height=[2,3,1,5,6,4,7,9];
let result=value(height);
console.log(result)