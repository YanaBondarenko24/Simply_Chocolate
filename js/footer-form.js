axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
const footerForm = document.querySelector(".footer-form");
const button = footerForm.querySelector("button");
footerForm.addEventListener("submit", getSubscribtion);

 async function getSubscribtion(e) {
    e.preventDefault();
  if(!e.target.elements["subscribe-email"].value.trim().length){
      showError();
      button.setAttribute(disabled);
  }
  try {
    const response = await axios.post("/posts", {email: footerForm.elements["subscribe-email"].value.trim()});
console.log(response);
showSuccessfull();
e.target.reset(); 
  
} catch (error) {
    alert(error.massega);
  }
}

function showSuccessfull() {
    iziToast.show({
    message: 'Subscribed successfully!',
    messageColor:'var(--white)',
    backgroundColor: 'var(--orange)',
   
});
}
function showError() {
    iziToast.show({
    message: 'Use a correct email!',
    messageColor:'var(--white)',
    backgroundColor: '#e74a3b',
});
}