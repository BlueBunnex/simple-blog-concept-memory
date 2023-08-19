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
    console.log("loaded");
    
    let trailerContainer = document.createElement("div");
    trailerContainer.id = "trailer-container";
    document.body.appendChild(trailerContainer);
    
    trailer.id = "trailer";
    trailerContainer.appendChild(trailer);

    requestAnimationFrame(updateTrailer);
});

// window.onmousemove = e => {
//      x = e.clientX - trailer.offsetWidth / 2;
//      y = e.clientY - trailer.offsetHeight / 2;
// }

window.addEventListener('onmousemove', e => {
    x = e.clientX - trailer.offsetWidth / 2;
    y = e.clientY - trailer.offsetHeight / 2;
});
