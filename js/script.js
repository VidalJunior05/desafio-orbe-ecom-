
window.onload = function(){
    let durationTimer = 60 * 30;
    displayTimer = document.querySelector("#timer");

    stopWatch(durationTimer, displayTimer);

    let buttonPurchase = document.querySelector('.button-purchase');
  
    buttonPurchase.style.animation = "";
    setInterval(()=>{
        buttonPurchase.style.animation = "shivering .3s infinite";
    },5000);

    
};


function stopWatch(durationTimer, displayTimer){
    var timer  = durationTimer, minutes, seconds;

    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer  % 60, 10);

        minutes = minutes < 10 ? "0" +  minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayTimer.textContent = minutes + ":" + seconds;

        if(--timer < 0){
            timer = durationTimer;
        }

    },  1000);
};

let menuIcon = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
};

//Barra de progresso carrousel
$(document).ready(function() {
    $("#carouselExampleSlidesOnly").on("slide.bs.carousel", function(event) {
    $(".barra", this)
    .removeClass("anima").css("width", "0%");
    }).on("slid.bs.carousel", function(event) {
    $(".barra", this)
    .addClass("anima").css("width", "96%");
    });
    $(".barra", "#carouselExampleSlidesOnly").css("width", "96%");
    });
    
$('#meuModal').on('shown.bs.modal', function () {
    $('#meuInput').trigger('focus')
});

