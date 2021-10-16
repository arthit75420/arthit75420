// n^2 christmas

const christmas = (dept) => {
  let strPrint = "";
  for (let i = 0; i < dept; i++) {
    for (let j = 0; j < dept * 2; j++) {
      if (j < dept - i || j > dept + i) strPrint += " ";
      else strPrint += "*";
    }
    strPrint += "\r\n";
  }
  return strPrint;
};

console.time("christmas");
for (let i = 0; i < 10; i++) console.log(christmas(i));
console.timeEnd("christmas");


// recursive function christmas

const recursiveFunctionChristmas = (dept, i = 0, j = 0, strPrint = "") => {
  if(i === dept || dept === 0) return strPrint;
  if (j < dept - i || j > dept + i) strPrint += " ";
  else strPrint += "*";
  
  if (j === dept * 2)
    return recursiveFunctionChristmas(dept, i + 1, 0, strPrint + "\r\n");
  return recursiveFunctionChristmas(dept, i, j + 1, strPrint);
};

console.time("christmas");
for (let i = 0; i < 10; i++) console.log(recursiveFunctionChristmas(i));
console.timeEnd("christmas");
