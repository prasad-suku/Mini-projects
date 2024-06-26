
    // getting input thorough variable
    let wrapper_container =  document.getElementById("wrapper");
    let err_container = document.getElementById("error");


    // API URL

    let url = "https://api.genderize.io?name=";
    
    
    // function to get gender reveal
    
    let predictgender = ()=>{
        
        let inputform = document.getElementById("inputform").value;
   
   
   
        //    clearing wraper div before appending values
         wrapper_container.innerHTML = ""
          
        if(inputform.length>0){
            fetch(url+inputform).then((res)=>res.json())
       .then((data)=>{
           let info_div = document.createElement("div");
           info_div.setAttribute("id","info")
          
           //   setting details to div
                
            info_div.innerHTML = `<h2 id="inpname">${data.name}</h2>
              <img src="" id="gender-icon"  alt="png">
              <h3 id="gender">${data.gender}</h3>
              <h3 id="prob">Probability : ${data.probability}</h3>`
                  
            //   console.log(info_div);
            // appending the info div into wrapper container
            wrapper_container.appendChild(info_div);
            
            // checking female or male 
            if(data.gender === "male"){
                document.getElementById("gender-icon").setAttribute("src","./male-symbol-icon.webp")
                info_div.classList.add("male")
            }
            else{
                document.getElementById("gender-icon").setAttribute("src","./Female_symbol.svg (1).png")
                info_div.classList.add("female")
            }
       
        //  clearing error message

        err_container.innerText = ""


        })
       
    } else {
        err_container.innerText = `Please Enter a valid name`;
    }
        
        document.getElementById('inputform').value = ""
        
    }
    
    
    document.getElementById("predict-btn").addEventListener("click",predictgender);
    // window.addEventListener("load",predictgender);

    document.addEventListener("keyup",(event)=>{
        if(event.key ==="Enter"){
            predictgender();
        }
    })