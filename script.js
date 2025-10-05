/*function subscribeClicked(){

    const inputElement = document.getElementById("input1").value;
    alert("Thank you for subscribing: " + inputElement);
}
*/


/*function alertWindow(){
    window.alert("This is the alert window");
}
*/



function subscribeClicked(){
    const input = document.querySelector(".subscribe");
    const email = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
    return;
  }
  alert(`Thank you for subscribing: ${email}`);
}



var cart = JSON.parse(sessionStorage.getItem("cartItems")) || [];
function itemClicked(item){
  let itemDescription = item.getAttribute("data-item")
  alert(`${itemDescription} has been added to cart`);
  cart.push(itemDescription);
  sessionStorage.setItem("cart",JSON.stringify(cart));
}

function viewCart(){
  alert("Items in cart: " + cart);
}

function clearCart(){
  if(sessionStorage.length === 0){
    alert("No items to clear");
  }
  else{
    cart.length = 0;
    sessionStorage.clear();
    alert("Cart cleared");
  }
}

function processOrder(){
  if(cart.length > 0){
    alert("Thank you for your order");
    cart = {};
    sessionStorage.clear();
  }
  else{
    alert("Cart is empty");
  }
}



/*function submitClicked(){
  const form = document.getElementById("contact-information");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  });
}
document.addEventListener("DOMContentLoaded", submitClicked());
*/


function storeContact(event){
  event.preventDefault();
  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("message").value.trim();
  const customOrderValue = document.getElementById("customOrder").checked;

  const contactInfo ={
    name: nameValue,
    email:emailValue,
    message:messageValue,
    customOrder: customOrderValue
  };

  if (nameValue == "" ||  emailValue == ""){
    alert("Please input name or email that is blank");
  }
  else{
    alert(`Form submitted!\nName: ${nameValue}\nEmail: ${emailValue}\nMessage: ${messageValue}\n customOrder: ${customOrderValue}`);
    localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
  }
  
  
  
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contact-information")
          .addEventListener("submit", storeContact);
});