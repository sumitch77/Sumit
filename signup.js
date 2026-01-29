let create = document.querySelector("#login1");
let name1 = document.querySelector("#username");
let pass1 = document.querySelector("#password");
let number = document.querySelector("#phone");
let email = document.querySelector("#email");

let wrong= document.querySelector("#wrong");

create.addEventListener("click", (e) =>{
  
    e.preventDefault();
  let a =number.value;
  let b = a.length;
    if(name1.value==="" || name1.value.length<5){
      wrong.style.display="block";
      setTimeout(()=>{
        wrong.style.display="none";
      
      },4000);
      return;
    }
  else if(pass1.value==="" || pass1.value.length<8){
    wrong.innerText="Create a Valid Password (At least 8 digits)"
      wrong.style.display="block";
      setTimeout(()=>{
        wrong.style.display="none";
      
      },4000);
      return;
    
    }
  
  else if(email.value==="" || email.value.length<10){
    wrong.innerText="Enter valid Email"
      wrong.style.display="block";
      setTimeout(()=>{
        wrong.style.display="none";
      
      },4000);
      return;
    }
  
  else if(number.value==="" || b<10 || b>10){
    wrong.innerText="Enter valid phone number"
      wrong.style.display="block";
      setTimeout(()=>{
        wrong.style.display="none";
      
      },4000);
      return;
    }
  localStorage.setItem("username", name1.value);      
localStorage.setItem("password", pass1.value);
window.location.href="mainf.html";  
  
});