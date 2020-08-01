/* Given Code, don't edit */

document.querySelector('button').addEventListener('click', handleClick);

function handleClick(e) {
        const timeString = document.getElementById('time').value;
        displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here... */

/* Write your implementation of greet() */
function greet(times) {
        const hour = parseInt(times);

        if (hour >= 0 && hour < 12) {
                return 'Good Morning';
        }
        if (hour >= 12 && hour < 17) {
                return 'Good Afternoon';
        }

        return 'Good Evening';
}

/* Write your implementation of displayMessage() */
function displayMessage(times) {
        document.querySelector('#greeting').innerText = times;
}
