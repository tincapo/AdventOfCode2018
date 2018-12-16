namespace Task1 {
  function processInput(inputStr: string): number {
    const lineArray: string[] = inputStr.split("\n");
    // The below approach doesn't work for some reason...
    // let grid = new Array(8).fill(new Array(8).fill(0));
    // Example grid.
    /* let grid = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ]; */
    const gridXsize = 1000;
    const gridYsize = 1000;
    let grid = [];
    for (let x = 0; x <= gridXsize; x++) {
      grid[x] = [];
      for (let y = 0; y <= gridYsize; y++) {
        grid[x][y] = 0;
      }
    }

    lineArray.forEach((line: string) => {
      const claimId = parseInt(
        line.slice(line.indexOf("#") + 1, line.indexOf("@"))
      );
      const x = parseInt(line.slice(line.indexOf("@") + 1, line.indexOf(",")));
      const y = parseInt(line.slice(line.indexOf(",") + 1, line.indexOf(":")));
      const xSize = parseInt(
        line.slice(line.indexOf(":") + 1, line.indexOf("x"))
      );
      const ySize = parseInt(line.slice(line.indexOf("x") + 1));

      for (let posX = x; posX < x + xSize; posX++) {
        for (let posY = y; posY < y + ySize; posY++) {
          grid[posX][posY] = grid[posX][posY] + 1;
        }
      }
    });

    // Ilustrate example grid 8x8.
    /* grid.forEach(line => {
      console.log(line.join(" "));
    }); */

    let count = 0;
    for (let x = 0; x <= gridXsize; x++) {
      for (let y = 0; y <= gridYsize; y++) {
        if (grid[x][y] >= 2) count++;
      }
    }

    return count;
  }

  console.log(
    "Answer:",
    processInput("#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2"),
    "Expected:",
    4
  );

  let fs = require("fs");
  let input = fs.readFileSync("./Day_3/input.txt", "utf8");
  console.log("Answer:", processInput(input));
}
