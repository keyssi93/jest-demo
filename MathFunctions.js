// MathFunctions.js
const fetch = require("node-fetch");

const mathFunctions = {
    sum: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    mul: (num1, num2) => num1 * num2,
    div: (num1, num2) => num1 / num2,
    apiCall: () =>
      fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .catch(err => console.error(err)),
}

module.exports = mathFunctions;
