
document.getElementById("button").addEventListener("click", handleclick);

function handleclick(e) {
    const timeString = document.getElementById("time").value;
    displayMessage(greet(timeString))
}

function greet(String){
    const splittedTime = String.split(":");
    
    const hour = splittedTime[0];

    const time = parseInt(hour, 10);

    if (time < 12) {
        return "Good Morning";
    }
    else if (time >= 12 && time < 17) {
        return "Good Afternoon";
    }
    else {
        return "Good Evening";
    }
}
   
function displayMessage(String) {
    document.getElementById("greeting").innerText = String;
}
