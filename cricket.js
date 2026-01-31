let stone = document.querySelector("#stone");       
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor"); 

let tossb = document.querySelector("#tossbut");       
let tossres = document.querySelector("#tossres");       
let tossout = document.querySelector("#tossout");       

let slec= document.querySelector("#sel");       
let bat = document.querySelector("#bat");       
let bowl = document.querySelector("#bowl");       
let goplay = document.querySelector("#goplay");       

function clear(){
    sessionStorage.clear();
}
clear();
let userch = "";
stone.addEventListener("click",()=>{
    stone.style.border = "2px solid black";
    paper.style.border = "";
    scissor.style.border = "";
    userch = "stone";
    
});
paper.addEventListener("click",()=>{
    stone.style.border = "";
    paper.style.border = "2px solid black";
    scissor.style.border = "";
    userch = "paper";
});
scissor.addEventListener("click",()=>{
    stone.style.border = "";
    paper.style.border = "";
    scissor.style.border = "2px solid black";
    userch = "scissor";
});

let comselect = ()=>{
    let num = Math.floor(Math.random()*3);
    return num;
};

let compwin = 0;
let userwin = 0;

tossb.addEventListener("click",()=>{
    if(userch ===""){
        tossres.innerText = "please select any choice";
        return;
    }
    tossb.style.display="none";
    let num1 = comselect();
    if(num1===0){
        if(userch==="stone"){
            tossres.innerText = "Computer Selected Stone , Draw!";
            tossb.style.display="block";
        }
        else if(userch==="paper"){
            tossres.innerText = "Computer Selected stone , you win!";   
            userwin +=1;
        }
       else if(userch ==="scissor"){
            tossres.innerText = "computer Selected stone , Computer win!";
           compwin+=1;
        }
    }
   else if(num1===1){
        if(userch==="stone"){
            tossres.innerText = "Computer Selected paper , Computer win!";
            compwin+=1;
        }
       else if(userch==="paper"){
            tossres.innerText = "Computer Selected paper , Draw!";  
           tossb.style.display="block";
        }
       else if(userch ==="scissor"){
            tossres.innerText = "computer Selected paper , you win!";
           userwin+=1;
        }
    }
    else if(num1===2){
        if(userch==="stone"){
            tossres.innerText = "Computer Selected scissor , you win!";
            userwin+=1;
        }
       else if(userch==="paper"){
            tossres.innerText = "Computer Selected scissor , computer win!";  
            compwin+=1;
        }
      else if(userch ==="scissor"){
            tossres.innerText = "computer Selected scissor , draw!";
          tossb.style.display="block";
        }
    }
    if(compwin ===1){
        if(num1 ===0 || num1 === 1){
        
        tossout.innerText = "Computer Win and choose to Bat";
            window.location.href = "compcr.html";
        }
       else if(num1 ===2){
        
        tossout.innerText = "Computer Win and choose to Bowl";
           window.location.href = "playcr.html";
        }
    }
    else if ( userwin ===1){
        tossout.innerText = "What you want to choose -";
        slec.style.display = "block";
    }

});
bat.addEventListener("click",()=>{
    window.location.href = "playcr.html";
});
bowl.addEventListener("click",()=>{
    window.location.href = "compcr.html";
});

