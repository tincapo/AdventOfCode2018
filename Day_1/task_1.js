var Task1;
(function (Task1) {
    function processInput(inputStr) {
        const lineArray = inputStr.split("\n");
        let sum = 0;
        lineArray.forEach((line) => {
            if (line[0] === "+") {
                const value = parseInt(line.slice(1));
                sum += value;
            }
            if (line[0] === "-") {
                const value = parseInt(line.slice(1));
                sum -= value;
            }
        });
        return sum;
    }
    console.log("Answer:", processInput("+1\n+1\n+1"), "Expected:", 3);
    console.log("Answer:", processInput("+1\n+1\n-2"), "Expected:", 0);
    console.log("Answer:", processInput("-1\n-2\n-3"), "Expected:", -6);
    let fs = require("fs");
    let input = fs.readFileSync("./Day_1/input.txt", "utf8");
    console.log("Answer:", processInput(input));
})(Task1 || (Task1 = {}));
//# sourceMappingURL=task_1.js.map