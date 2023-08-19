var trailer;
var x, y;

function updateTrailer() {
    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    };

    trailer.animate(keyframes, {
        duration: 400,
        fill: "forwards"
    });

    requestAnimationFrame(updateTrailer);
}

window.addEventListener('load', e => {
    trailerContainer = document.createElement("div");
    trailerContainer.id = "trailer-container";
    document.body.appendChild(trailerContainer);
    
    trailer = document.createElement("div");
    trailer.id = "trailer";
    trailerContainer.appendChild(trailer);

    window.addEventListener("onmousemove", e => {
        x = e.clientX - trailer.offsetWidth / 2;
        y = e.clientY - trailer.offsetHeight / 2;
    });

    requestAnimationFrame(updateTrailer);
});
