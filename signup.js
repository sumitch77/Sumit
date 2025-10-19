let create = document.querySelector("#login1");
let name1 = document.querySelector("#username");
let pass1 = document.querySelector("#password");
let name1="";
let pass1="";
create.addEventListener("click", (e) =>{
    e.preventDefault();
    if(name1==="" && pass1===""){
        
    }
    else{
  localStorage.setItem("username", name1.value);
localStorage.setItem("password", pass1.value);
window.location.href="indexm.html";  
    }
});