namespace Task2 {
  function processInput(inputStr: string): string {
    const lineArray: string[] = inputStr.split("\n");
    let matches: string[] = [];

    lineArray.forEach((line1: string) => {
      lineArray.forEach((line2: string) => {
        let diffCount: number = 0;
        for (let i = 0; i < line1.length; i++) {
          if (line1[i] !== line2[i]) {
            diffCount++;
          }
          if (line1.length === i + 1 && diffCount === 1) {
            matches.push(line1);
          }
        }
      });
    });

    return matches[0]
      .split("")
      .filter(x => matches[1].split("").includes(x))
      .join("");
  }

  console.log(
    "Answer:",
    processInput("abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxyz"),
    "Expected:",
    "fgij"
  );

  let fs = require("fs");
  let input = fs.readFileSync("./Day_2/input.txt", "utf8");
  console.log("Answer:", processInput(input));
}
