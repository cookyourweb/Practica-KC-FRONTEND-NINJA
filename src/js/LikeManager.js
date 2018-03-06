const $ = require("jquery");

export default class LikeManager{
    init(){
        console.log("Like cargado");           
        $(document).ready(function(){
            $("img").click(function(){
                console.log("Like");
                if(typeof(Storage) !== "undefined") {            
                    localStorage.like = 1;        
                    $("space-like").find("ui-status.me-gusta").removeClass(".me-gusta").addClass("me-gusta-si");
                }else{
                    console.log("Error usando WebStorage");
                }
                
            });
        });
    }

    findlike(){
        if(typeof(Storage) !== "undefined") {  
            if (localStorage.like) {
               $("space-like").find("ui-status.me-gusta").removeClass(".me-gusta").addClass("me-gusta-si");
            }
        }else{
                console.log("Error usando WebStorage");
        }
    }
}

/*function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}*/