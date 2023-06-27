//target the appropriate elements in the DOM
   let num1ID = document.getElementById("num1");
   let num2ID = document.getElementById("num2");

//validate that the input is numeric
//(must call this function within the event listeners)
//

 function validateNum(num1Value, num2Value) {
    if (isNaN(num1Value) || isNaN(num2Value)) {
        return false;
    } else {
        return true;
    }
 }

 //event listener for the add button
 document.getElementById("addButton").onclick = addNums;
 function addNums() {
    let num1Value = +num1ID.value;
    let num2Value = +num2ID.value;
    if (validateNum(num1Value, num2Value)) {
        let resultValue = num1Value + num2Value;     
        resultField.value = resultValue;
        statusField.value = "Addition successful."
    } else 
        statusField.value = "Invalid input.  Please enter numeric values."; 
 }

//event listener for the subtract button
document.getElementById("subButton").onclick = subNums;
function subNums() {
    let num1Value = +num1ID.value;
    let num2Value = +num2ID.value;
    if (validateNum(num1Value, num2Value)) {
        let resultValue = num1Value - num2Value;     
        resultField.value = resultValue;
        statusField.value = "Subtraction successful."
    } else 
        statusField.value = "Invalid input.  Please enter numeric values."; 
 }

 //event listener for the multiply button
document.getElementById("multButton").onclick = multNums;
function multNums() {
    let num1Value = +num1ID.value;
    let num2Value = +num2ID.value;
    if (validateNum(num1Value, num2Value)) {
        let resultValue = num1Value * num2Value;     
        resultField.value = resultValue;
        statusField.value = "Multiplication successful."
    } else 
        statusField.value = "Invalid input.  Please enter numeric values."; 
 }


 //event listener for the divide button
 document.getElementById("divButton").onclick = divNums;
 function divNums() {
     let num1Value = +num1ID.value;
     let num2Value = +num2ID.value;
     if (validateNum(num1Value, num2Value)) {
         if (num2Value == 0) {
            resultField.value = "Undefined"  
            statusField.value = "Cannot divide by zero.  Please enter a non-zero value for the second number.";
            return;
         }
         let resultValue = num1Value / num2Value;     
         resultField.value = resultValue;
         statusField.value = "Division successful."
     } else 
         statusField.value = "Invalid input.  Please enter numeric values."; 
  }

 //event listener for the modulo button
 document.getElementById("modButton").onclick = modNums;
 function modNums() {
     let num1Value = +num1ID.value;
     let num2Value = +num2ID.value;
     if (validateNum(num1Value, num2Value)) {
         if (num2Value == 0) {
            resultField.value = "Undefined"  
            statusField.value = "Cannot perform Modulo of zero.  Please enter a non-zero value for the second number.";
            return;
         }
         let resultValue = num1Value % num2Value;     
         resultField.value = resultValue;
         statusField.value = "Modulo successful."
     } else 
         statusField.value = "Invalid input.  Please enter numeric values."; 
  }