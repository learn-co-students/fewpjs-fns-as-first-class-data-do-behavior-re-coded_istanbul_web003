/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
let time1=time.split('')
  let time2=time1[0]+time[1]
   let time3 = parseInt(time2)
if (time3 <12  && time3 >=0) {return 'Good Morning'}
if (time3 >=12 && time3 <=17){return 'Good Afternoon'}
if (time3 >17) {return 'Good Evening'}
}
/* Write your implementation of displayMessage() */

 
  function displayMessage(testContent){
  
   document.getElementById("greeting").innerText=testContent;
}
displayMessage('test')