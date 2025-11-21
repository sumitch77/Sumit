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
let gold = document.querySelectorAll(".gold");
let silver = document.querySelectorAll(".silver");
let goldd = document.querySelector("#goldd");
let silverr = document.querySelector("#silverr");



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


gold.forEach(goldl =>{
    
goldl.addEventListener('click', () => {
    if(goldl.value==="yes"){
        goldd.style.display="block";
        
        
    }
      else if(goldl.value==="no"){
          goldd.style.display="none";
        
    }
    
  });
});


silver.forEach(sil =>{
    
sil.addEventListener('click', () => {
    if(sil.value==="yes"){
        silverr.style.display="block";
        
        
    }
      else if(sil.value==="no"){
          silverr.style.display="none";
        
    }
    
  });
});

let da = document.querySelector("#da");

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
    let mho = mhousec*mhousecm;
    
    let mgold = goldd.value;
    if(mgold ===""){
        mgold = 0;
    }
    
    let msilver = silverr.value;
    if(msilver ===""){
        msilver = 0;
    }
    
    if(mjob==="Private"){
        if(msalary<30000){
             if(mkhett<=2){
                  if(mho<=4000000){
                       if(mgold<100){
                           if(msilver<100){
                           da.innerText="50k Udhar";      
                           }
                           else if(msilver<=300){
                          da.innerText="50k Udhar";  
                           }
                           else if(msilver<=500){
                          da.innerText="50k Udhar";  
                           }
                           else if(msilver>500){
                          da.innerText="50k Udhar";  
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           da.innerText="000000";       
                           }
                           else if(msilver<=300){
                          da.innerText="000000";  
                           }
                           else if(msilver<=500){
                          da.innerText="000000";  
                           }
                           else if(msilver>500){
                          da.innerText="000000";   
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           da.innerText="100000";        
                           }
                           else if(msilver<=300){
                          da.innerText="100000"; 
                           }
                           else if(msilver<=500){
                          da.innerText="100000"; 
                           }
                           else if(msilver>500){
                          da.innerText="100000";
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           da.innerText="200000";     
                           }
                           else if(msilver<=300){
                          da.innerText="200000"; 
                           }
                           else if(msilver<=500){
                          da.innerText="200000"; 
                           }
                           else if(msilver>500){
                          da.innerText="200000";  
                           } 
                      }
                  }
                 else if(mho<=8000000){
                     if(mgold<100){
                           if(msilver<100){
                           da.innerText="000000";       
                           }
                           else if(msilver<=300){
                          da.innerText="000000"; 
                           }
                           else if(msilver<=500){
                          da.innerText="000000"; 
                           }
                           else if(msilver>500){
                          da.innerText="000000"; 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           da.innerText="000000";      
                           }
                           else if(msilver<=300){
                          da.innerText="000000"; 
                           }
                           else if(msilver<=500){
                          da.innerText="000000";
                           }
                           else if(msilver>500){
                          da.innerText="000000";
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           da.innerText="100000";      
                           }
                           else if(msilver<=300){
                          da.innerText="100000"; 
                           }
                           else if(msilver<=500){
                          da.innerText="100000"; 
                           }
                           else if(msilver>500){
                          da.innerText="100000";
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           da.innerText="400000";     
                           }
                           else if(msilver<=300){
                          da.innerText="400000"; 
                           }
                           else if(msilver<=500){
                          da.innerText="400000"; 
                           }
                           else if(msilver>500){
                          da.innerText="400000";  
                           } 
                      }
                     
                 }
                 else if(mho>8000000){
                     if(mgold<100){
                           if(msilver<100){
                           da.innerText="200000";       
                           }
                           else if(msilver<=300){
                          da.innerText="200000";  
                           }
                           else if(msilver<=500){
                          da.innerText="200000";
                           }
                           else if(msilver>500){
                          da.innerText="200000"; 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                          da.innerText="200000";     
                           }
                           else if(msilver<=300){
                          da.innerText="200000";
                           }
                           else if(msilver<=500){
                          da.innerText="200000";
                           }
                           else if(msilver>500){
                          da.innerText="200000";
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           da.innerText="400000";      
                           }
                           else if(msilver<=300){
                          da.innerText="400000"; 
                           }
                           else if(msilver<=500){
                          da.innerText="400000"; 
                           }
                           else if(msilver>500){
                          da.innerText="400000";  
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           da.innerText="500000";      
                           }
                           else if(msilver<=300){
                          da.innerText="500000";
                           }
                           else if(msilver<=500){
                          da.innerText="500000"; 
                           }
                           else if(msilver>500){
                          da.innerText="500000"; 
                           } 
                      }
                 }
             }
            else if(mkhett<=5){
                 if(mho<=4000000){
                       if(mgold<100){
                           if(msilver<100){
                           console.log("0");      
                           }
                           else if(msilver<=300){
                          console.log("0 Udhar"); 
                           }
                           else if(msilver<=500){
                          console.log("0 Udhar"); 
                           }
                           else if(msilver>500){
                          console.log("0 Udhar"); 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           console.log("0 Udhar");      
                           }
                           else if(msilver<=300){
                          console.log("0 Udhar"); 
                           }
                           else if(msilver<=500){
                          console.log("0 Udhar"); 
                           }
                           else if(msilver>500){
                          console.log("0 Udhar"); 
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           console.log("100000");      
                           }
                           else if(msilver<=300){
                          console.log(" 100000"); 
                           }
                           else if(msilver<=500){
                          console.log("100000"); 
                           }
                           else if(msilver>500){
                          console.log("100000"); 
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           console.log("200000");      
                           }
                           else if(msilver<=300){
                          console.log("200000"); 
                           }
                           else if(msilver<=500){
                          console.log("200000"); 
                           }
                           else if(msilver>500){
                          console.log("200000"); 
                           } 
                      }
                  }
                 else if(mho<=8000000){
                     if(mgold<100){
                           if(msilver<100){
                           console.log("300000 ");      
                           }
                           else if(msilver<=300){
                          console.log("300000"); 
                           }
                           else if(msilver<=500){
                          console.log("300000"); 
                           }
                           else if(msilver>500){
                          console.log("300000"); 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           console.log("300000");      
                           }
                           else if(msilver<=300){
                          console.log("300000"); 
                           }
                           else if(msilver<=500){
                          console.log("300000"); 
                           }
                           else if(msilver>500){
                          console.log("300000"); 
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           console.log("400000");      
                           }
                           else if(msilver<=300){
                          console.log(" 400000"); 
                           }
                           else if(msilver<=500){
                          console.log("400000"); 
                           }
                           else if(msilver>500){
                          console.log("400000"); 
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           console.log("400000");      
                           }
                           else if(msilver<=300){
                          console.log("400000"); 
                           }
                           else if(msilver<=500){
                          console.log("400000"); 
                           }
                           else if(msilver>500){
                          console.log("400000"); 
                           } 
                      }
                     
                 }
                 else if(mho>8000000){
                     if(mgold<100){
                           if(msilver<100){
                           console.log("400000");      
                           }
                           else if(msilver<=300){
                          console.log("400000"); 
                           }
                           else if(msilver<=500){
                          console.log("400000"); 
                           }
                           else if(msilver>500){
                          console.log("400000"); 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           console.log("400000");      
                           }
                           else if(msilver<=300){
                          console.log("400000"); 
                           }
                           else if(msilver<=500){
                          console.log("400000 "); 
                           }
                           else if(msilver>500){
                          console.log("400000"); 
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           console.log("500000");      
                           }
                           else if(msilver<=300){
                          console.log(" 500000"); 
                           }
                           else if(msilver<=500){
                          console.log("500000"); 
                           }
                           else if(msilver>500){
                          console.log("500000"); 
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           console.log("50000");      
                           }
                           else if(msilver<=300){
                          console.log("500000"); 
                           }
                           else if(msilver<=500){
                          console.log("500000"); 
                           }
                           else if(msilver>500){
                          console.log("500000"); 
                           } 
                      }
                 }
                
            }
            else if(mkhett<=10){
                 if(mho<=4000000){
                       if(mgold<100){
                           if(msilver<100){
                           console.log("500000");      
                           }
                           else if(msilver<=300){
                          console.log("500000"); 
                           }
                           else if(msilver<=500){
                          console.log("500000"); 
                           }
                           else if(msilver>500){
                          console.log("500000"); 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           console.log("500000");      
                           }
                           else if(msilver<=300){
                          console.log("500000"); 
                           }
                           else if(msilver<=500){
                          console.log("500000"); 
                           }
                           else if(msilver>500){
                          console.log("50000"); 
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           console.log("800000");      
                           }
                           else if(msilver<=300){
                          console.log(" 800000"); 
                           }
                           else if(msilver<=500){
                          console.log("800000"); 
                           }
                           else if(msilver>500){
                          console.log("800000"); 
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           console.log("1000000");      
                           }
                           else if(msilver<=300){
                          console.log("1000000"); 
                           }
                           else if(msilver<=500){
                          console.log("1000000"); 
                           }
                           else if(msilver>500){
                          console.log("1000000"); 
                           } 
                      }
                  }
                 else if(mho<=8000000){
                     if(mgold<100){
                           if(msilver<100){
                           console.log("500000 ");      
                           }
                           else if(msilver<=300){
                          console.log("500000"); 
                           }
                           else if(msilver<=500){
                          console.log("500000"); 
                           }
                           else if(msilver>500){
                          console.log("500000"); 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           console.log("600000");      
                           }
                           else if(msilver<=300){
                          console.log("600000"); 
                           }
                           else if(msilver<=500){
                          console.log("600000"); 
                           }
                           else if(msilver>500){
                          console.log("600000"); 
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           console.log("800000");      
                           }
                           else if(msilver<=300){
                          console.log(" 800000"); 
                           }
                           else if(msilver<=500){
                          console.log("800000"); 
                           }
                           else if(msilver>500){
                          console.log("800000"); 
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           console.log("1000000");      
                           }
                           else if(msilver<=300){
                          console.log("1000000"); 
                           }
                           else if(msilver<=500){
                          console.log("1000000"); 
                           }
                           else if(msilver>500){
                          console.log("1000000"); 
                           } 
                      }
                     
                 }
                 else if(mho>8000000){
                     if(mgold<100){
                           if(msilver<100){
                           console.log("800000");      
                           }
                           else if(msilver<=300){
                          console.log("800000"); 
                           }
                           else if(msilver<=500){
                          console.log("800000"); 
                           }
                           else if(msilver>500){
                          console.log("800000"); 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           console.log("800000");      
                           }
                           else if(msilver<=300){
                          console.log("800000"); 
                           }
                           else if(msilver<=500){
                          console.log("800000 "); 
                           }
                           else if(msilver>500){
                          console.log("800000"); 
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           console.log("1000000");      
                           }
                           else if(msilver<=300){
                          console.log(" 1000000"); 
                           }
                           else if(msilver<=500){
                          console.log("1000000"); 
                           }
                           else if(msilver>500){
                          console.log("1000000"); 
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           console.log("1200000");      
                           }
                           else if(msilver<=300){
                          console.log("1200000"); 
                           }
                           else if(msilver<=500){
                          console.log("1200000"); 
                           }
                           else if(msilver>500){
                          console.log("1200000"); 
                           } 
                      }
                 }
                
            }
            else if(mkhett>10){
                 if(mho<=4000000){
                       if(mgold<100){
                           if(msilver<100){
                           console.log("0");      
                           }
                           else if(msilver<=300){
                          console.log("0 Udhar"); 
                           }
                           else if(msilver<=500){
                          console.log("0 Udhar"); 
                           }
                           else if(msilver>500){
                          console.log("0 Udhar"); 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           console.log("0 Udhar");      
                           }
                           else if(msilver<=300){
                          console.log("0 Udhar"); 
                           }
                           else if(msilver<=500){
                          console.log("0 Udhar"); 
                           }
                           else if(msilver>500){
                          console.log("0 Udhar"); 
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           console.log("100000");      
                           }
                           else if(msilver<=300){
                          console.log(" 100000"); 
                           }
                           else if(msilver<=500){
                          console.log("100000"); 
                           }
                           else if(msilver>500){
                          console.log("100000"); 
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           console.log("200000");      
                           }
                           else if(msilver<=300){
                          console.log("200000"); 
                           }
                           else if(msilver<=500){
                          console.log("200000"); 
                           }
                           else if(msilver>500){
                          console.log("200000"); 
                           } 
                      }
                  }
                 else if(mho<=8000000){
                     if(mgold<100){
                           if(msilver<100){
                           console.log("300000 ");      
                           }
                           else if(msilver<=300){
                          console.log("300000"); 
                           }
                           else if(msilver<=500){
                          console.log("300000"); 
                           }
                           else if(msilver>500){
                          console.log("300000"); 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           console.log("300000");      
                           }
                           else if(msilver<=300){
                          console.log("300000"); 
                           }
                           else if(msilver<=500){
                          console.log("300000"); 
                           }
                           else if(msilver>500){
                          console.log("300000"); 
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           console.log("400000");      
                           }
                           else if(msilver<=300){
                          console.log(" 400000"); 
                           }
                           else if(msilver<=500){
                          console.log("400000"); 
                           }
                           else if(msilver>500){
                          console.log("400000"); 
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           console.log("400000");      
                           }
                           else if(msilver<=300){
                          console.log("400000"); 
                           }
                           else if(msilver<=500){
                          console.log("400000"); 
                           }
                           else if(msilver>500){
                          console.log("400000"); 
                           } 
                      }
                     
                 }
                 else if(mho>8000000){
                     if(mgold<100){
                           if(msilver<100){
                           console.log("400000");      
                           }
                           else if(msilver<=300){
                          console.log("400000"); 
                           }
                           else if(msilver<=500){
                          console.log("400000"); 
                           }
                           else if(msilver>500){
                          console.log("400000"); 
                           } 
                       }
                      else if(mgold<=300){
                          if(msilver<100){
                           console.log("400000");      
                           }
                           else if(msilver<=300){
                          console.log("400000"); 
                           }
                           else if(msilver<=500){
                          console.log("400000 "); 
                           }
                           else if(msilver>500){
                          console.log("400000"); 
                           } 
                      }
                      else if(mgold<=500){
                          if(msilver<100){
                           console.log("500000");      
                           }
                           else if(msilver<=300){
                          console.log(" 500000"); 
                           }
                           else if(msilver<=500){
                          console.log("500000"); 
                           }
                           else if(msilver>500){
                          console.log("500000"); 
                           } 
                      }
                      else if(mgold>500){
                          if(msilver<100){
                           console.log("50000");      
                           }
                           else if(msilver<=300){
                          console.log("500000"); 
                           }
                           else if(msilver<=500){
                          console.log("500000"); 
                           }
                           else if(msilver>500){
                          console.log("500000"); 
                           } 
                      }
                 }
            }
         }  
        else if(msalary<=100000){
            
        }
        else if(msalary>100000){
            
        }
        
        
    }
    
    
    
    else if(mjob==="Goverment"){
        
        
    }
    
    
    
    else{
        
    }
    
    
});