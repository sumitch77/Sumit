let operator = document.querySelectorAll(".operator");
let disp = document.querySelector("#display");
let dot = document.querySelector("#dot");
let nums= document.querySelectorAll(".num");


    function appendValue(value) {
      document.getElementById("display").value += value;
    }
  function onevalue(){
    document.getElementById("display").value = document.getElementById("display").value.slice(0,-1);
  }

    function clearDisplay() {
      document.getElementById("display").value = "";
    }

    function calculate() {
      try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
      } catch {
        document.getElementById("display").value = "Error";
        
      }
    }

    let a = "";
let b = "gc";

nums.forEach(num=>{
    
    num.addEventListener("click",()=>{
      disp.value+=num.value;
      a +=num.value;
      
    });
  
});

operator.forEach(ops=>{
    if(disp.value===""){
      return;
    }
    ops.addEventListener("click",()=>{
      
      if(a!==""){
        
    disp.value+=ops.value;
        
      }
      a ="";
      b="cb";
});
    
});

dot.addEventListener("click",()=>{
  if(b!==""){
  
  disp.value += dot.value;
  }
  b="";
});
