let name = document.querySelector("#name");
let khett = document.querySelector("#khett");
let job = document.querySelector("#job");
let salary = document.querySelector("#salary");
let khet = document.querySelectorAll(".khet");
let anima = document.querySelectorAll(".anima");
let lab = document.querySelectorAll(".lab");
let aa = document.querySelectorAll(".a");

let propV = document.querySelectorAll(".propV");
let housev = document.querySelector("#housev");
let propC = document.querySelectorAll(".propC");
let housec = document.querySelector("#housec");
let housecm = document.querySelector("#housecm");




  job.addEventListener('change', () => {
    if(job.value==="Private"){
        salary.style.display="block";
    }
      else if(job.value==="Goverment"){
        salary.style.display="block";
    }
      else {
          salary.style.display="none";
      }
  });


khet.forEach(khe =>{
    
khe.addEventListener('click', () => {
    if(khe.value==="yes"){
        khett.style.display="block";
    }
      else if(khe.value==="no"){
        khett.style.display="none";
    }
    
  });
});


anima.forEach(animaa =>{
    
animaa.addEventListener('click', () => {
    if(animaa.value==="yes"){
        lab.forEach(labb=>{
        labb.style.display="block";
        });
        aa.forEach(aaa=>{
        aaa.style.display="block"
        });
    }
      else if(animaa.value==="no"){
        lab.forEach(labb=>{
        labb.style.display="none";
        });
        aa.forEach(aaa=>{
        aaa.style.display="none"
        });
    }
    
  });
});

propV.forEach(propvm =>{
    
propvm.addEventListener('click', () => {
    if(propvm.value==="yes"){
        housev.style.display="block";
    }
      else if(propvm.value==="no"){
        housev.style.display="none";
    }
    
  });
});

propC.forEach(propcc =>{
    
propcc.addEventListener('click', () => {
    if(propcc.value==="yes"){
        housec.style.display="block";
        housecm.style.display="block";
        
    }
      else if(propcc.value==="no"){
        housec.style.display="none";
          housecm.style.display="none";
        
    }
    
  });
});


let calc = document.querySelector("#calc");



calc.addEventListener("click",()=>{
    
    
    let msalary= salary.value;
    if(msalary===""){
        msalary =0;
    }
    
    let mjob= job.value;
    
    let mkhett = khett.value;
    if(mkhett ===""){
        mkhett = 0;
    }
    
    let mhousev = housev.value;
    if (mhousev ===""){
        mhousev = 0;
    }
    
    let mhousec = housec.value;
    if (mhousec ===""){
        mhousec = 0;
    }
    
    let mhousecm = housecm.value;
    if(mhousecm ===""){
        mhousecm = 0;
    }
    
    
    
    
});