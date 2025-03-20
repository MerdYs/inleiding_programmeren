const addSound = new Audio("sounds/toegevoegd.mp3");
const removeSound = new Audio("sounds/verwijderd.mp3");

document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const pepperoni = document.getElementById("pepperoni");

    yesButton.addEventListener("click", () => {
        pepperoni.style.display = "block";
        addSound.play();
    });

    noButton.addEventListener("click", () => {
        pepperoni.style.display = "none";
        removeSound.play();
    });
});


