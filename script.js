document.addEventListener("keydown", function(event) {
    let sprite = document.getElementById("sprite");
    let position = parseInt(sprite.style.left) || 100;

    if (event.key === "ArrowRight") {
        sprite.style.left = position + 10 + "px"; /* Mueve el sprite */
    }
});