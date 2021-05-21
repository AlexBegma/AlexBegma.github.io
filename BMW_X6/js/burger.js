document.addEventListener("DOMContentLoaded", () => {
  const menuElem = document.querySelector(".menu");
  const burgerElem = document.querySelector(".humburger-menu");

  const toggleMenu = () => {
    menuElem.classList.toggle("menu-active");
    burgerElem.classList.toggle("humburger-menu-active");
  };

  burgerElem.addEventListener("click", toggleMenu);

  const closeMenu = () => {
    menuElem.classList.remove("menu-active");
    burgerElem.classList.remove("humburger-menu-active");
  };

  menuElem.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("menu-list__link")) {
      closeMenu();
    }
  });
});
