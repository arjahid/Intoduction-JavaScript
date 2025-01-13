let x=81,y=206,sum1=0,sum2=0;
while(x<=131 && y<=311){
    if(x%2==1){
        console.log("odd number:",x);
        sum1=sum1+x;
        console.log("sum of odd is:",sum1);
    }
    if(y%2==0){
        console.log("even number :",y);
        sum2=sum2+y;
        console.log("sum of even number",sum2);
    }
    x++;
    y++;
}