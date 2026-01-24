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

const breakpoints = {
  pm2_5: [
    { cLow: 0,   cHigh: 30,  iLow: 0,   iHigh: 50 },
    { cLow: 31,  cHigh: 60,  iLow: 51,  iHigh: 100 },
    { cLow: 61,  cHigh: 90,  iLow: 101, iHigh: 200 },
    { cLow: 91,  cHigh: 120, iLow: 201, iHigh: 300 },
    { cLow: 121, cHigh: 250, iLow: 301, iHigh: 400 },
    { cLow: 251, cHigh: 500, iLow: 401, iHigh: 500 }
  ],

  pm10: [
    { cLow: 0,   cHigh: 50,  iLow: 0,   iHigh: 50 },
    { cLow: 51,  cHigh: 100, iLow: 51,  iHigh: 100 },
    { cLow: 101, cHigh: 250, iLow: 101, iHigh: 200 },
    { cLow: 251, cHigh: 350, iLow: 201, iHigh: 300 },
    { cLow: 351, cHigh: 430, iLow: 301, iHigh: 400 },
    { cLow: 431, cHigh: 600, iLow: 401, iHigh: 500 }
  ],

  no2: [
    { cLow: 0,   cHigh: 40,  iLow: 0,   iHigh: 50 },
    { cLow: 41,  cHigh: 80,  iLow: 51,  iHigh: 100 },
    { cLow: 81,  cHigh: 180, iLow: 101, iHigh: 200 },
    { cLow: 181, cHigh: 280, iLow: 201, iHigh: 300 },
    { cLow: 281, cHigh: 400, iLow: 301, iHigh: 400 },
    { cLow: 401, cHigh: 1000,iLow: 401, iHigh: 500 }
  ],

  so2: [
    { cLow: 0,   cHigh: 40,  iLow: 0,   iHigh: 50 },
    { cLow: 41,  cHigh: 80,  iLow: 51,  iHigh: 100 },
    { cLow: 81,  cHigh: 380, iLow: 101, iHigh: 200 },
    { cLow: 381, cHigh: 800, iLow: 201, iHigh: 300 },
    { cLow: 801, cHigh: 1600,iLow: 301, iHigh: 400 },
    { cLow: 1601,cHigh: 2000,iLow: 401, iHigh: 500 }
  ],

  o3: [
    { cLow: 0,   cHigh: 50,  iLow: 0,   iHigh: 50 },
    { cLow: 51,  cHigh: 100, iLow: 51,  iHigh: 100 },
    { cLow: 101, cHigh: 168, iLow: 101, iHigh: 200 },
    { cLow: 169, cHigh: 208, iLow: 201, iHigh: 300 },
    { cLow: 209, cHigh: 748, iLow: 301, iHigh: 400 },
    { cLow: 749, cHigh: 1000,iLow: 401, iHigh: 500 }
  ],

  co: [
    { cLow: 0,   cHigh: 1,   iLow: 0,   iHigh: 50 },
    { cLow: 1.1, cHigh: 2,   iLow: 51,  iHigh: 100 },
    { cLow: 2.1, cHigh: 10,  iLow: 101, iHigh: 200 },
    { cLow: 10.1,cHigh: 17,  iLow: 201, iHigh: 300 },
    { cLow: 17.1,cHigh: 34,  iLow: 301, iHigh: 400 },
    { cLow: 34.1,cHigh: 50,  iLow: 401, iHigh: 500 }
  ]
};

function calculateSubIndex(pollutant, concentration) {
  const ranges = breakpoints[pollutant];

  for (const r of ranges) {
    if (concentration >= r.cLow && concentration <= r.cHigh) {
      return (
        ((r.iHigh - r.iLow) / (r.cHigh - r.cLow)) *
        (concentration - r.cLow) +
        r.iLow
      );
    }
  }
  return null; // out of range / invalid
}

function calculate(data) {
  const subIndices = {};

  for (const pollutant in data) {
    if (breakpoints[pollutant]) {
      const val = calculateSubIndex(pollutant, data[pollutant]);
      if (val !== null) subIndices[pollutant] = Math.round(val);
    }
  }

  const finalAQI = Math.max(...Object.values(subIndices));

  return finalAQI;
  
}



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
  let calk = {
  pm2_5:  result.current.air_quality.pm2_5,
  pm10: result.current.air_quality.pm10 ,
  no2: result.current.air_quality.no2,
  so2:  result.current.air_quality.so2,  
  o3:   result.current.air_quality.o3 ,  
  co:   result.current.air_quality.co    
}
    let finaq =  calculate(calk);
      
    cit.innerText = "Your city : "+ result.location.name;
    coun.innerText = "your country : "+ result.location.country;
    time.innerText = "local time  : " + result.location.localtime;
    temc.innerText = "Temperature in °C : " + result.current.temp_c + "°C";
    temf.innerText= "Temperature in °F : " + result.current.temp_f + "°F";
    atmos.innerText = "Atmosohere : " + result.current.condition.text ;
    
    airq.innerText = "Air quality index : " + finaq;
    humid.innerText = "Humidity : " + result.current.humidity+ "%";
    wind.innerText = "Wind speed : " + result.current.wind_kph + "Km/h";
    
    
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
      
      let calk = {
  pm2_5:  result.current.air_quality.pm2_5,
  pm10: result.current.air_quality.pm10 ,
  no2: result.current.air_quality.no2,
  so2:  result.current.air_quality.so2,  
  o3:   result.current.air_quality.o3 ,  
  co:   result.current.air_quality.co    
}
    let finaq =  calculate(calk);
      
   cit.innerText = "Your city : "+ result.location.name;
    coun.innerText = "your country : "+ result.location.country;
    time.innerText = "local time  : " + result.location.localtime;
    temc.innerText = "Temperature in °C : " + result.current.temp_c + "°C";
    temf.innerText= "Temperature in °F : " + result.current.temp_f + "°F";
    atmos.innerText = "Atmosohere : "+ result.current.condition.text;
      
    airq.innerText = "Air quality index : " + finaq;
    humid.innerText = "Humidity : " + result.current.humidity + "%";
    wind.innerText = "Wind speed : " + result.current.wind_kph + "Km/h";
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