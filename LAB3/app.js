import http from 'http';

const server = http.createServer();//server bna

server.on('request', (req, res)=>{//on- event emitter//this is a call back functio
    res.write("<h1>Welcome to Server Side Programming</h1>");//http://localhost:5000
    res.write("<h2>Nodemon is tracking files</h2>");
    res.end();
})

server.listen(5000, ()=>{//listen- event emitter
    console.log("Server is running");
});