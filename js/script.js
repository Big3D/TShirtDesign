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
    let shirtColor = document.getElementById("shirtimg").src;
    console.log(shirtColor);

    if (color === "grey"){
        shirtColor = document.getElementById("greyshirt").src;

        console.log("shirt color is grey");
       }
    else if (color === "blue"){
        console.log("shirt color is blue");
       }
    else if (color === "white"){
        console.log("shirt color is white");
       }
    else{
           console.log("no color selected")
       }

}




var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// $('#ex1').slider({
// 	formatter: function(value) {
// 		return 'Current value: ' + value;
// 	}
// });

// Without JQuery
// var slider = new Slider('#ex1', {
// 	formatter: function(value) {
// 		return 'Current value: ' + value;
// 	}
// });
slider.oninput = function() {
  output.innerHTML = this.value;
}
   
slider.oninput = function() {
    console.log(slider.value);
  output.innerHTML = this.value;
}