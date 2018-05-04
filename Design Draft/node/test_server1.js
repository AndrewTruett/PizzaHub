var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    console.log('Request was made: ' + request.url);
    if(request.url === '/home' || request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('../index.html').pipe(response);
    } else if(request.url === '/store') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('../store_page.html').pipe(response);
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write("Page not found!");
    }
}
http.createServer(onRequest).listen(8080);