const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu"); 
toggle.addEventListener("click", () => {
    nav.setAttribute("aria-hidden", nav.getAttribute("aria-hidden") === "true" ? "false" : "true");
    toggle.setAttribute("aria-expanded", toggle.getAttribute("aria-expanded") === "false" ? "true" : "false");
  });
