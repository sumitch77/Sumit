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
let goto2 = document.querySelector("#goto2"); 

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
        sessionStorage.setItem("finaluserrun",a);                        
        let finalcomprun = sessionStorage.getItem("finalcomputerrun");
        if(finalcomprun===null){
            goto.style.display ="block";
        msg.innerText = "OUT";
        play.style.display ="none";
        return;
        }
        if(finalcomprun!== null){
           if(Number(finalcomprun) === a){
               
               msg.innerHTML = `<p> your score is ${a} <br> computer score is ${finalcomprun} <br> Draw`;     
           }    
           if(Number(finalcomprun) > a){
               msg.innerHTML = `<p> your score is ${a} <br> computer score is ${finalcomprun} <br> Computer Win`;
           }
           
            if(Number(finalcomprun) < a){
               msg.innerHTML = `<p> your score is ${a} <br> computer score is ${finalcomprun} <br> You win`;           
           }
            
            goto2.style.display = "block"
            return;
        }
        
    }
    
    a+=corrun;
    score.innerText =a;
    
})


