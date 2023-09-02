function showAlert() {
    alert("Hola!");
}

document.getElementById("container").addEventListener("click", function() {
    alert("Hola! Soy el div");
});

document.getElementById("saluteButton").addEventListener("click", function(event) {
    event.stopPropagation(); // Este evento detiene la propagación del evento hacia el div
    showAlert();
});