var Task2;
(function (Task2) {
    function processInput(inputStr) {
        var lineArray = inputStr.split("\n");
        var sum = 0;
        var frequencyMatches = {};
        var foundTwice = false;
        while (!foundTwice) {
            for (var i = 0; i < lineArray.length; i++) {
                var line = lineArray[i];
                if (line[0] === "+") {
                    var value = parseInt(line.slice(1));
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
                    var value = parseInt(line.slice(1));
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
    var fs = require("fs");
    var input = fs.readFileSync("./Day_1/input.txt", "utf8");
    console.log("Answer:", processInput(input));
})(Task2 || (Task2 = {}));
//# sourceMappingURL=task_2.js.map