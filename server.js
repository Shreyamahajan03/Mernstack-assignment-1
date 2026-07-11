const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    let filePath;
    let statusCode = 200;
    let contentType = "text/html";

    switch (req.url) {

        case "/":
        case "/home":
            filePath = path.join(__dirname, "pages", "home.html");
            break;

        case "/about":
            filePath = path.join(__dirname, "pages", "about.html");
            break;

        case "/contact":
            filePath = path.join(__dirname, "pages", "contact.html");
            break;

        case "/css/style.css":
            filePath = path.join(__dirname, "css", "style.css");
            contentType = "text/css";
            break;

        default:
            filePath = path.join(__dirname, "pages", "404.html");
            statusCode = 404;
    }

    fs.readFile(filePath, (err, data) => {

        if (err) {

            res.writeHead(500, {
                "Content-Type": "text/plain"
            });

            res.end("Internal Server Error");

        } else {

            res.writeHead(statusCode, {
                "Content-Type": contentType
            });

            res.end(data);
        }

    });

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});