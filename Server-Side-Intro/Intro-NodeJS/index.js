/* File system library, think of this as an import statement */
const fs = require("fs");

/* Synchronous, copying file1.txt contents into file2.txt, if it doesn't exist then it will create a new */
fs.copyFileSync("file1.txt", "file2.txt");


/* Using the superheroes dependency we just created */
const heros = require("superheroes");

var names = heros.all;
console.log(names);