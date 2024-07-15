const openModalButton = document.querySelectorAll("#exibir");
const closeModalButton = document.querySelector("#close-modal");
const closeModalFade = document.querySelector("#fade-view");
const closeModalEdit = document.querySelector("#buttons-edit");
const modal = document.querySelector("#modal-view");
const fade = document.querySelector("#fade-view");
const edit = document.querySelectorAll("#editar");
const fadeedit = document.querySelector("#fade-edit");
const delet = document.querySelectorAll("#excluir");
const fadedelet = document.querySelector("#fade-delet");
const closeModalDelet = document.querySelector("#fade-delet");

const toggleModalView = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

const toggleModalEdit = () => {
    fadeedit.classList.toggle("hide");
};

const toggleModalDelet = () => {
    fadedelet.classList.toggle("hide");
};

openModalButton.forEach((el) => {
    el.addEventListener("click", toggleModalView);
});
edit.forEach((el) => {
    el.addEventListener("click", toggleModalEdit);
});
delet.forEach((el) => {
    el.addEventListener("click", toggleModalDelet);
});

closeModalFade.addEventListener("click", () => toggleModalView());
closeModalEdit.addEventListener("click", () => toggleModalEdit());
closeModalDelet.addEventListener("click", () => toggleModalDelet());
