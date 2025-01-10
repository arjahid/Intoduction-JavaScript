const catageory='student';
const regularticket=800;
let ticket;
if(catageory==='child'){
    ticket=0;
    console.log(ticket)
}
else{
    if(catageory==='student'){
        ticket=regularticket*50/100;
        console.log(ticket)
    }
    else{
        if(catageory==='senior'){
            ticket=regularticket*15/100;
            console.log(ticket)
        }
        else{
            if(catageory==='regular'){
                console.log(regularticket);
            }
        }
        
    }
}