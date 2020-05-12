module.exports = {
    get: (request, response) => {
      console.log('home-router.js GET');
      // set response header
      response.writeHead(200, { 'Content-type': 'text/html' });
      // set response content
      response.write('<html><body><p>Home page routed</p></body></html>');
      response.end();
    },
}