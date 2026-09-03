import http from "http";

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"});
    console.log("Client URL:",req.url);
    // Writehead se batate hai client ko ki tumhare pass kya aane wala hai

    const product = [
      {
        name: "Iphone",
        price: 85000,
        qty: 2,
        discount: 15,
      },
      {
        name: "macbook",
        price: 85000,
        qty: 2,
        discount: 30,
      },
      {
        name:"tablet",
        price:16000,
        qty:1,
        discount:20,
      }
    ];
    res.end(JSON.stringify(product));
});

server.listen(3000,()=>console.log("prg4 is running at 3000..."));