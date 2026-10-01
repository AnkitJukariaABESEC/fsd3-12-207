import http from "http";
import {getAllUsers,getUserById,updateUser,addUser,deleteUser} from "./users.js";
const server=http.createServer((req,res)=>{
    if((req.url==="/api/users"&& req.method==="GET")){
        res.end(JSON.stringify(getAllUsers()));
    }

    else if((req.url==="/api/users"&& req.method==="POST")){
        // res.end(JSON.stringify({msg:"add user"}));
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            const user = JSON.parse(body);
            console.log(user);
            const userCreated=addUser(user);
            res.end(JSON.stringify({msg:"user added",userCreated}));
        });
    }

    else if((req.url.startsWith("/api/users/")&& req.method==="GET")){
        const userId=Number(req.url.split('/').pop())
        const userFound=getUserById(userId);
        if(!userFound){
            res.end(JSON.stringify({msg:'User not found'}));
        }
        res.end(JSON.stringify({msg:`Showing details of user with id ${userId}`}));
    }
    // function banayenge

    else if((req.url==="/api/users/1"&& req.method==="PUT")){
        res.end(JSON.stringify({msg:"Update user 1"}));
    }

    else if((req.url==="/api/users/1"&& req.method==="DELETE")){
        res.end(JSON.stringify({msg:"remove 1"}));
    }

    else{
        res.statusCode=404;
        res.end();
    }
});

server.listen(3000,()=>console.log("prg7 is running"));