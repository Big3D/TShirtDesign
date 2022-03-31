// Change text on tShirt
//document.getElementById("tShirtInput").addEventListener("change", tShirtChange());

function tShirtChange(){
    console.log("function called");

    let newShirtValue = document.getElementById("tShirtInput").value;
    console.log(newShirtValue);
    let tShirtText = document.getElementById("tShirt").innerHTML;



    tShirtText = newShirtValue;
    document.getElementById("tShirt").innerHTML = tShirtText;
   
    console.log(tShirtText);    
}

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

function maxChar(tInput){
if (tInput.value.length > tInput.maxLength) 
tInput.value = tInput.value.slice(0, tInput.maxLength);
}

let changeFontStyle = function (font) {
  document.getElementById("tShirt").style.fontFamily
              = font.value;
}


// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");



// Change Font Size
function fontChange() {
  console.log("function called");
let range = document.getElementById('myRange');
console.log(range.value);
let content = document.getElementById('tShirt');
// range.addEventListener('myRange', function(){
const rangevalue = range.value;
content.style.fontsize = rangevalue + "px";
console.log(content);
// })
}