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