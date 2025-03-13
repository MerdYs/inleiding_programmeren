let toppings = [];

function addTopping(topping) {
    if (!toppings.includes(topping)) {
        toppings.push(topping);
        document.getElementById('slice-sound').play();
        updatePizzaImage();
        document.getElementById(topping + '-btn').disabled = true;
    }
    if (toppings.length === 3) {
        document.getElementById('bake-btn').style.display = 'block';
    }
}

function updatePizzaImage() {
    let imgSrc = "images/pizza_base";
    if (toppings.includes("cheese")) imgSrc += "_cheese";
    if (toppings.includes("pepperoni")) imgSrc += "_cheese_pepperoni";
    if (toppings.includes("mushrooms")) imgSrc += "_cheese_pepperoni_mushrooms";
    document.getElementById("pizza").src = imgSrc + ".png";
}

function bakePizza() {
    document.getElementById("bake-sound").play();
    document.getElementById("pizza").src = "images/pizza_baked.png";
}
