/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

//function greet(timeString) {}



/*If the time is earlier than 12pm, return "Good Morning".
If the time is between 12pm and 5pm, return "Good Afternoon".
If the time is later than 5pm, return "Good Evening".*/


function greet(timeString) {
  
  let hours=parseInt(timeString);
 
    if  (0<=hours && hours<12) 
      {
        return "Good Morning";
      }
        else if (12<= hours && hours<17)
      {
        return "Good Afternoon";   
      } 
        else 
      {
        return "Good Evening";
      }

}



function displayMessage(timeString) {
  document.querySelector("#greeting").innerText =timeString;
}









