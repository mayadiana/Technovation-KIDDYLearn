$(document).ready(function () {
  // Activate Carousel
  $("#carousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#carousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#carousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#carousel").carousel(2);
  });
  $(".item4").click(function () {
    $("#carousel").carousel(3);
  });
  $(".item5").click(function () {
    $("#carousel").carousel(4);
  });
  $(".item6").click(function () {
    $("#carousel").carousel(5);
  });
  $(".item7").click(function () {
    $("#carousel").carousel(6);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#carousel").carousel("prev");
  });
  $(".carousel-control-next").click(async event => {
    event.stopPropagation();
    event.preventDefault();
    if ($(".carousel-item.active").data("slide") === 'lastSlide') {
      let result = await Swal.fire({
        heightAuto: false,
        icon: 'success',
        title: 'Bravo!',
        text: 'Ai învațat înca o lecție!',
        confirmButtonColor: '#90EE90',
        confirmButtonOutline: '#90EE90',
        confirmButtonText: 'Acasă',
      });

      if (result.isConfirmed) {
        onclick = history.back()
      }
    } else {
      $("#carousel").carousel("next");
    }
  });
});

$('.carousel').carousel({
  interval: false
})
