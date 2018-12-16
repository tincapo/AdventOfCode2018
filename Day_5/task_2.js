var Task2;
(function (Task2) {
    function processInput(inputStr) {
        const input = inputStr.split("\n")[0];
        let shortestPolymer = 11264;
        for (let c = 97; c < 97 + 26; c++) {
            const regex = new RegExp("[" + String.fromCharCode(c) + "]", "gmi");
            const modifiedInput = input.replace(regex, "");
            let inputArr = modifiedInput.split("");
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
            if (inputArr.length < shortestPolymer) {
                shortestPolymer = inputArr.length;
            }
        }
        return shortestPolymer;
    }
    console.log("Answer:", processInput("dabAcCaCBAcCcaDA"), "Expected:", 4);
    let fs = require("fs");
    let input = fs.readFileSync("./Day_5/input.txt", "utf8");
    console.log("Answer:", processInput(input));
})(Task2 || (Task2 = {}));
//# sourceMappingURL=task_2.js.map