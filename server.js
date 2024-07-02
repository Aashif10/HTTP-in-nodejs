//  !  HTTP Module in Node js
// * HTTPS = It stands for Hyper text transfer protocol.
// * It defines a set of rules and regulation for communication between client and sever.
// * In nodejs we have built in http module and this module is used to create servers.

// & Fisrt import that module.
// let http=require("node:http");
// console.log(http);

// & Second step to create server.. using createserver method..
// let server = http.createServer((req, res) => {
//   console.log("Received request");
//   res.write("Server is created....\n"); // *display on UI
//   res.end("server cycle end..."); //* res.end() will kill the req and res cycle
// });
// server.listen(8000, (err) => {
//     if (err) {
//         console.log("Error",err)
//     }
//     else {
//         console.log(`Server running at http://localhost:8000`)
//     }
// })

// ! Reading HTML file
// let http = require("node:http");
// let fs = require("node:fs");

// let server = http.createServer((req, res) => {
//   //* Set the writehead
//   res.writeHead(200, "ok", { "content-type": "text/html" });
//   let readfile = fs.createReadStream("./index.html", "utf-8");
//     readfile.pipe(res);
// });
// server.listen(8000, error => {
//   if (error) throw error;
//   console.log(`Server running at http://localhost:8000`);
// });

// * First step

// let http = require("http");
// let fs = require("fs");

// * Second step

// let server=http.createServer((req,res)=>{
//     res.writeHead(200 ,"ok",{"content-type":"text/css"});

    // *  Reading the html file

//     let readHtml=fs.createReadStream("./style.css","utf-8");
//     readHtml.pipe(res);
// });

//  * Third step 

// server.listen(9000,(err)=>{
//     if (err)throw err;
//     console.log(`sever is running at http://localhost:9000`)
// });
