
const checkbtn = document.getElementById("check-btn")
const textInput = document.getElementById("text-input")
const result = document.getElementById("result")

checkbtn.addEventListener('click', function() {
    const inputValue=textInput.value.trim();
    if (!inputValue) {
      alert('Please input a value');
    }
  const cleaned = inputValue.replace(/[^a-z0-9]/gi, '').toLowerCase();// Remove non-alphanumeric characters and convert to lowercase
  const reversed = cleaned.split('').reverse().join('');//reverse  method is for arrays not strings, so we use split to convert string to array, reverse it and then join it back to a string

  if (cleaned === reversed) {
    result.textContent = `${inputValue} is a palindrome`;
  } else {
    result.textContent = `${inputValue} is not a palindrome`;
  }
});
  