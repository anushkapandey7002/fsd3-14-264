import http from 'http';

const server = http.createServer(async (req, res) => {
    
    res.end("hello buddy");

})



server.listen(3000, () => {console.log("Server is running at 3000...")});