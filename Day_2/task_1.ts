namespace Task1 {
  function processInput(inputStr: string): number {
    const lineArray: string[] = inputStr.split("\n");
    //let checksum: number = 0;
    let twoCount: number = 0;
    let threeCount: number = 0;

    lineArray.forEach((line: string) => {
      const letterSumObj: object = line
        .split("")
        .reduce((total: object, letter: string) => {
          total[letter] ? total[letter]++ : (total[letter] = 1);

          return total;
        }, {});

      let twoCountFound: boolean = false;
      let threeCountFound: boolean = false;
      Object.keys(letterSumObj).forEach(letter => {
        if (letterSumObj[letter] === 2 && !twoCountFound) {
          twoCount++;
          twoCountFound = true;
        }
        if (letterSumObj[letter] === 3 && !threeCountFound) {
          threeCount++;
          threeCountFound = true;
        }
      });
    });

    const checksum: number = twoCount * threeCount;

    return checksum;
  }

  console.log(
    "Answer:",
    processInput("abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab"),
    "Expected:",
    12
  );

  let fs = require("fs");
  let input = fs.readFileSync("./Day_2/input.txt", "utf8");
  console.log("Answer:", processInput(input));
}
