const result=(num,double)=>{
    if(double){
        return num*2;
    }else{
        return num*3;
    }
}
console.log(result(4,true))
console.log(result(4,false))