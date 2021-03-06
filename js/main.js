const myCarouselElement = document.querySelector("#carouselExampleCaptions");
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 6000,
  touch: true,
  pause: false,
  ride: "carousel",
});

const tabs = document.querySelectorAll(".nav-link");

tabs.forEach((tab) => tab.addEventListener("click", toggleActiveTab));

function toggleActiveTab(e) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  e.currentTarget.classList.toggle("active");
}
