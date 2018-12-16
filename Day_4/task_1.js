var Task1;
(function (Task1) {
    function processInput(inputStr) {
        const lineArray = inputStr.split("\n");
        let lineArraySorted = lineArray.sort((a, b) => {
            let aDate = parseDate(a);
            let bDate = parseDate(b);
            if (aDate > bDate) {
                return 1;
            }
            if (aDate < bDate) {
                return -1;
            }
            return 0;
        });
        let guardSummary = {};
        let currentGuardId;
        let currentGuardSleepStart;
        let currentGuardSleepEnd;
        lineArraySorted.forEach(line => {
            if (line.indexOf("Guard") > -1) {
                currentGuardId = parseInt(line.slice(line.indexOf("#") + 1, line.indexOf(" begins")));
                if (!guardSummary[currentGuardId]) {
                    guardSummary[currentGuardId] = {};
                }
                if (!guardSummary[currentGuardId].totalSleepTime) {
                    guardSummary[currentGuardId].totalSleepTime = 0;
                }
                if (!guardSummary[currentGuardId].sleepPattern) {
                    guardSummary[currentGuardId].sleepPattern = {};
                }
            }
            if (line.indexOf("falls asleep") > -1) {
                currentGuardSleepStart = parseMinutes(line);
            }
            if (line.indexOf("wakes up") > -1) {
                currentGuardSleepEnd = parseMinutes(line);
                guardSummary[currentGuardId].totalSleepTime +=
                    currentGuardSleepEnd - currentGuardSleepStart;
                for (let x = currentGuardSleepStart; x < currentGuardSleepEnd; x++) {
                    if (guardSummary[currentGuardId].sleepPattern[x]) {
                        guardSummary[currentGuardId].sleepPattern[x]++;
                    }
                    else {
                        guardSummary[currentGuardId].sleepPattern[x] = 1;
                    }
                }
            }
        });
        let id;
        let highestTotalMinutesSleep = 0;
        let pattern;
        Object.keys(guardSummary).forEach(key => {
            if (guardSummary[key].totalSleepTime > highestTotalMinutesSleep) {
                highestTotalMinutesSleep = guardSummary[key].totalSleepTime;
                pattern = guardSummary[key].sleepPattern;
                id = parseInt(key);
            }
        });
        let highestMinute = 0;
        let highestMinuteScore = 0;
        Object.keys(pattern).forEach(key => {
            if (pattern[key] > highestMinuteScore) {
                highestMinuteScore = pattern[key];
                highestMinute = parseInt(key);
            }
        });
        return id * highestMinute;
    }
    function parseDate(line) {
        return new Date(line.slice(line.indexOf("[") + 1, line.indexOf("]")));
    }
    function parseMinutes(line) {
        return parseInt(line.slice(line.indexOf(":") + 1, line.indexOf("]")));
    }
    console.log("Answer:", processInput(`[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up`), "Expected:", 240);
    let fs = require("fs");
    let input = fs.readFileSync("./Day_4/input.txt", "utf8");
    console.log("Answer:", processInput(input));
})(Task1 || (Task1 = {}));
//# sourceMappingURL=task_1.js.map