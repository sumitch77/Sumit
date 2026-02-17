
const but = document.querySelector("#but");
const img = document.querySelector("#img");
const gallery = document.getElementById("photo");
const inp = document.getElementById("inp");
const model = document.querySelector("#imageModal");
const fullimg = document.querySelector("#fullm");
const imgall = document.querySelectorAll(".newimg");
const close = document.querySelector("#clo");
    const erro = document.querySelector("#err");
        
let userinp = "";
but.addEventListener('click',async ()=>{
   // but.disabled = true;
    but.style.opacity = 0.7;
    userinp = inp.value;
    
    let newdata = await call();
    displayImages(newdata.results);
   
    
    
});


async function call (){
    
return await fetch(`https://api.unsplash.com/search/photos?page=1&query=${userinp}&order_by=relevant
&per_page=30&client_id=q9mg6K13E89Pl1MAR0jS4um5B1jOH93A1gW1xohiKjg`)
     .then(data => {
      return data.json();
    })
    .catch(error => {
      err.innerText = "Unable to get Images";
    });
}
    


function displayImages(newdata) {
    
    gallery.innerHTML = "";

    newdata.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.urls.regular;
        img.alt = photo.alt_description || "Unsplash Image";
        img.classList.add("newimg");
        err.innerText = "";
        gallery.appendChild(img);
        
    
    img.addEventListener("click",()=>{
     model.style.display = "block";
        
        fullimg.src = img.src;
    
});
        close.addEventListener("click",()=>{
          model.style.display = "none";
            
        });
        
        
    });
}

