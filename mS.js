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
// const changeAll=document.getElementById("main");
// changeAll.addEventListener("click",()=>{
//   const innerDivs=changeAll.querySelector("div");
//   innerDivs.forEach(div=>
//     div.style.background="red" 
//   )
// })

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
  sizing.style.width="450px";
  sizing.style.height="100px";
})

sizing.addEventListener("mouseout",()=>{
  sizing.style.width="400px";
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
const msgAlert=document.querySelector(".challenge16") ;
msgAlert.addEventListener("click",()=>{
  alert("HELLO WORLD!");
})



// On click, log this div’s ID to the console (challenge17)
const affichageId=document.querySelector(".challenge17");

affichageId.addEventListener("click",()=>{
  console.log(affichageId.id);
  
})

// Add two inputs inside; on change, show their sum (challenge18)
const div=document.querySelector(".challenge18");
const input3 =document.createElement('input');
const input4=document.createElement('input');
const parag=document.createElement("p")
div.appendChild(input3);
div.appendChild(input4);
div.appendChild(parag);

function sum(){
const value1=parseFloat(input3.value)||0;
const value2=parseFloat(input4.value)||0;
const summ=value1+value2;

parag.textContent=`Sum:${summ}`

console.log(`Sum:${summ}`);

}


input3.addEventListener("change",sum);
input4.addEventListener("change",sum);




// Add a select menu; show selected value below it (challenge19)
const divs=document.querySelector(".challenge19");
divs.innerHTML=`
<label  type="menu">Menu:</label>
<select id= "menu">
<option>--Chose one--</option>
<option value=1>1</option>
<option value=2>2</option>
<option value=3>3</option>
</select>
<p id="choix"></p>
`


const menu=divs.querySelector("#menu")
const choix=divs.querySelector("#choix");

menu.addEventListener("change",()=>{
 const selected=menu.value;
 choix.textContent=`Selected:${selected}`

})




// Add a checkbox; when checked, change div’s border color (challenge20)
const divv=document.querySelector(".challenge20");
const checkbox = document.createElement("input");
 checkbox.type="checkbox";
 checkbox.id="checkbox"


 divv.appendChild(checkbox);

 checkbox.addEventListener("change",()=>{
  if(checkbox.checked){
     divv.style.border="2px solid red"; 
  }else{
    divv.style.border=""
  }

 })


//  Create a list (<ul>); on button click, add a new item (challenge21)
document.addEventListener("DOMContentLoaded",()=>{


const liste=document.querySelector(".challenge21");
const ul=document.createElement("ul")
ul.innerHTML=`
<li>1</li>
<li>2</li>

`


const btn=document.createElement("button");
btn.id="btn";
btn.textContent="Add";
btn.className="btn";

liste.appendChild(ul);
liste.appendChild(btn);





btn.addEventListener("click",()=>{
  const currrentPos=ul.querySelectorAll("li").length;
console.log("currrentPos");


  const newLi=document.createElement("li");
  newLi.textContent=currrentPos+1;

  ul.appendChild(newLi);
});

})


// On scroll, show “Scrolling...” text inside this div (challenge23)
const scrolling=document.querySelector(".challenge23")


function hideScrollingText() {
    scrolling.textContent = "div23";
}

 window.addEventListener("scroll",()=>{
  scrolling.textContent="Scrolling...";


    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(hideScrollingText, 300);
 });



//  On click, generate and display a random number (challenge26)
const randomNumber=document.querySelector(".challenge26");
const prg=document.createElement("p");
randomNumber.appendChild(prg);

randomNumber.addEventListener("click",()=>{
  let random=Math.random();
prg.textContent=`Num=${random}`  
})

    


// On click, toggle visibility of another div  (challenge27)

const chal27=document.querySelector(".challenge27");
chal27.addEventListener("click",()=>{
  const isHidden=randomNumber.classList.toggle('is-hidden');

  if(isHidden){
    randomNumber.style.display="none";
  }else{
    randomNumber.style.display="block";
  }
})




// Add input type=“color”; on change, apply it as background (challenge29)
const chal29=document.querySelector(".challenge29");
const input5=document.createElement("input");
input5.type="color"

chal29.appendChild(input5);

chal29.addEventListener("change",()=>{
  chal29.style.background=input5.value;
})




// On click, store this div’s color in localStorage (challenge30)
const chal30=document.querySelector(".challenge30");

const color=chal30.style.background="purple";

chal30.addEventListener("click",()=>{
  const save= localStorage.setItem("color","purple");
})


// On page load, restore color from localStorage (challenge31)
const chal31=document.querySelector(".challenge31");

window.addEventListener("load",()=>{
  const restore=(localStorage.getItem("color"));

  if(restore){
    chal31.style.background=restore;
  }
})


// Create an object {name, age} and display its properties (challenge32)
const chal32=document.querySelector(".challenge32");

const obj={nom:"Safaa",age:21, city:"Casablanca"}
console.log({ nom: obj.nom, age: obj.age });


chal32.innerHTML=`Nom:${obj.nom}, Age:${obj.age}`