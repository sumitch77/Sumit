let one = document.querySelector("#one");       
let two = document.querySelector("#two");
let three = document.querySelector("#three"); 

let four = document.querySelector("#four");       
let five = document.querySelector("#five");       
let six = document.querySelector("#six"); 

let score = document.querySelector("#score");       
let play = document.querySelector("#play"); 
let msg = document.querySelector("#msg"); 
let goto = document.querySelector("#goto"); 
let complay = document.querySelector("#complay"); 
let userplay = document.querySelector("#userplay"); 

let corrun = 0;

let crun = ()=>{
    let num = Math.floor((Math.random()*6)+1);
   return num;
    
};

one.addEventListener("click",()=>{
    one.style.border = "2px solid black";
    two.style.border = "";
    three.style.border = "";
    four.style.border = "";
    five.style.border = "";
    six.style.border = "";
    corrun=1;
    
});
two.addEventListener("click",()=>{
    one.style.border = "";
    two.style.border = "2px solid black";
    three.style.border = "";
    four.style.border = "";
    five.style.border = "";
    six.style.border = "";
    corrun=2;
    
});
three.addEventListener("click",()=>{
    one.style.border = "";
    two.style.border = "";
    three.style.border = "2px solid black";
    four.style.border = "";
    five.style.border = "";
    six.style.border = "";
    corrun=3
});
four.addEventListener("click",()=>{
    one.style.border = "";
    two.style.border = "";
    three.style.border = "";
    four.style.border = "2px solid black";
    five.style.border = "";
    six.style.border = "";
    corrun=4;
    
});
five.addEventListener("click",()=>{
    one.style.border = "";
    two.style.border = "";
    three.style.border = "";
    four.style.border = "";
    five.style.border = "2px solid black";
    six.style.border = "";
    corrun=5;
    
});
six.addEventListener("click",()=>{
    one.style.border = "";
    two.style.border = "";
    three.style.border = "";
    four.style.border = "";
    five.style.border = "";
    six.style.border = "2px solid black";
    corrun=6;
    
});
let compusc = 0;
let a =0;

play.addEventListener("click",()=>{
    compusc = crun();
    complay.innerText = compusc;
    userplay.innerText = corrun;
    if(compusc === corrun){
        sessionStorage.setItem("finalcomputrrun",a);
        let finaluserrun = sessionStorage.getItem("finaluserrun"); 
        if(finaluserrun===null){
            goto.style.display ="block";
        msg.innerText = "OUT";
        play.style.display ="none";
        return;
        }
         if(finaluserrun!== null){
           if(Number(finaluserrun)=== a){
               
               msg.innerHTML = `<p> computer score is ${a} <br> your score is ${finaluserrun} <br> Draw`;
           }    
             
           if(Number(finaluserrun) > a){
               msg.innerHTML = `<p> computer score is ${a} <br> your score is ${finaluserrun} <br> You win`;
           }    
           
            if(Number(finaluserrun )< a){
                msg.innerHTML = `<p> computer score is ${a} <br> Your score is ${finaluserrun} <br> Computer win`;
           }
            goto2.style.display = "block"
            return;
        }        
        
    }
    
    a+=compusc;
    score.innerText =a;
    
});




