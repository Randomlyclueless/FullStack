const fs = require("fs");
// fs stands for file system
const hello = "Hello World";
console.log(hello);

//  Lecture 8- Blocking/Synchronous way
// Reading the txt file usingf fs module
const textIn = fs.readFileSync("input.txt", "utf-8");
console.log(textIn);

const textout = `this is what we know about the avacado : ${textIn}.\nCreated on ${Date.now()}`;
// Writing the txt file using fs module
fs.writeFileSync("Output.txt", textout);
console.log("File written successfully");
console.log(
  "-----------------------------------------------------------------------"
);
//Lecture 9-Non-Blocking/ASynchronous way
fs.readFile("start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error");
  fs.readFile(`${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your File has been written");
      });
    });
  });
});
console.log("Will read file");
