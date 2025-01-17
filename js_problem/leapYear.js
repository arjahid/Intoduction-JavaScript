const isLeapYear=(year)=>{
    if(year % 4===0){
        return true;
    }else if(year % 100===0) {
        return true;
    }else if(year % 400===0){
        return true;
    }else{
        return false;
    }
}
const year=2024;
console.log(year +" is leap year : "+isLeapYear(year))