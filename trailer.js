const trailer = document.createElement("div");
var x, y = 0;

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
    // create container to prevent trailer from extending the window
    let trailerContainer = document.createElement("div");
    trailerContainer.id = "trailer-container";
    document.body.appendChild(trailerContainer);

    // add trailer to container
    trailer.id = "trailer";
    trailerContainer.appendChild(trailer);

    // begin following mouse movements
    window.addEventListener('mousemove', o => {
        x = o.clientX - trailer.offsetWidth / 2;
        y = o.clientY - trailer.offsetHeight / 2;
    });

    requestAnimationFrame(updateTrailer);
});
