import http from "http"
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h3>Hello Client</h3>");
    console.log("Server hit by client");
});
server.listen(444,()=>{
    console.log("Server is running...");
})
// req-request kaha se aya hai batayega
// npm init -y ye package.json banayega taki hume bar bar server ko start aur stop na karna pade
// npm-node package manager(install,uninstall)
// npm i nodemon -D