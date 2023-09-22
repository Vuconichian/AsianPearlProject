function showFullScreen(img) {
    img.classList.toggle("fullscreen");
}

window.onload = function() {
    console.log("La página se ha cargado completamente.");
    new bootstrap.Carousel(document.getElementById("carouselExampleInterval"), {
        interval: 3000,
        wrap: true,
    });
};


document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector("#video-container video");
    video.src = "https://vimeo.com/emeraldcollectionresorts/deluxe-all-inclusive-sanctuary";
    video.load();
    video.play();
});