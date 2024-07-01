let container = document.querySelector(".container")
let btns =  document.querySelectorAll(".btn");

let img_list = [1,2,3,4,5];
let ind = 0;

btns.forEach(button=>{
    button.addEventListener("click",()=>{
        // alert("clicked")
        if(button.classList.contains("btn-left")){
            // alert("left btn")
            ind--;
            if(ind<0){
                ind = img_list.length-1; 
            }
            container.style.background = `url("./images/${img_list[ind]}.png") center/cover fixed no-repeat` 

        }
        else{

            ind++;
            if(ind===img_list.length){
                ind = 0; 
                
            }
            container.style.background = `url("./images/${img_list[ind]}.png") center/cover fixed no-repeat`
            // alert("right btn")
        }
    })
   

})