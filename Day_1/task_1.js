function processInput(inputStr) {
    var lineArray = inputStr.split("\n");
    var sum = 0;
    lineArray.forEach(function (line) {
        if (line[0] === "+") {
            var value = parseInt(line.slice(1));
            sum += value;
        }
        if (line[0] === "-") {
            var value = parseInt(line.slice(1));
            sum -= value;
        }
    });
    return sum;
    /* let array = inputStr.split('').map(c => parseInt(c));
  
      let sum = 0;
  
      for (let i = 0; i < array.length; i++) {
          let currentDigit = array[i];
          let nextDigit = array.length - 1 === i ? array[0] : array[i + 1]; // Needs to wrap if there is no next digit in array.
  
          if (currentDigit === nextDigit) {
              sum += currentDigit;
          }
      }
  
      return sum; */
}
console.log("Answer:", processInput("+1\n+1\n+1"), "Expected:", 3);
console.log("Answer:", processInput("+1\n+1\n-2"), "Expected:", 0);
console.log("Answer:", processInput("-1\n-2\n-3"), "Expected:", -6);
var fs = require("fs");
var input = fs.readFileSync("./Day_1/input.txt", "utf8");
console.log("Answer:", processInput(input));
//# sourceMappingURL=task_1.js.map