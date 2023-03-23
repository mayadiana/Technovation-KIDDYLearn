import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

const myCarouselElement = document.querySelector('carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    touch: true,
})

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#myCarousel").carousel(3);
    });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#carouselExampleControls").carousel("prev");
    });
    $(".right").click(function(){
      $("#carouselExampleControls").carousel("next");
    });
  });

  $('.carousel').carousel({
    interval: 20000
  })