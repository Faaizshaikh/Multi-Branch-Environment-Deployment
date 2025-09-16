function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

// Example run
console.log("2 + 3 =", add(2, 3));
console.log(greet("World"));

module.exports = { add, greet };
