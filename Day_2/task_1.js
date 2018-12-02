var Task1;
(function (Task1) {
    function processInput(inputStr) {
        var lineArray = inputStr.split("\n");
        //let checksum: number = 0;
        var twoCount = 0;
        var threeCount = 0;
        lineArray.forEach(function (line) {
            var letterSumObj = line
                .split("")
                .reduce(function (total, letter) {
                total[letter] ? total[letter]++ : (total[letter] = 1);
                return total;
            }, {});
            var twoCountFound = false;
            var threeCountFound = false;
            Object.keys(letterSumObj).forEach(function (letter) {
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
        var checksum = twoCount * threeCount;
        return checksum;
    }
    console.log("Answer:", processInput("abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab"), "Expected:", 12);
    var fs = require("fs");
    var input = fs.readFileSync("./Day_2/input.txt", "utf8");
    console.log("Answer:", processInput(input));
})(Task1 || (Task1 = {}));
//# sourceMappingURL=task_1.js.map