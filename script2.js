const toppings = {
    pepperoni: {
        img: document.getElementById("pepperoni"), 
        yesBtn: document.getElementById("yespep"), 
        noBtn: document.getElementById("nopep")     
    },
    champignon: {
        img: document.getElementById("champignon"), 
        yesBtn: document.getElementById("yescham"),
        noBtn: document.getElementById("nocham")    
    },
    olijven: {
        img: document.getElementById("olijven"), 
        yesBtn: document.getElementById("yesoli"), 
        noBtn: document.getElementById("nooli")    
    }
};

document.addEventListener("DOMContentLoaded", init);

function init() {
    for (let toppingFoto in toppings) { 
        toppings[toppingFoto].img.style.display = "none";
        
        toppings[toppingFoto].noBtn.disabled = true; 

        toppings[toppingFoto].yesBtn.addEventListener("click", function() {
            handleYesClick(toppingFoto);
        });

        toppings[toppingFoto].noBtn.addEventListener("click", function() {
            handleNoClick(toppingFoto);
        });
    }
}

function handleYesClick(toppingFoto) {
    toggleTopping(toppingFoto, true);
}

function handleNoClick(toppingFoto) {
    toggleTopping(toppingFoto, false);
}

function toggleTopping(toppingFoto, keuzen) { 
    if (keuzen) {
        toppings[toppingFoto].img.style.display = "block"; 
        toppings[toppingFoto].yesBtn.disabled = true;       
        toppings[toppingFoto].noBtn.disabled = false;      
    } else {
        toppings[toppingFoto].img.style.display = "none"; 
        toppings[toppingFoto].yesBtn.disabled = false;     
        toppings[toppingFoto].noBtn.disabled = true;       
    }
}
