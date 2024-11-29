document.addEventListener("astro:page-load", () => {
  if (!gsap.plugins.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Animazione scale-in
  gsap.fromTo(
    ".scroll-animation",
    { scale: 0.7 }, // Scala iniziale
    {
      scale: 1, // Scala finale con lo scroll
      scrollTrigger: {
        markers: false,
        trigger: ".scroll-animation",
        start: () => {
          if (window.innerWidth <= 390) {
            // Mobile
            return "top 90%";
          } else if (window.innerWidth <= 768) {
            // Tablet
            return "-50% center%";
          } else {
            // Desktop
            return "-50% 80%";
          }
        },
        end: () => {
          if (window.innerWidth <= 390) {
            // Mobile
            return "top top";
          } else if (window.innerWidth <= 768) {
            // Tablet
            return "100% bottom";
          } else {
            // Desktop
            return "20% top";
          }
        },
        scrub: true
      }
    }
  );

  // Animazione palle
  gsap.fromTo(
    "#cerchio-sx",
    { left: "-50%" },
    {
      left: "0",
      scrollTrigger: {
        markers: false,
        trigger: "#img-full-home",
        start: "top center",
        end: "bottom bottom",
        scrub: true
      }
    }
  );

  gsap.fromTo(
    "#cerchio-dx",
    { right: "-50%" },
    {
      right: "0",
      scrollTrigger: {
        markers: false,
        trigger: "#img-full-home",
        start: "top center",
        end: "bottom bottom",
        scrub: true
      }
    }
  );
});
