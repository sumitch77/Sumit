

const search = document.querySelector("#search");
const but = document.querySelector("#but");
const container = document.querySelector("#output");
const fooditem = document.querySelectorAll(".fooditem");
const country = document.querySelectorAll(".country");
const erro= document.querySelector("#err");

let query = "dosa";
let newid = "";
async function apicall(){
  try{
  let data =  await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=03f291068c814511b3195e55975fecd4`)
    if (data.results.length === 0) {
    erro.innerText = "Some error occured in fetching the data.\n please try again with internet connection";
    return;
}
    let newda = await data.json();
    return newda;
  }catch(err){
    erro.innerText = "Some error occured in fetching the data.\n please try again with internet connection";
    return;
  }
    
}
async function apicall2(){
  let data =  await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${newid}&number=10&apiKey=03f291068c814511b3195e55975fecd4`)
    let newda = await data.json();
    return newda;
}
async function apicall3(){
  let data =  await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${newco}&number=10&apiKey=03f291068c814511b3195e55975fecd4`)
    let newda = await data.json();
    return newda;
}

but.addEventListener("click",async ()=>{
    
    query = search.value;
    let newdata = await apicall();
    let finaldata = JSON.stringify(newdata);
    go(finaldata);
    
});

function go(godata){
  
  data = JSON.parse(godata)
  container.innerHTML = ""; 
  
  data.results.forEach((meal) => {
    let mealCard = document.createElement("div");
    mealCard.className = "meal-card";

    mealCard.innerHTML = `
        <img class="allphoto" src="${meal.image}" alt="${meal.title}" style="width:50%; cursor:pointer;">
        <div class="card-header1">
          <h2>${meal.title}</h2>
        </div>
    `;

    
    mealCard.querySelector("img").addEventListener("click", () => {
      fetchRecipeDetails(meal.id);
    });

    container.appendChild(mealCard);
  });
}

async function fetchRecipeDetails(id) {
  
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=03f291068c814511b3195e55975fecd4`);
  const meal = await response.json();

  displayFullRecipe(meal);
}

function displayFullRecipe(meal) {
  
  let ingredientsHTML = meal.extendedIngredients
    .map(ing => `<li class="ingredient-item"><strong>${ing.amount} ${ing.unit}</strong> ${ing.name}</li>`)
    .join("");

  container.innerHTML = `
    <button onclick="location.reload()" id="but2" style="margin-bottom: 20px;">Close</button>
    <br><br>
    <img src="${meal.image}" alt="${meal.title}" style="width:50%">
    <div class="card-header">
      <h2 class="instructions>${meal.title}</h2>
      <span class="badge">Ready in ${meal.readyInMinutes} mins</span>
    </div>
    <div class="card-body">
      <h3 id="newhead">Ingredients</h3>
  <br>
      <ul class="ingredient-list">${ingredientsHTML}</ul>
      <hr><br>
      <h3 id ="newhead2">Instructions</h3>
  <br>
      <div class="instructions">${meal.instructions || "No instructions provided."}</div>
    </div>
  `;
}

fooditem.forEach((item)=>{
  item.addEventListener("click",async()=>{
  
  newid = item.id;
  let newdata = await apicall2();
    let finaldata = JSON.stringify(newdata);
    go(finaldata);
  });
});

country.forEach((item)=>{
  item.addEventListener("click",async()=>{
  
  newid = item.id;
  let newdata = await apicall2();
    let finaldata = JSON.stringify(newdata);
    go(finaldata);
  });
});
