const http=require('http');
const fs = require ('fs');

const host='localhost';
const port = 5353;

http.createServer((request,response)=>{
    response.write(info);
    return response.end(fs.readFileSync('../index.html'))
         
}).listen(port, host, ()=>{
    console.log(`Server is running  on http://${host}:${port}`)
})