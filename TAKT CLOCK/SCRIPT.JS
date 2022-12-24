// JavaScript code for the website

// Prompt the user for the goal boats
let goalBoats = parseInt(window.prompt("Enter the goal boats:"));

// Calculate the countdown time based on the goal boats
let countdownTime = 420 / goalBoats * 60;

let paused = false; // variable to track whether the clock is paused or not

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") { // if the spacebar is pressed
    paused = !paused; // toggle the paused state
  }
});

function updateClock() {
  if (!paused) { // only update the clock if it is not paused
    // Decrement the countdown time
    countdownTime--;

    // Calculate the minutes and seconds remaining
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;

    // Display the clock with leading zeros for single digits
    document.getElementById("clock").innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // If the countdown reaches zero, reset it to the initial time
    if (countdownTime <= 0) {
      countdownTime = 420 / goalBoats * 60;
    }
  } else {
    countdownTime = 420 / goalBoats * 60; // reset the countdownTime to the initial value if the clock is paused
    return;
  }
}

// Set the current boats to 0
let currentBoats = 0;

// Initialize an array to store the times for each boat
let times = [];

// Display the actual and goal boats as numbers
document.getElementById("countdown").innerHTML = `Actual boats: ${currentBoats} / Goal boats: ${goalBoats}`;

let startTime; // initialize the startTime variable

// Add an event listener for the keydown event
document.addEventListener("keydown", function(event) {
  // Check if the key is Enter
  if (event.key === "Enter") {
    // Increment the current boats
    currentBoats++;
    
    // Set the start time to the current time
    startTime = Date.now();
    
    // Calculate the elapsed time in seconds
    let elapsedTime = (Date.now() - startTime) / 1000;

    // Calculate the elapsed time in minutes and seconds
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;

    // Record the time for the completed boat in the format mm:ss
    times.push(`Boat ${currentBoats}: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);

    // Update the actual boats display
    document.getElementById("countdown").innerHTML = `Actual boats: ${currentBoats} / Goal boats: ${goalBoats}`;

    // Reset the countdown time
    countdownTime = 420 / goalBoats * 60;

    // Check if all the boats have been completed
    if (currentBoats === goalBoats) {
      // Display the times for each completed boat
      document.getElementById("times").innerHTML = times.join("<br>");
    }
  }
});

