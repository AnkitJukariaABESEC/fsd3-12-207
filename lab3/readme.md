# HTTP Module
It is built in Node.js Module which allows developers to  create web server and web client without installing any external package.
One of the most important module in Node.js, originally designed for building scalable network application and web servers.

1. create web servers
2. handle client request
3. Build REST APIs
4. Non-Blocking I/O
5. Foundation of Express.js

npm init -y ->for project boilerplate

npm i<package Name>-> install any package

npm uninstall<package Name> uninstall

npm i<package Name> -D(dev dependency)

npm start will execute your node prgname

for running dev use npm run dev-> nodemon prgname

## http status codes -> res.WriteHead(), res.statusCode
- 200 -> OK
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> forbidden
- 404 -> Not found
- 500 -> Internal Server Error

Server can send  to the client
1. HTML file -> prg2,prg3
2. HTML file -> prg5
3. json data -> prg4
4. plain file
5. js file
6. any file to download
7. etc

## Type of information
1. text/html -> for html file/contents
2. text/json -> for json data
3. text/css -> for css file/contents
4. application -> for file
5. text/plain -> for plain text file

## Note: .gitignore -> this file contains the list of files or folder that is not added to git, these files/folder will no push on GitHub

