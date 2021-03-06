var Task2;
(function (Task2) {
    function processInput(inputStr) {
        const lineArray = inputStr.split("\n");
        let sum = 0;
        let frequencyMatches = {};
        let foundTwice = false;
        while (!foundTwice) {
            for (let i = 0; i < lineArray.length; i++) {
                const line = lineArray[i];
                if (line[0] === "+") {
                    const value = parseInt(line.slice(1));
                    sum += value;
                    if (frequencyMatches[sum]) {
                        foundTwice = true;
                        break;
                    }
                    else {
                        frequencyMatches[sum] = 1;
                    }
                }
                if (line[0] === "-") {
                    const value = parseInt(line.slice(1));
                    sum -= value;
                    if (frequencyMatches[sum]) {
                        foundTwice = true;
                        break;
                    }
                    else {
                        frequencyMatches[sum] = 1;
                    }
                }
            }
        }
        return sum;
    }
    console.log("Answer:", processInput("+1\n-2\n+3\n+1"), "Expected:", 2);
    let fs = require("fs");
    let input = fs.readFileSync("./Day_1/input.txt", "utf8");
    console.log("Answer:", processInput(input));
})(Task2 || (Task2 = {}));
//# sourceMappingURL=task_2.js.map