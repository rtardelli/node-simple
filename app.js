const http = require('http');
const homeRouter = require('./router/home-router');
const userRouter = require('./router/user-router');

const port = process.env.PORT || 3000;

const notFoundResponse = (request, response) => {
    // set response header
    response.writeHead(404, { 'Content-Type': 'application/json' });
    // set response content
    //response.write({});
    response.end();
}

const server = http.createServer((request, response) => {
    const { headers, method, url } = request;
    
    console.log('Method: ', method);
    console.log('URL: ', url);
    console.log('Headers: ', headers);

    if(request.url == '/') {
        if(method == 'GET') {
            homeRouter.get(request, response);
        } else {
            notFoundResponse(request, response);
        }
    } else if(request.url == '/users') {
        if(method == 'GET') {
            userRouter.get(request, response);
        } else if(method == 'POST') {
            userRouter.post(request, response);
        } else {
            notFoundResponse(request, response);
        }
    }
});

server.listen(port); // listen for any incoming request

console.log(`Server is running at port ${port}`);
