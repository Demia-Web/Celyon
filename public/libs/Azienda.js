import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener("astro:page-load", () => {
  if (!gsap.plugins.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.fromTo(
    ".scroll-animation",
    { scale: 1 },
    {
      scale: 2,
      scrollTrigger: {
        markers: false,
        trigger: ".scroll-animation",
        start: () => {
          if (window.innerWidth <= 390) {
            // Mobile
            return "top 90%";
          } else if (window.innerWidth <= 768) {
            // Tablet
            return "0% center%";
          } else {
            // Desktop
            return "top center";
          }
        },
        end: "top top",
        scrub: true
      }
    }
  );

  // Pin the image
  if (window.innerWidth > 768) {
    gsap.to(".scroll-container img", {
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "-=32 top",
        end: "40% top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false
      }
    });
  }
});
document.addEventListener("astro:page-load", () => {
  gsap
    .timeline({ repeat: -1 })
    .to(
      "#ballFull",
      {
        y: "50%",
        duration: 0,
        ease: "power1.inOut"
      },
      0
    )
    .to(
      "#ballBorder",
      {
        y: "-50%",
        duration: 0,
        ease: "power1.inOut"
      },
      0
    )
    .to(
      "#ballFull",
      {
        y: "0%",
        duration: 5,
        ease: "power1.inOut"
      },
      0
    )
    .to(
      "#ballBorder",
      {
        y: "-0%",
        duration: 5,
        ease: "power1.inOut"
      },
      0
    )
    .to(
      ".move",
      {
        rotation: 180,
        duration: 5,
        ease: "power1.inOut",
        delay: 5
      },
      0
    )
    .to(
      "#ballFull",
      {
        y: "50%",
        duration: 5,
        ease: "power1.inOut",
        delay: 10
      },
      0
    )
    .to(
      "#ballBorder",
      {
        y: "-50%",
        duration: 5,
        ease: "power1.inOut",
        delay: 10
      },
      0
    );
});
