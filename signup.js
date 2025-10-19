let create = document.querySelector("#login1");
let name1 = document.querySelector("#username");
let pass1 = document.querySelector("#password");

create.addEventListener("click", (e) =>{
    e.preventDefault();
  localStorage.setItem("username", name1.value);
localStorage.setItem("password", pass1.value);
window.location.href="indexm.html";  
    
});