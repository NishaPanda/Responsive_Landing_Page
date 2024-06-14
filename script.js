document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".content h1", { duration: 1, x: -100, opacity: 0, ease: "power2.out", delay: 0 });
    gsap.from(".content span", { duration: 1, x: -100, opacity: 0, ease: "power2.out", delay: 0 });
    
    gsap.from(".btn", { duration: 1.5, scale: 0.5, opacity: 0, ease: "elastic.out(1, 0.3)", delay: 1.5 });

    // Animate the destination cards
    gsap.from(".destination__card", {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      delay: 2
    });

    // Animate the social icons
    gsap.from(".socials span", {
      duration: 1,
      y: -50,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)",
      delay: 0.5
    });

    const links = document.querySelectorAll('.link a');

    links.forEach(link => {
      const underline = link.querySelector('.underline');
  
      link.addEventListener('mouseenter', () => {
        gsap.to(underline, { 
          scaleX: 1,
          transformOrigin: "left",
          duration: 0.3,
          ease: "power2.inOut"
        });
      });
  
      link.addEventListener('mouseleave', () => {
        gsap.to(underline, { 
          scaleX: 0,
          transformOrigin: "right",
          duration: 0.3,
          ease: "power2.inOut"
        });
      });
    });

    gsap.from(".bg__img__2", { duration: 1.5, scale: 0, opacity: 0, ease: "back.out(1.7)", delay: 1.5 });
  });