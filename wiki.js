let ques = document.querySelector("#ques");        
let but = document.querySelector("#get");        
let answer = document.querySelector("#answer");        
let answer2 = document.querySelector("#answer2");        
let but2 = document.querySelector("#get2");        
let answer3 = document.querySelector("#answer3");        
let addimg = document.querySelector("#addimg");        

but2.style.display = "none";
but2.disabled = true;

let quesv = "";
let userInput = "";
let user = "";
function heading(title) {
  const encodedTitle = encodeURIComponent(title);

  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodedTitle}`)
    .then(res => res.json())
    .then(data => {
      answer2.innerText = data.extract;
    });
}
    
function fetchImage(title) {
  const newTitle = encodeURIComponent(title);


  fetch(
    `https://en.wikipedia.org/w/api.php?action=query&titles=${newTitle}&prop=pageimages&piprop=original&format=json&origin=*`
  )
    .then(res => res.json())
    .then(data => {
      const page = Object.values(data.query.pages)[0];

      if (!page.original) {
        answer3.innerText = "No image found";
        return;
      }

      addimg.src = page.original.source;
    });
}
    
let img = "";

let main = "";
    
but.addEventListener("click", () => {
  but.disabled = true;
  setTimeout(()=>{
    but.disabled = false;
  },5000);
  main = ques.value.toLowerCase();
  if(main.includes("sumit")){
    answer.innerText = "Invalid Question";
    return;
  }
  if(main.includes("ched")){
    answer.innerText = "Invalid Question";
    return;
  }
  if(main.includes("ozone")){
    answer.innerText = "Invalid Question";
    return;
  }
  console.log(main);
    userInput = ques.value.trim();
    if (!userInput) return;
  
    user = encodeURIComponent(userInput);
    fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${user}&format=json&origin=*`
    )
    .then(res => res.json())
    .then(data => {
        const results = data.query.search;

        if (!results.length) {
            answer.innerText = "Your question is not valid!"
            return;
        }

        const title = results[0].title;
        answer.innerText=title;
      img = title;

        heading(title);
      but2.style.display = "block";
but2.disabled = false;
    });
}); 

but2.addEventListener("click", () => {
  but.disabled = true;
  setTimeout(()=>{
    but.disabled = false;
  },5000)
  fetchImage(img); 
});