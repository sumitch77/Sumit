let create = document.querySelector("#login1");
let name1 = document.querySelector("#username");
let pass1 = document.querySelector("#password");
let wrong= document.querySelector("#wrong");

create.addEventListener("click", (e) =>{
    e.preventDefault();
    if(name1.value==="" ||  pass1.value===""){
      wrong.style.display="block";
      return;
    }
  localStorage.setItem("username", name1.value);
localStorage.setItem("password", pass1.value);
window.location.href="indexm.html";  
    
});