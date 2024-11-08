import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-item");

  const triggerOffset = -200; // Offset del trigger point di 200 px sopra l'accordion generale
  const animationDuration = 0.5; // Durata dell'animazione in secondi

  // Imposta l'osservatore di intersezione per animare gli accordion all'entrata nel viewport
  const observerOptions = {
    root: null,
    rootMargin: `${triggerOffset}px 0px 0px 0px`,
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const accordion = entry.target;
        const index = Array.from(accordions).indexOf(accordion);
        gsap.to(accordion, {
          opacity: 1,
          y: 0,
          duration: animationDuration,
          ease: "power4.out",
          delay: index * 0.1 // Ritardo a cascata
        });
        observer.unobserve(accordion); // Interrompi l'osservazione dopo l'animazione iniziale
      }
    });
  }, observerOptions);

  // Imposta gli accordion per essere inizialmente invisibili e fuori posizione
  accordions.forEach((accordion) => {
    gsap.set(accordion, {
      opacity: 0,
      y: 50
    });
    observer.observe(accordion);
  });

  // Aggiunge l'evento di click per aprire/chiudere gli accordion
  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordion-header");
    const content = accordion.querySelector(".accordion-content");
    const symbol = accordion.querySelector(".symbol");

    accordion.addEventListener("click", () => {
      const isOpen = content.classList.contains("open");

      if (isOpen) {
        gsap.to(content, {
          maxHeight: 0,
          duration: animationDuration,
          ease: "power4.inOut"
        });
        symbol.textContent = "+";
        content.classList.remove("open");
      } else {
        const fullHeight = content.scrollHeight + "px";
        gsap.fromTo(
          content,
          {
            maxHeight: 0
          },
          {
            maxHeight: fullHeight,
            duration: animationDuration,
            ease: "power4.inOut",
            onComplete: () => {
              content.style.maxHeight = "auto"; // Ensure it stays open
            }
          }
        );
        symbol.textContent = "-";
        content.classList.add("open");
      }
    });
  });
});
