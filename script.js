function toCase(text) {
  return text.toLowerCase() + "-" + text.toUpperCase();
}

// Do not change the code below
const text = prompt("Enter text:");
alert(toCase(text));