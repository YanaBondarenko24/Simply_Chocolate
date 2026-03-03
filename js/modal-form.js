
const buttonForm = document.querySelector(".reviews-btn");
const body = document.querySelector("body");
const buttonClose = document.querySelector(".close-btn");
const modalForm = document.querySelector(".form-reviews");
const formContainer = document.querySelector(".form-container");



buttonForm.addEventListener("click", openModal);
modalForm.addEventListener("submit", sendForm);
modalForm.addEventListener("input", handleInput);
buttonClose.addEventListener("click", closeModal);
console.log(modalForm.elements);


function openModal() {
    formContainer.classList.add("is-open");
    body.classList.add("no-scroll");
}

function sendForm(e) {
    e.preventDefault();
  [...e.target.elements].forEach((item) => {
  if (item.value.trim().length === 0) {
    return;
  }
  console.log("ok");
  
  })
  
}



function closeModal() {
    formContainer.classList.remove("is-open");
    body.classList.remove("no-scroll");
}

function handleInput() {
    
}