const myCarouselElement = document.querySelector("#carouselExampleCaptions");
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 6000,
  touch: true,
  pause: false,
  ride: "carousel",
});
