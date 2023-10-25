const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  on: {
    // autoplayTimeLeft(s, time, progress) {
    //   progressCircle.style.setProperty("--progress", 1 - progress);
    //   progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    // }
  }
});