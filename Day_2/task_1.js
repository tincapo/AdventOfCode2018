var Task1;
(function (Task1) {
    function processInput(inputStr) {
        const lineArray = inputStr.split("\n");
        //let checksum: number = 0;
        let twoCount = 0;
        let threeCount = 0;
        lineArray.forEach((line) => {
            const letterSumObj = line
                .split("")
                .reduce((total, letter) => {
                total[letter] ? total[letter]++ : (total[letter] = 1);
                return total;
            }, {});
            let twoCountFound = false;
            let threeCountFound = false;
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
        const checksum = twoCount * threeCount;
        return checksum;
    }
    console.log("Answer:", processInput("abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab"), "Expected:", 12);
    let fs = require("fs");
    let input = fs.readFileSync("./Day_2/input.txt", "utf8");
    console.log("Answer:", processInput(input));
})(Task1 || (Task1 = {}));
//# sourceMappingURL=task_1.js.map