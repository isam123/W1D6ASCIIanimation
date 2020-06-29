"use strict";
 var counter = 0;
 var ExerAnim;
 var Interval;
 var index;
 let animVal = 250;
var onchangeAnimation =()=> {

    
    let anim =document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[anim];
    

}

const onStart = (e) =>{

    if("start" == e.target.id)
    {
    document.getElementById("start").disabled=true;
    document.getElementById("stop").disabled=false;
    document.getElementById("animation").disabled=true;
    index =document.getElementById("animation").value;
    let anim = document.getElementById("text-area").value = ANIMATIONS[index];
    
         ExerAnim = anim.split("=====\n");
      Interval =  setInterval(animInterval,animVal);
      
    }

    else {
        document.getElementById("animation").disabled=false;
        document.getElementById("start").disabled=false;
        document.getElementById("stop").disabled=true;
        clearInterval(Interval);
        document.getElementById("text-area").value = ANIMATIONS[index]
    }
}


    const animInterval = () =>{
        
        if( counter === ExerAnim.length)
        counter =0;
      
        document.getElementById("text-area").value = ExerAnim[counter];
        counter++;

    }


    const setFont = (e) =>{

        
        if(document.getElementById("text-area").value!="")
        document.getElementById("text-area").style.fontSize = e.target.value+"";
    }
   

    const setTimeInterval = (e) => {

        if(ExerAnim!=undefined) {
                var timing = 0;
        let newAnimInt = document.getElementById("turbo").checked;
        console.log(newAnimInt)
        if(newAnimInt!==true) 
        {
            animVal+=200; clearInterval(Interval);setInterval(animInterval,animVal);
         }
        else {console.log("sdf"); animVal-=200; clearInterval(Interval) ; setInterval(animInterval,animVal) ;}
        }
        
    }





