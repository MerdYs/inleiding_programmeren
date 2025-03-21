//https://www.w3schools.com/js/js_array_methods.asp
const toppings = {
    pepperoni: {
        img: document.getElementById("pepperoni"), 
        yesBtn: document.getElementById("yespep"), 
        noBtn: document.getElementById("nopep")     
    },
    kaas: {
        img: document.getElementById("kaas"), 
        yesBtn: document.getElementById("yeskaas"),
        noBtn: document.getElementById("nokaas")    
    },
    olijven: {
        img: document.getElementById("olijven"), 
        yesBtn: document.getElementById("yesoli"), 
        noBtn: document.getElementById("nooli")    
    }
};

//https://www.w3schools.com/js/js_array_methods.asp
const sounds = {
    pepperoni: { 
        add: new Audio("sounds/pepperonitoeg.mp3"), 
        remove: new Audio("sounds/pepperoniver.mp3") 
    },
    kaas: { 
        add: new Audio("sounds/kaastoeg.mp3"), 
        remove: new Audio("sounds/kaasver.mp3") 
    },
    olijven: { 
        add: new Audio("sounds/olijventoeg.mp3"), 
        remove: new Audio("sounds/olijvenver.mp3") 
    }
};

document.addEventListener("DOMContentLoaded", init);

//https://www.w3schools.com/js/js_object_methods.asp
function init() {
    Object.keys(toppings).forEach(toppingFoto => {
        let topping = toppings[toppingFoto]; 
        
        topping.img.style.display = "none";  
        topping.noBtn.disabled = true;  

        topping.yesBtn.addEventListener("click", () => toggleTopping(toppingFoto, true));
        topping.noBtn.addEventListener("click", () => toggleTopping(toppingFoto, false));
    });
}


function toggleTopping(toppingFoto, keuzen) { 
    let topping = toppings[toppingFoto];

    if (keuzen) {
        topping.img.style.display = "block"; 
        playSound(sounds[toppingFoto].add);
        topping.yesBtn.disabled = true;       
        topping.noBtn.disabled = false;   
    } else {
        topping.img.style.display = "none"; 
        playSound(sounds[toppingFoto].remove);
        topping.yesBtn.disabled = false;     
        topping.noBtn.disabled = true;   
    }
}

function playSound(audio) {
    audio.play();
}
