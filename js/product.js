const product = document.querySelector(".products-list");
/* const productbutton = document.querySelectorAll(".products-item-btn"); */
 
product.addEventListener("click", addProduct);

function addProduct(e) {
   if (!e.target.classList.contains("products-item-btn")) {
       return;   
    }
    
    const idProduct = e.target.closest(".products-list-item");
    const valueId = idProduct.id;
    let localStorageData = JSON.parse(localStorage.getItem("selectedProducts"))  || [];
    let quantity = 1;
    
    const existingProduct = localStorageData.find(item => 
        item.valueId === valueId
  );
    
  if (existingProduct) {
    existingProduct.quantity += 1; 
        } else {
        localStorageData.push({
         valueId,
         quantity
    });
  }     
        localStorage.setItem("selectedProducts",JSON.stringify(localStorageData))

}