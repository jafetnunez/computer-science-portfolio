// it adds the calculater
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

// this makes the calculater get the ansewr
button.addEventListener("click", doMath);

//this does the math in the calculater
function doMath() {
    // it add numbers
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    //subtracts numbers
     if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    //divide numbers
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;    
    }
    //multiplys numbers
     if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    
     }
     //it finds the percent of a number
      if  (dropdown.value == "%"){
        answer = parseInt(input1.value) % parseInt(input2.value);
        display.innerHTML = answer;
        
      }
      //it multiply exponents
       if  (dropdown.value == "^"){
        answer = Math.pow( parseInt(input1.value),  parseInt(input2.value) );
        display.innerHTML = answer;
        
      }
}
 