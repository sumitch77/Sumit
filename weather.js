const city = document.querySelector("#city");           
const getlo = document.querySelector("#getlo");           
const auto = document.querySelector("#auto");


const cit = document.querySelector("#cit");
const coun = document.querySelector("#country");

const temc = document.querySelector("#temc");           
const temf = document.querySelector("#temf");  

const atmos = document.querySelector("#atmosphere");
const humid = document.querySelector("#humid");
const airq = document.querySelector("#airq");
const wind = document.querySelector("#wind");
const time = document.querySelector("#time");
const allda = document.querySelector("#alldata");

const man = document.querySelector("#man");
const ent = document.querySelector("#ent");
const nok = document.querySelector("#nok");



async function call(city1){
    
  const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=f515a9d61eaa4a5699534114262301&q=${city1}&aqi=yes`);
    
    return data.json();
}
async function call2(a, b){
    
    const da = await fetch(`https://api.weatherapi.com/v1/current.json?key=f515a9d61eaa4a5699534114262301&q=${a},${b}&aqi=yes`);
    
    return da.json();
}

function fail(){
    cit.innerText = "Please allow Location OR type your city manually"
}
async function pass(position){
    
  const aa =  position.coords.latitude;
 const  bb =  position.coords.longitude;
    let result = await call2(aa,bb)
    cit.innerText = "Your city : "+ result.location.name;
    coun.innerText = "your country : "+ result.location.country;
    time.innerText = "local time  :" + result.location.localtime;
    temc.innerText = "Temperature in °C : " + result.current.temp_c + "°C";
    temf.innerText= "Temperature in °F : " + result.current.temp_f + "°F";
    atmos.innerText = "Atmosohere : "+ result.current.condition.text ;
    
    airq.innerText = "Air quality index (pm 2.5) : " + result.current.air_quality.pm2_5;
    humid.innerText = "Humidity : " + result.current.humidity;
    wind.innerText = "Wind speed in Km/ph : " + result.current.wind_kph;
    
    
}


auto.addEventListener("click",async()=>{
navigator.geolocation.getCurrentPosition(pass,fail);
    
});
let city2 = "";
getlo.addEventListener("click",async()=>{
    
    city2 = city.value;
    if(city.value ==="delhi"||city.value ==="Delhi"|| city.value === "DELHI"){
        city2 = "new delhi";
    }
    else{
        city2 = city.value;
    }
    
    try {
    let result = await call(city2);
    cit.innerText = "Your city : "+ result.location.name;
    coun.innerText = "your country : "+ result.location.country;
    time.innerText = "local time  :" + result.location.localtime;
    temc.innerText = "Temperature in °C : " + result.current.temp_c + "°C";
    temf.innerText= "Temperature in °F : " + result.current.temp_f + "°F";
    atmos.innerText = "Atmosohere : "+ result.current.condition.text ;
    
    airq.innerText = "Air quality index (pm 2.5) : " + result.current.air_quality.pm2_5;
    humid.innerText = "Humidity : " + result.current.humidity + "%";
    wind.innerText = "Wind speed in Km/ph : " + result.current.wind_kph + "Km/h";
    } catch (e){
        cit.innerText = "please check your city spelling or use our automatic live location option ";
    }
});


man.addEventListener("click",()=>{
  city.style.display = "block";
  getlo.style.display= "block";
  ent.style.display = "block";
  nok.style.display = "none";
  man.style.display = "none";
  
  
  
});