import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Swiper caricato");
  new Swiper(".swiper-prodotti", {
    modules: [Navigation],
    spaceBetween: 16,
    slidesPerView: 1.4,
    navigation: {
      nextEl: ".swiper-prodotti-next",
      prevEl: ".swiper-prodotti-prev"
    }
  });
});
