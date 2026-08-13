import{stat} from "fs/promises";

const fstat=await stat("file1.js");
console.log("file size",fstat.size,"bytes");
console.log(`is file:${fstat.isFile()}`);
console.log(`is folder:${fstat.isDirectory()}`);
//agar operating system ki file hogi to chalega-syslink
console.log(`is syslink:${fstat.isSymbolicLink()}`); 
console.log(`is Created on:${fstat.birthtime}`);
console.log(`Last Used:${fstat.attime}`);
console.log(``);
console.log(``);