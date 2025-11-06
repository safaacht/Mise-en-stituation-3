// On page load, change this div’s background color (challenge1)
const changeLoad=document.getElementById("main");
window.addEventListener("load",()=>{
  changeLoad.style.background="lightblue";

})

// On click, change this div’s background color (challenge2)
const changeColor=document.querySelector(".challenge2");
changeColor.addEventListener("click",()=>{
  changeColor.style.background="pink";
})


// On click, change all divs’ background colors  (challenge3)
const changeAll=document.getElementById("main");
changeAll.addEventListener("click",()=>{
  const innerDivs=changeAll.querySelector("div");
  innerDivs.forEach(div=>
    div.style.background="red" 
  )
})

// On click, change this div’s text content (challenge4)
const changeText=document.querySelector(".challenge4");
changeText.addEventListener("click",()=>{
  changeText.textContent="Text changed";
})

// On click, increment a counter displayed inside this div  (challenge5)
const compteur=document.querySelector(".challenge5")
compteur.textContent=0;
compteur.addEventListener("click",()=>{
  compteur.textContent=Number(compteur.textContent)+1;
})

// Add an input inside; display its value live below it  (challenge6) 
const liveUpdate=document.querySelector(".challenge6")
liveUpdate.innerHTML=`<input type="text" placeholder="Type smtg..." />
<p> LOREM </p>`

const input=liveUpdate.querySelector("input");
const output=liveUpdate.querySelector("p");

input.addEventListener("input",()=>{
  output.textContent=input.value;
})

// Add a form; on submit, validate that input isn’t empty
const form=document.querySelector(".challenge7")
const form1=document.createElement("form");
const input1=document.createElement("input");
const input2=document.createElement("input");
const btn=document.createElement("button");

btn.type="submit";
btn.textContent="submit";

form.appendChild(form1);
form1.appendChild(input1);
form1.appendChild(input2);
form1.appendChild(btn);

form1.addEventListener("submit",(e)=>{
  e.preventDefault();

  if(!input1.value.trim=="" || !input2.value.trim==""){
    alert("fill the empty filed!");
  }

})

// On hover, increase this div’s size smoothly (challenge8)
const sizing=document.querySelector(".challenge8")
sizing.addEventListener("mouseover",()=>{
  sizing.style.width="200px";
  sizing.style.height="100px";
})

sizing.addEventListener("mouseout",()=>{
  sizing.style.width="170px";
  sizing.style.height="50px";
})

// On double-click, hide this div (challenge9)
const hide=document.querySelector(".challenge9")
hide.addEventListener("dblclick",()=>{
  hide.style.display="none";
})

// On mouseout, reset this div’s color (challenge10)
const reset=document.querySelector(".challenge10")
reset.addEventListener("mouseover",()=>{
  reset.style.background="black"
})
reset.addEventListener("mouseout",()=>{
  reset.style.background="none";
})


// On click, alert “Hello World” (challenge16)
const msgAlert=document.querySelector(".challenge16") 
msgAlert.addEventListener("click",()=>{
  alert("HELLO WORLD!");
})