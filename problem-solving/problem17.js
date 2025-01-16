const count_zero=(number)=>{
    let count1=0;//2
    let count2=0;
    for(let num of number){
        if(num ===0){
            count1 ++;
            
        }else if(num ===1){
            count2 ++;
        }
    }
    return {count1,count2};

}
const value=[1,0,1,0,0,0,1,1,1]
const result=count_zero(value)
console.log(result.count1) 
console.log(result.count2) 