document.addEventListener("astro:page-load", () => {
  const circle_1 = document.querySelectorAll(".circle-1");
  const circle_2 = document.querySelectorAll(".circle-2");
  const circle_3 = document.querySelectorAll(".circle-3");
  const circle_4 = document.querySelectorAll(".circle-4");

  gsap.fromTo(
    circle_1,
    { x: 0 },
    {
      x: "-2vw",
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top 40%",
        end: "500% center",
        markers: false,
        scrub: true
      },
      ease: "power2.out"
    }
  );
  gsap.fromTo(
    circle_2,
    { x: 0 },
    {
      x: "-9vw",
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top 40%",
        end: "500% center",
        markers: false,
        scrub: true
      },
      ease: "power2.out"
    }
  );
  gsap.fromTo(
    circle_3,
    { x: 0 },
    {
      x: "-7vw",
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top 40%",
        end: "500% center",
        markers: false,
        scrub: true
      },
      ease: "power2.out"
    }
  );
  gsap.fromTo(
    circle_4,
    { x: 0 },
    {
      x: "-5vw",
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top 40%",
        end: "500% center",
        markers: false,
        scrub: true
      },
      ease: "power2.out"
    }
  );
});

document.addEventListener("astro:page-load", () => {
  const circle_1 = document.querySelectorAll(".mobile-circle-1");
  const circle_2 = document.querySelectorAll(".mobile-circle-2");
  const circle_3 = document.querySelectorAll(".mobile-circle-3");
  const circle_4 = document.querySelectorAll(".mobile-circle-4");

  gsap.fromTo(
    circle_1,
    { x: 0 },
    {
      x: "10px",
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "-200% 40%",
        end: "1000% center",
        markers: false,
        scrub: true
      },
      ease: "power2.out"
    }
  );
  gsap.fromTo(
    circle_2,
    { x: 0 },
    {
      x: "50px",
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "-200% 40%",
        end: "1000% center",
        markers: false,
        scrub: true
      },
      ease: "power2.out"
    }
  );
  gsap.fromTo(
    circle_3,
    { x: 0 },
    {
      x: "60px",
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "-200% 40%",
        end: "1000% center",
        markers: false,
        scrub: true
      },
      ease: "power2.out"
    }
  );
  gsap.fromTo(
    circle_4,
    { x: 0 },
    {
      x: "80px",
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "-200% 40%",
        end: "1000% center",
        markers: false,
        scrub: true
      },
      ease: "power2.out"
    }
  );
});
