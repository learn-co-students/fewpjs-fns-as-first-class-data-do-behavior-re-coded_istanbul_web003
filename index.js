


function greet(the_time){
  let this_time = the_time.split(":");
  let another_time = this_time[0].concat(this_time[1])
    let result = parseInt(another_time,10);
   
    if (result <1200){
      return "Good Morning"
    } if ( (result >= 1200) && (reult <= 1700)){
              return "Good Afternoon";
            }
        else if (result > 1700){
          return "Good Evening"
        
        }
        document.getElementById("greeting").innerHTML= result;
}

