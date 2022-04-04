// Change text on tShirt

function tShirtChange(){
    console.log("function called");

    let newShirtValue = document.getElementById("tShirtInput").value;
    console.log(newShirtValue);
    let tShirtText = document.getElementById("tShirt").innerHTML;



    tShirtText = newShirtValue;
    document.getElementById("tShirt").innerHTML = tShirtText;
   
    console.log(tShirtText);    
}

// Change shirt color
function changeShirt(color){

    if (color === "grey"){
      let shirtColor = document.getElementById("shirtimg");
      let greySrc = document.getElementById("greyshirt");

      shirtColor.src = greySrc.src;
    }
    else if (color === "blue"){
      let shirtColor = document.getElementById("shirtimg");
      let blueSrc = document.getElementById("blueshirt");

      shirtColor.src = blueSrc.src;
    }
    else if (color === "white"){
      let shirtColor = document.getElementById("shirtimg");
      let whiteSrc = document.getElementById("whiteshirt");

      shirtColor.src = whiteSrc.src;
    }
    else{
      console.log("no color selected")
    }
}

//checkout test
function mouseOver() {
  document.getElementById("coTest2").classList.toggle("show-co");
}

function updatePrice(){
  console.log("Update Ran");
  let cartItems = Number(document.getElementById("cartItems").innerText);
  let subtotal = document.getElementById("subTotal");
  let grandtotal = document.getElementById("grandTotal");
  let maxlength = 5;

  if (cartItems <= 0){
    cartItems === 0;
    subtotal.innerText === "0";
  }
  else{
  subTotal.innerText = cartItems * 5.99;
  if (subtotal.innerText.length > maxlength){
    subtotal.innerText = subtotal.innerText.slice(0, maxlength);
  }
  }

  grandtotal.innerText = subtotal.innerText * 1.0875;

  if (grandtotal.innerText.length > maxlength){
    grandtotal.innerText = grandtotal.innerText.slice(0, maxlength);
  }
}

function AddToCart(){
  let cartAdd = Number(document.getElementById("cartItems").innerText);
  document.getElementById("cartItems").innerText = Number(cartAdd) + 1;
  
  let shirtPreview = document.getElementById("shirtimg");
  let textPreview = document.getElementById("tShirt");

  let item1 = document.getElementById("item1")
  let item1Text = document.getElementById("item1Text");
  let item1Shirt = document.getElementById("item1Shirt");
    
  item1.classList.add("showCartItem")
  item1.classList.remove("cartHide")
  item1Text.innerText = textPreview.innerText;
  item1Shirt.src = shirtPreview.src;

  updatePrice();
}

function RemoveFromCart(){
  let cartAdd = document.getElementById("cartItems").innerText;
  if(cartAdd <= 0){
    cartAdd === 0;
  }
  else{
  document.getElementById("cartItems").innerText = Number(cartAdd) - 1;
  }  

  item1.classList.remove("showCartItem")
  item1.classList.add("cartHide")

  updatePrice();
}


function mouseOut() {
  // document.getElementById("coTest").classList.toggle("show-co");
}

//Max character input
function maxChar(tInput){
if (tInput.value.length > tInput.maxLength) 
tInput.value = tInput.value.slice(0, tInput.maxLength);
}

// Change font style
let changeFontStyle = function (font) {
  document.getElementById("tShirt").style.fontFamily
              = font.value;
}

// Change Font Size
function fontChange() {
let range = document.getElementById('myRange');
let content = document.getElementById('tShirt');
const rangevalue = range.value;
content.style.fontSize = rangevalue + "px";
}



// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  popup.classList.toggle("popup-hide");
}