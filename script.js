// function addPepperoni(choice) {
//     let pepperoniImg = document.getElementById("pepperoni");

//     if (choice) {
//         pepperoniImg.style.display = "block"; // Pepperoni tonen
//     } else {
//         pepperoniImg.style.display = "none"; // Terug naar de standaard pizza
//     }
// }

// Vooraf laden van de geluiden
const addSound = new Audio("sounds/toegevoegd.mp3");
const removeSound = new Audio("sounds/verwijderd.mp3");

document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const pepperoni = document.getElementById("pepperoni");

    yesButton.addEventListener("click", () => {
        pepperoni.style.display = "block"; // Pepperoni zichtbaar maken
        addSound.play();
    });

    noButton.addEventListener("click", () => {
        pepperoni.style.display = "none"; // Pepperoni verbergen
        removeSound.play();
    });
});


