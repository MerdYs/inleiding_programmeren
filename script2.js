//Hier maak ik een object "toppings" dat alle toppings bevat. Elke topping heeft een afbeelding en twee knoppen (ja en nee). Bron: mijzelf oude PHP manier.
const toppings = {
    pepperoni: {
        img: document.getElementById("pepperoni"), //Haalt de afbeelding van de pepperoni op
        yesBtn: document.getElementById("yespep"), //Haalt de "Ja" knop op voor pepperoni
        noBtn: document.getElementById("nopep")    //Haalt de "Nee" knop op voor pepperoni
    },
    kaas: {
        img: document.getElementById("kaas"), //Haalt de afbeelding van de kaas op
        yesBtn: document.getElementById("yeskaas"), //Haalt de "Ja" knop op voor kaas
        noBtn: document.getElementById("nokaas")   //Haalt de "Nee" knop op voor olijven
    },
    olijven: {
        img: document.getElementById("olijven"), //Haalt de afbeelding van de olijven op
        yesBtn: document.getElementById("yesoli"), //Haalt de "Ja" knop op voor olijven
        noBtn: document.getElementById("nooli")   //Haalt de "Nee" knop op voor olijven
    }
};

//Dit object bevat de geluiden die bij elke topping horen. Er is een geluid voor het toevoegen en een geluid voor het verwijderen van de topping. Bron: mijzelf oude PHP manier, zie code boven.
const geluiden = {
    pepperoni: { 
        add: new Audio("sounds/pepperonitoeg.mp3"),  //Geluid voor toevoegen van pepperoni
        remove: new Audio("sounds/pepperoniver.mp3") //Geluid voor verwijderen van pepperoni
    },
    kaas: { 
        add: new Audio("sounds/kaastoeg.mp3"), //Geluid voor toevoegen van kaas
        remove: new Audio("sounds/kaasver.mp3")  //Geluid voor verwijderen van kaas
    },
    olijven: { 
        add: new Audio("sounds/olijventoeg.mp3"), //Geluid voor toevoegen van olijven
        remove: new Audio("sounds/olijvenver.mp3")  //Geluid voor verwijderen van olijven
    }
};

//Hierbij wordt er gewacht tot de hele pagina is geladen en voer dan de functie init (initialize) uit
document.addEventListener("DOMContentLoaded", init);

function init() {
    //We gaan door alle toppings heen die in het 'toppings' object staan.
    for (let topping in toppings) { //Bron: mijzelf oude PHP manier
        //Voor elke topping roepen we de functie 'prepareTopping' aan.
        //Dit zorgt ervoor dat de juiste instellingen en eventlisteners worden gekoppeld.
        prepareTopping(topping);
    }
}

//Voorbereiden van een specifieke topping. Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects 
function prepareTopping(toppingNaam) { 
    let topping = toppings[toppingNaam];

    //De afbeelding van de topping wordt eerst verborgen
    topping.img.style.display = "none";  

    //Zorg ervoor dat de "Nee" knop uitgeschakeld is bij de start
    topping.noBtn.disabled = true;  

    //Koppel de knoppen aan de bijbehorende functies
    topping.yesBtn.addEventListener("click", handleYesClick); 
    topping.noBtn.addEventListener("click", handleNoClick);

    //Functie die wordt uitgevoerd als op "Ja" wordt geklikt
    function handleYesClick() {
        yesTopping(toppingNaam);
    }

    //Functie die wordt uitgevoerd als op "Nee" wordt geklikt
    function handleNoClick() {
        noTopping(toppingNaam);
    }
}

//Deze functie wordt aangeroepen als iemand een topping wil toevoegen
function yesTopping(toppingNaam) {
    toggleTopping(toppingNaam, true); // true betekent: "voeg de topping toe"
}

//Deze functie wordt aangeroepen als iemand een topping wil verwijderen
function noTopping(toppingNaam) {
    toggleTopping(toppingNaam, false); // false betekent: "verwijder de topping"
}

//Deze functie voegt een topping toe of verwijdert hem, afhankelijk van de keuze
function toggleTopping(toppingNaam, keuze) { 
    let topping = toppings[toppingNaam];

    //Als de keuze true is (betekent het dat de gebruiker de topping wil toevoegen)
    if (keuze) {
        topping.img.style.display = "block";  //Laat de afbeelding van de topping zien
        playSound(geluiden[toppingNaam].add); //Speelt het geluid af van het toevoegen van de bijbehorende topping
        topping.yesBtn.disabled = true;       //De "Ja" knop wordt uitgeschakeld
        topping.noBtn.disabled = false;       //De "Nee" knop wordt ingeschakeld
    } 
    // Als de keuze "false" is (betekent het dat de gebruiker de topping wil verwijderen)
    else {
        topping.img.style.display = "none";   //Verberg de afbeelding van de topping
        playSound(geluiden[toppingNaam].remove); //Speel het verwijder geluid af van de bijbehorende topping
        topping.yesBtn.disabled = false;      //De "Ja" knop wordt ingeschakeld
        topping.noBtn.disabled = true;        //De "Nee" knop wordt uitgeschakeld
    }
}

//Deze functie speelt een geluid af. Bron: https://www.w3schools.com/jsref/met_audio_play.asp
function playSound(audio) {
    audio.play();
}
