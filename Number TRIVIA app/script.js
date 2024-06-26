
// getting elements

let get_fact_btn = document.getElementById("get-fact-btn")
let get_rand_btn = document.getElementById("ran-fact-btn")
 let fact_container = document.getElementById("fact")
let main_container =  document.querySelector(".container")
let url ="http://numbersapi.com/";

// fetch data 


let fetch_fact = (num)=>{
    fetch(url+num).then((res)=>res.text())
    .then((data)=>{
        fact_container.style.display = "block";
        // setting fetch text to fact innerHTml
     fact_container.innerHTML = `<h2 id="inp-num">${num}</h2>
        <p id="fact_text">${data}</p>`
  
    // append the fact-container to main container
     
    // main_container.appendChild(fact_container)

    
    })
}


// getting input and shown functionality

 let get_fact = ()=>{
  
    let inpnum =  document.getElementById("inpnum").value;
    
// cheking wheather given num is above 0 to below 500

  if(inpnum){
    if (inpnum >= 0 && inpnum <= 500) {
      
       
        fetch_fact(inpnum);
        
        
        
    }
    else{
        fact_container.style.display = "block";
        fact_container.innerHTML = `<p id="message">Give number between 0 to 500</p>`
    }

    // clearing input value
    document.getElementById("inpnum").value = "";
  }
  else{
    fact_container.style.display = "block";
    fact_container.innerHTML = `<p id="err" style="color:red;font-weight:bold">Please Give Random Number</p>`

 } 
 }


    // random facts functionality

    let ran_fact = ()=>{
    
        let ran_num = Math.floor(Math.random()*501);
      
        fetch_fact(ran_num)
        console.log("clicked random btn");

    }
 
  get_rand_btn.addEventListener("click",ran_fact) 
//  call function by clickiNG Enter btn
  document.addEventListener("keyup",(event)=>{
    if(event.key === "Enter"){
        get_fact();
    }
  })
    
  get_fact_btn.addEventListener('click',get_fact);

  window.addEventListener('load',ran_fact)