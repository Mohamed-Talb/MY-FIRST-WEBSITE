import http from "http"
import path from "path";

const PORT = 8000;

const __dirname = import.meta.dirname;
console.log(__dirname);
function ReqResHandler(req, res)
{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end("<html><h1>The server is working</h1></html>");
}

const server = http.createServer(ReqResHandler);
server.listen(PORT, () => {console.log(`http://localhost:${PORT}`)});

