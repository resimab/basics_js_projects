const convertbtn=document.getElementById("convert-btn");
const output=document.getElementById("output");
const number=document.getElementById("number");

convertbtn.addEventListener("click", function() {
    if(number.value.trim() === "") {
        output.textContent = "Please enter a valid number";
        return;
    }}
)