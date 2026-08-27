import { writeFile, readFile, appendFile } from "fs/promises"; // import fs from 'fs/promises';
 

// await writeFile("stud.txt","Ravikant Singh\nRollNo:82");
// console.log("File Written");
// const data = await readFile("stud.txt",'utf-8');
// console.log(`file contents: ${data}`);
const addContent = async(fname, content) =>{ //async ko call karne ke liye await use karte hain
     await writeFile(fname,content, "utf8");
     console.log(`${content} written in file : ${fname}`);
};

const readContent = async(fname) => {
    const data = await readFile(fname,'utf-8');//jis bhi function ke andar await use hua hai vo async hona chahiye
    return data;
};

const appendData = async (fname,content) => {// append content 
    await appendFile(fname,"\n"+content);
    console.log("data appended");
}

await addContent("notes.txt","FS is easy in JS");
console.log("Contents\n",await readContent("notes.txt"));
await appendData("notes.txt","it can add, read and update content");
console.log("Updated Contents\n", await readContent("notes.txt"));


