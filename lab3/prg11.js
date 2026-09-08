import http from 'http';


const server = http.createServer((req, res) => {

    if( req.url === "/" && req.method === "GET") {
        res.end("home page");
    }

        else if(req.url === "/product" && req.method === "GET"){
            const products =[
                { 

                id: 1,
                name: "iphone 15",
                price: 1200
            },
        
            {
             id: 2,
             name: "iphone 15 pro",
             price: 1500
            },
        ];
            res.end(JSON.stringify(products));
        }

        else if(req.url === "/product" && req.method === "POST"){
            //retrive data from client
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                const product = JSON.parse(body);
            

            //add data to database


            res.writeHead(201, {
                "content-type": "application/json"
            });

            //send back the status
            res.end(
                JSON.stringify({
                    msg: "product added successfully",
                    product,
                }),
            );
        });


        }

        else if(req.url === "/product" && req.method === "PUT"){
            res.end(" update product");
        }

        else if(req.url === "/product" && req.method === "DELETE"){
            res.end(" remove product");
        }

})

server.listen(4000, () => {console.log("Prg 11 Server is running at 4000...")});