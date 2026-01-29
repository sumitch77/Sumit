let name = document.querySelector("#username");          
let pass = document.querySelector("#password");
let submit = document.querySelector("#login");
 let wrong = document.querySelector("#wrong");


submit.addEventListener("click",(e)=>{
    e.preventDefault();
  
  let nuser= localStorage.getItem("username");
  let npass = localStorage.getItem("password");
    let a = name.value;
    let b= pass.value;
    
    if(a==="Sumit" && b==="6969"){
    
  localStorage.setItem("username",name.value);
    localStorage.setItem("password",pass.value);
        window.location.href="mainf.html";
    }
  
  
  else if(nuser===a && npass===b){
    
    window.location.href="indexm.html";
  }
  
  
    else{
   /* let c= localStorage.getItem("username");
        let d = localStorage.getItem("password");
        if (c==="" && d===""){
          name.value="";
          pass.value=""; }*/
          wrong.style.display="block";
        }
  
});


let create = document.querySelector("#create");

create.addEventListener("click" , ()=>{
  window.location.href="signup.html";
  
}); 