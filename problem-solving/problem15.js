const numOf=(number)=>{
    
    for(let num of number){
        if(num%2===1){
            return num*2;
        }else{
            return num/2;
        }
    }
    

}
const value=[4];

console.log("result is :",numOf(value))