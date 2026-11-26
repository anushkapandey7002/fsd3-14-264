
import http from "http";
import fs from "fs";

const PORT = 3000;

const cart = [
    {
        id: 1,
        productName: "Wireless Mouse",
        price: 799,
        quantity: 2
    },
    {
        id: 2,
        productName: "Keyboard",
        price: 1299,
        quantity: 1
    }
];

const server = http.createServer((req, res) => {
    const { method, url } = req;

    // GET /
    if (method === "GET" && url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to Shopping Cart Management</h1>");
    }

    // GET /cart
    else if (method === "GET" && url === "/cart") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(cart));
    }

    // GET /about
    else if (method === "GET" && url === "/about") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            application: "Shopping Cart Management",
            description: "A Node.js HTTP server using built-in modules"
        }));
    }

    // GET /home — serve HTML using fs
    else if (method === "GET" && url === "/home") {
        fs.readFile("public/index.html", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify({
                    error: "Unable to read HTML file"
                }));
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    // POST /add-to-cart
    else if (method === "POST" && url === "/add-to-cart") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const product = JSON.parse(body);

                if (
                    product.id === undefined ||
                    typeof product.productName !== "string" ||
                    !product.productName.trim() ||
                    typeof product.price !== "number" ||
                    !Number.isFinite(product.price) ||
                    product.price < 0 ||
                    !Number.isInteger(product.quantity) ||
                    product.quantity <= 0
                ) {
                    res.writeHead(400, {
                        "Content-Type": "application/json"
                    });
                    res.end(JSON.stringify({
                        error: "Provide a valid id, productName, price and quantity"
                    }));
                    return;
                }

                cart.push(product);

                res.writeHead(201, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify({
                    message: "Product added successfully",
                    product
                }));
            } catch {
                res.writeHead(400, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify({
                    error: "Invalid JSON request body"
                }));
            }
        });
    }

    // 404 — unknown route or method
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`HTTP Server running at http://localhost:${PORT}`);
});
