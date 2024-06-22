let Input1 = document.getElementById("input-1");
let Input2 = document.getElementById("input-2");
let Result = document.getElementById("result");


// ADDITION 
function Plus(){
    if(Input1.value === "" && Input2.value === ""){
        alert("Please enter Value 1 and Value 2");
        Result.innerHTML = "";
    }
    
    else if(Input1.value && Input2.value === ""){
        alert("Please enter Value 2");
        Result.innerHTML = ""
    }
    else if (Input1.value === "" && Input2.value){
        alert("Please enter Value 1");
        Result.innerHTML = ""
    }
    else{
    Result.innerHTML = Number(Input1.value) + Number(Input2.value);
    Input1.value = "";
    Input2.value = "";}
}
// SUBTRACTION 
function Minus(){
    if(Input1.value === "" && Input2.value === ""){
        alert("Please enter Value 1 and Value 2");
        Result.innerHTML = "";
    }
    
    else if(Input1.value && Input2.value === ""){
        alert("Please enter Value 2");
       Result.innerHTML = ""
    }
    else if (Input1.value === "" && Input2.value){
        alert("Please enter Value 1");
        Result.innerHTML = ""
    }
    else{
    Result.innerHTML = Number(Input1.value) - Number(Input2.value);
    Input1.value = "";
    Input2.value = "";}
}
// MULTIPLICATION 
function Multi(){
    if(Input1.value === "" && Input2.value === ""){
        alert("Please enter Value 1 and Value 2");
        Result.innerHTML = "";
    }
    
    else if(Input1.value && Input2.value === ""){
        alert("Please enter Value 2");
        Result.innerHTML = ""
    }
    else if (Input1.value === "" && Input2.value){
        alert("Please enter Value 1");
        Result.innerHTML = ""
    }
    else{
        Result.innerHTML = Number(Input1.value) * Number(Input2.value);
        Input1.value = "";
        Input2.value = "";
    }
}
// DIVISION 
function Div(){

    if(Input1.value === "" && Input2.value === ""){
        alert("Please enter Value 1 and Value 2");
        Result.innerHTML = "";
    }
    
    else if(Input1.value && Input2.value === ""){
        alert("Please enter Value 2");
        Result.innerHTML = ""
    }
    else if (Input1.value === "" && Input2.value){
        alert("Please enter Value 1");
        Result.innerHTML = ""
        
    }
    else if(Input1.value == 0 && Input2.value == 0){
        alert("in Mathematically 0/0 cannot be calculated");
        Input1.value = "";
        Input2.value = "";
        Result.innerHTML = "";
    }
    else{
        Result.innerHTML = Number(Input1.value) / Number(Input2.value);
        Input1.value = "";
        Input2.value = "";
    }
   
}

Input2.onkeydown = function(event) {
    
    if(isNaN(event.key) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  };
Input1.onkeydown = function(event) {
    
    if(isNaN(event.key) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  };
// RESET BUTTON 
function Reset(){
    Input1.value = "";
    Input2.value = "";
    Result.innerHTML = "";
}



  