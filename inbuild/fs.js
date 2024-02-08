const fs = require("fs");

// const data="content of file 1";
// fs.writeFile("./file1.txt",data,(err) =>{
//     console.log("completed file1.txt");
// })

//const data2 = "content of file2";

// for(let i=1;i<=10;i++){
//     fs.writeFile(`./backup/text-${i}.html`,data2,(err)=>{
//         console.log(`complete backup text-${i}.html`);
//     });

// }

//create files and give data in comand line
// const [, , n] = process.argv;
// for (let i = 1; i <= n; i++) {
//   fs.writeFile(`./backup20/text-${i}.html`, data2, (err) => {
//     console.log(`complete backup text-${i}.html`);
//   });
// }

//read files
// fs.readFile("./vijay.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("error ❎ ",err)
//     }else{
//         console.log("content of filr is:",data);
//     }
// })

//edit in existing file
// const vijay1="\n he started his political party"
// fs.appendFile("./vijay.txt", vijay1, (err) => {
//   console.log("finish writing vijay.txt");
// });

//read folder detail
// fs.readdir("./backup20",(err,files)=>{
//     console.log("backup20 files",files)
// })

//delete file
// fs.unlink("./vijay.txt",(err)=>{
//     console.log("deleted")
// })

//delete file using backup
// fs.readdir("./backup20", (err, data) => {
//   data.forEach((filesname) => {
//     fs.unlink(`./backup20/${filesname}`, (err) => {
//       console.log("delete successfully", filesname);
//     });
//   });
// });


const[, ,n]=process.argv;

for (let i = 1; i <= n; i++) {
    const data=`content of file${i}`
  fs.writeFileSync(`./backup/file${i}.html`, data, (err) => {
    console.log(`writing is completed file${i}.html`);
    console.log("complete file__",i)
  });
}

// const data1="\n file 8 is very imp";
// fs.appendFile("./backup20/file8.html",data1,(err)=>{
//     console.log("complete appending file8.html")
// })