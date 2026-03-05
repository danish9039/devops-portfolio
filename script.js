const revealItems = [...document.querySelectorAll(".reveal")];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((element, index) => {
    const delay = Math.min(index * 70, 420);
    element.style.transitionDelay = `${delay}ms`;
    observer.observe(element);
  });
} else {
  revealItems.forEach((element) => {
    element.classList.add("is-visible");
  });
}

const yearNode = document.querySelector("[data-year]");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
