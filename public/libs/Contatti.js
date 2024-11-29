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
