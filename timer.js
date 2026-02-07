let flex = document.querySelector("#flexb");    
let hour = document.querySelector("#hour");    
let min = document.querySelector("#min");    
let sec = document.querySelector("#sec");    
let start = document.querySelector("#start");    
let hide = document.querySelector("#hide");    
let submit = document.querySelector("#submit");    
let result = document.querySelector("#res");    
let ans = document.querySelector("#ans");
let dis = document.querySelectorAll(".dis");
let replay = document.querySelector("#replay");


result.style.display= "none";
replay.style.display= "none";

 let hour1 = 0;
 let min1 = 02;
 let sec1 = 60;
let a = hour1;
let b = min1;
let c = sec1;
let run = true;
start.addEventListener("click", async () => {
  running = true;

  start.style.display = "none";
  hide.style.display = "block";

  while (running) {

    // ⛔ TIME OVER CONDITION
    if (
      Number(hour.innerText) === 0 &&
      Number(min.innerText) === 0 &&
      Number(sec.innerText) === 0
    ) {
      running = false;
      break;
      dis.forEach(diss => {
  diss.disabled = true;
  
  });
      
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    // countdown logic
    let s = Number(sec.innerText);
    let m = Number(min.innerText);
    let h = Number(hour.innerText);

    s--;

    if (s < 0) {
      s = 59;
      m--;
    }
    if (m < 0) {
      m = 59;
      h--;
    }

    sec.innerText = String(s).padStart(2, "0");
    min.innerText = String(m).padStart(2, "0");
    hour.innerText = String(h).padStart(2, "0");
  }

  // 🔔 TIME OVER CLEANUP
  dis.forEach(diss => {
  diss.disabled = true;
  
  })
  subm();
  result.style.display = "none";
  replay.style.display= "block";

  showresult();
});

  
  let score = 0;

function subm(){
  dis.forEach(diss => {
  diss.disabled = true;
  
  });
  
  submit.style.display="none";
  flex.style.display="none";
  res.style.display="block";
  hour.innerText=0;
  min.innerText=0;
  sec.innerText=0;
  const selected = document.querySelector('input[name="one"]:checked');    
const selected2 = document.querySelector('input[name="two"]:checked');  
const selected3 = document.querySelector('input[name="three"]:checked');    
const selected4 = document.querySelector('input[name="four"]:checked');  
const selected5 = document.querySelector('input[name="five"]:checked');    
const selected6 = document.querySelector('input[name="six"]:checked');  

const selected7 = document.querySelector('input[name="seven"]:checked');    
const selected8 = document.querySelector('input[name="eight"]:checked');  
const selected9 = document.querySelector('input[name="nine"]:checked');    
const selected10 = document.querySelector('input[name="ten"]:checked');  

  if(selected.value === "raj"){
    score+=1;
  }if(selected2.value === "up"){
    score+=1;
  }
  if(Number(selected3.value) === 7){
    score+=1;
  }if(selected4.value === "asia"){
    score+=1;
  }if(Number(selected5.value) === 7){
    score+=1;
  }
  if(Number(selected6.value) === 11){
    score+=1;
  }
  if(selected7.value === "mumbai"){
    score+=1;
  }
if(Number(selected8.value) === 3){
    score+=1;
  }if(Number(selected9.value) == 1950){
    score+=1;
  }if(Number(selected10.value) == 1949){
    score+=1;
  }
  
}

submit.addEventListener("click" , ()=>{
  
subm();
});

function showresult(){
  ans.innerText = `Your Score is ${score}/10`;
}

result.addEventListener("click",()=>{
  showresult();
  replay.style.display= "block";
});

replay.addEventListener("click",()=>{
  location.reload();
});