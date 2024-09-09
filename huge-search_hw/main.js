let continents = document.querySelectorAll(".continent");
let popupBg = document.querySelector(".info__bg");
let popup__photo = document.querySelector(".info__photo");
let popup__title = document.querySelector(".info__title");
let popup__text = document.querySelector(".info__text");
let tooltip = document.querySelector(".tooltip");

continents.forEach((item) => {
  item.addEventListener("click", function () {
    popup__title.textContent = this.getAttribute("data-title");
    popup__photo.setAttribute("src", this.getAttribute("data-photo"));
    popup__text.textContent = this.getAttribute("data-text");
    popupBg.classList.add("active");
  });

  item.addEventListener("mouseenter", function () {
    tooltip.textContent = item.getAttribute("data-title");
    tooltip.style.display = "block";
  });

  item.addEventListener("mouseleave", function () {
    tooltip.textContent = item.getAttribute("data-title");
    tooltip.style.display = "none";
  });

  item.addEventListener("mousemove", function (e) {
    tooltip.style.top = e.y + 2 + "px";
    tooltip.style.left = e.x + 2 + "px";
  });
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
  }
});

// modal window
const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;

  const closeModal = (event) => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === "Escape"
    ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = "hidden";
      }, time);

      window.removeEventListener("keydown", closeModal);
    }
  };

  const openModal = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    window.addEventListener("keydown", closeModal);
  };

  buttonElems.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modalElem.addEventListener("click", closeModal);
};

modalController({
  modal: ".modal1",
  btnOpen: ".section__button1",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modal2",
  btnOpen: ".section__button2",
  btnClose: ".modal__close",
});
