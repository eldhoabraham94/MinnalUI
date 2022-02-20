let modal_button = document.querySelector("#modal-demo-btn");
let modal_button_close = document.querySelector("#modal-close-btn");

const modal_container = document.querySelector("#modal-container");

const showElement = (item) => {
  item.classList.remove("hide");

  item.classList.add("show");
};

const hideElement = (item) => {
  item.classList.remove("show");

  item.classList.add("hide");
};

if (modal_button) {
  modal_button.addEventListener("click", () => {
    showElement(modal_container);
  });
}

if (modal_button_close) {
  modal_button_close.addEventListener("click", (event) => {
    if (event.currentTarget === event.target) hideElement(modal_container);
  });
}
