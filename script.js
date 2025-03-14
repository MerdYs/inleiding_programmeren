function addPepperoni(choice) {
    let pepperoniImg = document.getElementById("pizza-pepperoni");

    if (choice) {
        pepperoniImg.style.display = "block"; // Pepperoni tonen
    } else {
        pepperoniImg.style.display = "none"; // Terug naar de standaard pizza
    }
}
