document.addEventListener("DOMContentLoaded", () => {
  const moreElem = document.querySelector(".more");
  const modalElem = document.querySelector(".modal");

  const openModal = () => {
    modalElem.classList.remove("hidden");
  };

  // moreElem.addEventListener("click", openModal);

  const closeModal = () => {
    modalElem.classList.add("hidden");
  };

 // moreElem.forEach((btn) => {
 //   btn.addEventListener("click", openModal);
 // })

  modalElem.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target.classList.contains("overlay") ||
      target.classList.contains("modal__close")
    ) {
      closeModal();
    }
  });
});
