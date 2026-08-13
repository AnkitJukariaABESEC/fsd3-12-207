import {writeFile, appendFile,readFile} from "fs/promises";

// await writeFile("hello.txt", "JS is tough");
// write file creates new file and write the content,it deletes the previous code if written in file
// append file adds new content in the existing file

// await appendFile("hello.txt","\nFS is much easy than others");
// await appendFile("hello.txt","\n Ankit Jukaria");
// await appendFile("hello.txt","\n🤑 ");

const content=await readFile("hello.txt","utf-8");
console.log(content);