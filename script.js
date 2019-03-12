// To select the button
const colorBtn = document.querySelector('.colorBtn');

// To select the body for background color change
const bodyColorize = document.querySelector('body');

// Select the span where hex value will be injected
const hex = document.querySelector('.hex');

// Create a function that generates random colors
function colors() {
  const rgb = () => ('0' + (Math.random() * 256).toString(16)).slice(-2);
  let hexCol = `#${rgb()}${rgb()}${rgb()}`;
  return hexCol;
}

//Event listener with changeColor callback function
colorBtn.addEventListener('click', changeColor);

// changeColor function call
function changeColor () {
  const hexColor = colors();
  bodyColorize.style.backgroundColor = hexColor;
  hex.innerHTML = hexColor;
}
console.log(hexColor)