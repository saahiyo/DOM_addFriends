
let state = document.querySelector("h5")
let adde = document.querySelector(".addt")
let staback = document.querySelector(".status")
var signal = 0

adde.addEventListener("click",function(){
if(signal==0){
   state.innerHTML = "• Friends"
   adde.innerHTML = "Remove friends"
   staback.style.backgroundColor = "#66BB6A"
   signal = 1
    } 
  else{
   state.innerHTML = "• Stranger"
   adde.innerHTML = "Add friends"
   staback.style.backgroundColor = "#EF5350"
   signal = 0
 }

})