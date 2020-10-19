$(document).ready(function () {
  const shopSlider = $("#shop-slider");

  shopSlider.owlCarousel({
    dots: false,
    smartSpeed: 500,
    loop: true,
    margin: 2,
    responsive: {
      0 : {
        items: 1,
      },
      1254 : {
        items: 3,
      }
    }
  });

  $("#shopSliderright").click(function () {
    shopSlider.trigger("next.owl.carousel");
  });
  $("#shopSliderleft").click(function () {
    shopSlider.trigger("prev.owl.carousel");
  });
});
// shopSlider.on("changed.owl.carousel", function(event) {
//   $(".slide-controls-number__active").text(event.item.index + 1)
//   $(".slide-controls-number__total").text(event.item.count)
// });

// console.log(ggggg);
// shopSlider.on("initialize.owl.carousel initialized.owl.carousel", function(event) {
//   $(".slide-controls-number__active").text(event.item.index + 1)
//   $(".slide-controls-number__total").text(event.item.count)
// });
