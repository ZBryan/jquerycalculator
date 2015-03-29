$(document).ready(function(){
  var testNumLength = function(number) {
    console.log(number)
    number = parseFloat(number).toFixed(2);
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length-9,9));
      if (number.length > 15) {
        console.log(number)
        number = "";
        totaldiv.text("Err");
      }
    }
  };
  var number = "";
  var newnumber = "";
  var operator = "";
  var totaldiv = $("#total");
  totaldiv.text("0");
  $("#numbers a").not("#clear,#clearall").on("click", function(){
    number += $(this).text();
    totaldiv.text(number);
    console.log(number);
    testNumLength(number);
  });
  $("#operators a").not("#equals").on("click", function(){
    operator = $(this).text();
    if(newnumber && number) {
      doMath();
    } else if (number) {
    newnumber = number;
    number = "";
    }
    totaldiv.text(operator);
  });
  $("#clear,#clearall").on("click", function(){
    number = "";
    totaldiv.text("0");
    if ($(this).attr("id") === "clearall") {
      newnumber = "";
    }
  });

  var doMath = function(){
    if(number){
      console.log("number: " + number, "newnumber: " + newnumber);
      number = parseFloat(number);
      newnumber = parseFloat(newnumber);
      if (operator === "+"){
      number = (newnumber + number)//.toString();
    } else if (operator === "-"){
      number = (newnumber - number).toString();
    } else if (operator === "/"){
      number = (newnumber / number).toString();
    } else if (operator === "*"){
      number = (newnumber * number).toString();
    }
    var answer = parseFloat(number).toFixed(3);
    totaldiv.text(answer);
    testNumLength(number);
    newnumber = "";
  }
};
$("#equals").on("click", doMath);
});