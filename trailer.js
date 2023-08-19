var trailer;
var x, y;

window.onmousemove = e => {
    x = e.clientX - trailer.offsetWidth / 2;
    y = e.clientY - trailer.offsetHeight / 2;
}

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
    trailerContainer.style.position = "absolute";
    trailerContainer.style.top = "0";
    trailerContainer.style.left = "0";
    trailerContainer.style.right = "0";
    trailerContainer.style.bottom = "0";
    trailerContainer.style.overflow = "hidden";
    document.body.appendChild(trailerContainer);
    
    trailer = document.createElement("div");
    trailer.id = "trailer";
    trailerContainer.appendChild(trailer);

    requestAnimationFrame(updateTrailer);
});
