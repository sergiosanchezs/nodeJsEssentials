// console.log(process.pid);
// console.log(process.versions.node);
// console.log(process.argv);

// ===========================================================
// Array Destructuring
// const [ , , firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);
// Testing in the Terminal: node globalProcess Sergio Sanchez

// ===========================================================
const grab = flag => {
  let idxAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[idxAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

// Testing in the Terminal: 
// node globalProcess --user Sergio --greeting "Hidely Hoe"
// node globalProcess --greeting "Hidely Hoe" --user Sergio


