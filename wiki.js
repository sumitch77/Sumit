let ques = document.querySelector("#ques");        
let but = document.querySelector("#get");        
let answer = document.querySelector("#answer");        
let answer2 = document.querySelector("#answer2");        


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
    
    
    
but.addEventListener("click", () => {
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

        heading(title);
    });
}); 