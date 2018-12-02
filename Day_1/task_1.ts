function processInput(inputStr: string): number {
  const lineArray = inputStr.split("\n");
  let sum: number = 0;

  lineArray.forEach((line: string) => {
    if (line[0] === "+") {
      const value: number = parseInt(line.slice(1));
      sum += value;
    }
    if (line[0] === "-") {
      const value: number = parseInt(line.slice(1));
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

let fs = require("fs");
let input = fs.readFileSync("./Day_1/input.txt", "utf8");
console.log("Answer:", processInput(input));
