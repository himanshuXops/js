const getcolor=()=>{
 const randomNumber= Math.floor(Math.random()*1677215)  
 const randomcode="#" +  randomNumber.toString(16)
 document.body.style.backgroundColor= randomcode;
 document.getElementById("color-code").innerText=randomcode;
 navigator.clipboard.writeText(randomcode)
} 
document.getElementById("btn").addEventListener("click",getcolor)

getcolor();