document.addEventListener('DOMContentLoaded', function() {
    var mostrarDiv = document.getElementById('mostrar-link');
    var offScreenDiv = document.querySelector('.off-screen');
    var esconderDiv = document.getElementById('esconderDiv');
    var videoIframe = document.getElementById('video');

    mostrarDiv.addEventListener('click', function(event) {
        event.preventDefault();
        
        offScreenDiv.style.top = '0';
    });

    esconderDiv.addEventListener('click', function() {
        videoIframe.src = videoIframe.src;
        offScreenDiv.style.top = '-100%';
    });
});
