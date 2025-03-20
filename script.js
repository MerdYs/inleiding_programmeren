//https://stackoverflow.com/questions/9419263/how-to-play-audio
const addSound = new Audio("sounds/toegevoegd.mp3");
const removeSound = new Audio("sounds/verwijderd.mp3");

document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const pepperoni = document.getElementById("pepperoni");

    noButton.disabled = true;

    yesButton.addEventListener("click", function () {
        if (!yesButton.disabled) { 
            pepperoni.style.display = "block";
            playSound("sounds/toegevoegd.mp3");
            
            yesButton.disabled = true;
            noButton.disabled = false;
        }
    });

    noButton.addEventListener("click", function () {
        if (!noButton.disabled) {
            pepperoni.style.display = "none";
            playSound("sounds/verwijderd.mp3");

            yesButton.disabled = false;
            noButton.disabled = true;
        }
    });

    function playSound(src) {
        const sound = new Audio(src);
        sound.play();
    }
});