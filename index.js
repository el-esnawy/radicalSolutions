const popupclose = document.querySelector(".popup__close");
const burgerbtn = document.querySelector(".nav-burger-outline");
const burgerContent = document.querySelector(".nav-burger-content");

const showModal = (e) => {
  burgerContent.classList.toggle("hidden");
  burgerbtn.classList.toggle("hidden");

  popupclose.addEventListener("click", hideModal);
};

const hideModal = (e) => {
  burgerContent.classList.toggle("hidden");
  burgerbtn.classList.toggle("hidden");
};

burgerbtn.addEventListener("click", showModal);
