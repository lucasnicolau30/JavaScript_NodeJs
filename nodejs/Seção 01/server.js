const {createServer} = require("http");

const server = createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Teste</h1>");
    res.end();
});

server.listen(9000);
console.log("Servidor rodando na porta 9000");