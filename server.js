var http = require("http");
const port = process.env.PORT || 3001;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // Corrected Content-Type
    res.end("Hello World!");
}).listen(port);
