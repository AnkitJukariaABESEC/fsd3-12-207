# Express

Fast, unopinionated, minimalist web framework for Node.js

# Steps
1. Create project folder(lab5)
2. Create two folder(frontend,backend) in roor(lab5)
3. Open terminal and reach to backend by

```
cd..
cd lab5
cd backend
```
4. type `npm init -y`
5. install nodemon `npm i nodemon -d`
6. install express `npm i express`
7. update backend/package.json
-  change type `type:"module"`
- change script
``` script:{
    "start":"node app.js",
    "dev":"nodemon prg1.js"
}
```
8. add `lab5/backend/node_modules` to .gitignore
9. create `prg1.js` in backend
10. Write the script below to start express server
```
import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello Express");
});
// this line must be last line👇🏻
app.listen(4444,()=>console.log("prg1 is running at 4444"));
 ```

# Static import
- We can add any static html pages with the help of express.static method
- Express supports middleware,when we have to execute some functions before server execution then we use middleware
- app.use always applied to insert any middleware