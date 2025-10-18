let g = document.querySelector("#one");
let r = document.querySelector("#result");
let v = document.querySelector("h1");
let cut = document.querySelector("#cut");
let a = document.querySelectorAll(".num");
let ope = document.querySelectorAll(".ope");
let ans = document.querySelector("#ans");
let all = document.querySelector("#all");
let final = document.querySelector("#final");
let input= document.querySelector("#input"); 

a.forEach(numb => {
   numb.addEventListener("click",() =>{
      numb.style.opacity="0.5";
      setTimeout(() => {
      numb.style.opacity = "1";
    }, 80);
   r.innerText =r.innerText+ numb.innerText;
      
   });
});
ope.forEach(op=>{
   op.addEventListener("click",() =>{
      op.style.opacity = "0.5";
    setTimeout(() => {
      op.style.opacity = "1";
    }, 80);
      r.innerText=r.innerText + op.innerText;
      
   });});

cut.addEventListener("click", () =>{
   r.innerText = r.innerText.slice(0,-1);
   input.value=input.value.slice(0,-1);
   cut.style.opacity="0.5";
      setTimeout(() => {
      cut.style.opacity = "1";
    }, 80);
   
});

ans.addEventListener("click",() =>{
   ans.style.opacity="0.5";
      setTimeout(() => {
      ans.style.opacity = "1";
    }, 80);
   r.innerText=eval(r.innerText);
   
});
all.addEventListener("click",() =>{
   all.style.opacity="0.5";
      setTimeout(() => {
      all.style.opacity = "1";
    }, 80);
   r.innerText="";
   input.value="";
   
});

      
let cal= document.querySelector("#calculate");
let show= document.querySelector("#show");

cal.addEventListener("click" ,() =>{
   if(/^[a-zA-Z]+$/.test(input.value)){
      show.innerText=" Error Alphabets Entered"
   }
   
   
   else{
   show.innerText=eval(input.value);
   }
});

