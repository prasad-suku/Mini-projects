let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
let searchbtn =  document.getElementById("search-btn");
let resultcontainer = document.querySelector(".result")

let get_meaning = ()=>{
 let inputval = document.getElementById("inp").value;
 
 fetch(`${url}${inputval}`).then((res)=>res.json())
.then((data)=>{
 console.log(data,data[0].word);

// appending result to result container

resultcontainer.innerHTML = ` 
           <div class="word">   <h1>${inputval}</h1>  </div>
    
         <!-- details -->
         <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
         </div>

         <!-- word meaning -->
         <p></p>
         <p class="meaning"><span style="color:black">Meaning:</span> ${data[0].meanings[0].definitions[0].definition}  </p>
         
         <!-- example sentence for word -->

         <p class="example-sentence">${data[0].meanings[0].definitions[0].example || ""}</p>`
         



}).catch(err=>console.log(err.message))


//  clearing input value

document.getElementById("inp").value="";
}


searchbtn.addEventListener("click",get_meaning);

window.addEventListener("load",get_meaning);

document.addEventListener("keyup",(event)=>{
    if(event.key === "Enter"){
        get_meaning()
    }
})
