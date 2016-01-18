
function rate(){
    var stars = document.getElementsByName("rating");
    var rated = false;
   for(var i = 0;i<stars.length;i++){
       if(stars[i].checked){
           rated=true;
       }
   }
   if(rated===true){
       for(var i=0;i<stars.length;i++){
           if(!stars[i].checked){
               stars[i].disabled = true;
           }
       }
       document.getElementById("message").innerHTML = "Thank you for rating.";
   }
}

