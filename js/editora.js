const openModalButton = document.querySelector("#exibir");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal-view");
const fade = document.querySelector("#fade-view");


const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

closeModalButton.addEventListener("click", () => toggleModal());


