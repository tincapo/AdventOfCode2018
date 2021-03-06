namespace Task1 {
  function processInput(inputStr: string): number {
    const input: string = inputStr.split("\n")[0];

    let inputArr = input.split("");
    let pairFound = true;

    while (pairFound) {
      pairFound = false;

      inner_loop: for (let i = 0; i < inputArr.length - 1; i++) {
        if (inputArr[i] === inputArr[i].toLowerCase()) {
          if (inputArr[i] === inputArr[i + 1].toLowerCase()) {
            if (inputArr[i + 1] === inputArr[i + 1].toUpperCase()) {
              pairFound = true;
              inputArr.splice(i, 2);
              break inner_loop;
            }
          }
        }
        if (inputArr[i] === inputArr[i].toUpperCase()) {
          if (inputArr[i] === inputArr[i + 1].toUpperCase()) {
            if (inputArr[i + 1] === inputArr[i + 1].toLowerCase()) {
              pairFound = true;
              inputArr.splice(i, 2);
              break inner_loop;
            }
          }
        }
      }
    }

    return inputArr.length;
  }

  console.log("Answer:", processInput("dabAcCaCBAcCcaDA"), "Expected:", 10);

  let fs = require("fs");
  let input = fs.readFileSync("./Day_5/input.txt", "utf8");
  console.log("Answer:", processInput(input));
}
