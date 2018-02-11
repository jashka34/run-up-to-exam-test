import server from './Server'


let port = 4400;

//let server = new Server();

console.log(`Server started on port ${port}`);

server.listen(port);
