// n^2 christmas tree

const christmasTree = (depth) => {
  let strPrint = "";
  for (let row = 0; row < depth; row++) {
    for (let col = 0; col < depth * 2; col++) {
      if (col < depth - row || col > depth + row) strPrint += " ";
      else strPrint += "*";
    }
    strPrint += "\r\n";
  }
  return strPrint;
};

console.time("christmas");
for (let i = 0; i < 10; i++) console.log(christmasTree(i));
console.timeEnd("christmas");

// recursive function christmas tree

const recursiveFunctionChristmasTree = (depth, row = 0, col = 0, strPrint = "") => {
  if(row === depth || depth === 0) return strPrint;
  if (col < depth - row || col > depth + row) strPrint += " ";
  else strPrint += "*";
  if (col === depth * 2)
    return recursiveFunctionChristmasTree(depth, row + 1, 0, strPrint + "\r\n");
  return recursiveFunctionChristmasTree(depth, row, col + 1, strPrint);
};

console.time("christmas");
for (let i = 0; i < 10; i++) console.log(recursiveFunctionChristmasTree(i));
console.timeEnd("christmas");
