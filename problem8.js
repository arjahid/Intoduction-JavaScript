const amarScore=78;
const friendScore=92;
if(amarScore>80){
    if(friendScore>amarScore){
        console.log("lets go to lunch")
    }
    else {
        if(friendScore<80 && friendScore>=60){
            console.log("good luck")
        }
        else {
            if(friendScore<60 && friendScore>=40){
                console.log("unseen friend message")
            }
            else{
                if(friendScore<40){
                    console.log("Block account")
                }
            
            }
        }
    }
}
else{
    console.log("I am sad bro")
}