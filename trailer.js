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

document.body.onload = e => {
    trailer = document.createElement("div");
    trailer.id = "trailer";
    document.body.appendChild(trailer);

    requestAnimationFrame(updateTrailer);
};
