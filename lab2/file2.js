import {writeFile, appendFile,readFile,deleteFile} from "fs/promises";


const writeData=async(filename,content)=>{
try {
    await writeFile(filename,content);
} catch (error) {
    console.log(error.message);
}
};
const appendData=async(filename,content)=>{
try {
    await appendFile(filename,content);
} catch (error) {
    console.log(error.message);
}
};
const readData=async(filename)=>{
    try{
        return await readFile(filename,"utf-8");
    }catch(e){
        console.log(e.message);
    }finally{
        console.log("read data finished");
    }
};
const deleteFile=async(filename)=>{
    try{
        await unlink(filename);
    }catch(error){
        console.log("File not found");
    }
};
// If a function uses await keyword then the function must be async
// console.log(writeData("new.txt","Hello my name is Ankit Jukaria"));
// console.log(appendData("new.txt","\n I study in ABES Engineering College"));
// try us code ko rakhega jismai exception ane ki sambhavna hogi
console.log(readData("file3.js"));