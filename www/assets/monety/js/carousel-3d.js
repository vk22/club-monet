'use strict'
console.log('carousel carousel');

var carousel = $(".carouselIndexWrap .carousel"),
    currdeg  = 0;

$("#carNext").on("click", { d: "next" }, rotate);
$("#carPrev").on("click", { d: "prev" }, rotate);

// $( "#carNext" ).click(function() {
//   console.log('rotate next ');
//   rotate("next")
// });

// $( "#carPrev" ).click(function() {
//   rotate("prev")
// });

function rotate(e) {
 
  if(e.data.d=="next"){
    currdeg = currdeg + 24;
  }
  if(e.data.d=="prev"){
    currdeg = currdeg - 24;
  }
  carousel.css({
    "-webkit-transform": "translateZ(-983.267692881px) rotateY("+currdeg+"deg)",
    "-moz-transform": "translateZ(-983.267692881px) rotateY("+currdeg+"deg) ",
    "-o-transform": "translateZ(-983.267692881px) rotateY("+currdeg+"deg) ",
    "transform": " translateZ(-983.267692881px) rotateY("+currdeg+"deg)"
  });
}
var banner1 = $("#banner-1")
var banner2 = $("#banner-2")
var banner3 = $("#banner-3")

$(".carouselIndexWrap .item:nth-child(6)").after(banner1);
$(".carouselIndexWrap .item:nth-child(10)").after(banner2);
$(".carouselIndexWrap .item:nth-child(12)").after(banner3);

    setInterval(() => {
      $("#carNext").click();
    }, 5000);