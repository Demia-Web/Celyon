import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("astro:page-load", () => {
  new Swiper(".swiper-prodotti", {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-prodotti-next",
      prevEl: ".swiper-prodotti-prev"
    },
    breakpoints: {
      390: {
        spaceBetween: 16,
        slidesPerView: 1.1
      },
      1024: {
        spaceBetween: 16,
        slidesPerView: 1.4
      }
    }
  });
});
