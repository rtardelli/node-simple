const { getByID, getAll, addUser } = require('../service/fakeStorage');

exports.get = (request, response) => {
    // set response header
    response.writeHead(200, { 'Content-Type': 'application/json' });
    // set response content
    const userList = getAll();
    response.write(JSON.stringify(userList));
    response.end();
};

exports.post = (request, response) => {
    let bodyUser = [];
    request.on('error', (err) => {
        console.error(err);
        // set response header
        response.writeHead(400, { 'Content-Type': 'application/json' });
        response.write({ "message":"Request Error" });
        response.end();
    }).on('data', (chunk) => {
        bodyUser.push(chunk);
    }).on('end', () => {
        bodyUser = Buffer.concat(bodyUser).toString();
        const _userParam = JSON.parse(bodyUser);
        let user = getByID(_userParam.id);
        
        let statusCode = 200;
        if(user == null) {  // New user
            user = addUser(_userParam);
            statusCode = 201
        }

        const locationUser = "/users/" + user.id;
        // set response header
        response.writeHead(statusCode, { 'Content-Type': 'application/json', "Location": locationUser });
        
        // set response content
        response.write(JSON.stringify(user));
        response.end();
    });
};