// Initialize counters
let totalCount = 0;
let freshmanCount = 0;
let sophomoreCount = 0;
let juniorCount = 0;
let seniorCount = 0;
let previousEntries = "";

// Increment total count when "INCREMENT" button is pressed
function increment() {
    totalCount++;
    document.getElementById("count-el").textContent = totalCount;
}

// Make class buttons visible
function setVisible() {
    document.getElementById("b1").style.display = "inline";
    document.getElementById("b2").style.display = "inline";
    document.getElementById("b3").style.display = "inline";
    document.getElementById("b4").style.display = "inline";
}

// Update counts when each class button is pressed
function fgrades() {
    freshmanCount++;
    document.getElementById("freshmen").textContent = "Freshmen: " + freshmanCount;
    increment();
}

function sgrades() {
    sophomoreCount++;
    document.getElementById("Sophomore").textContent = "Sophomore: " + sophomoreCount;
    increment();
}

function jgrades() {
    juniorCount++;
    document.getElementById("Junior").textContent = "Junior: " + juniorCount;
    increment();
}

function Sgrades() {
    seniorCount++;
    document.getElementById("Senior").textContent = "Senior: " + seniorCount;
    increment();
}

// Save the current total and append it to the previous entries
function save() {
    let a = document.getElementById("previous-entires").innerText
    document.getElementById("previous-entires").innerText= a + totalCount + " - "
}