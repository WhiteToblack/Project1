var fs = require('fs');
var url = require('url');
var mssql = require('mssql');

var renderHTML = function (path, response) {
    fs.readFile(path, null, function (err, data) {
        if (err) {
            response.writeHead(404);
            response.write("PathNotFound");
        } else {
            response.write(data);
        }

        response.end();
    });
}

module.exports = {
    handleRequest: function (request, response) {
        response.writeHead(200, { 'Content-Type': "text/html" });
        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./index.html', response);
                break;
            case '/login':
                renderHTML('./login.html', response);
                break;
            default:
                response.writeHead(404);
                response.write("Route Not Found!");
                response.end();
                break;
        }
    },
    getNodeProperties: function () {
        async () => {
            try {
                const pool = await sql.connect('mssql://sa:123@./NodeJs')
                const result = await sql.query`select * from NodeProperties`
                console.dir(result)
            } catch (err) {
                console.warn(err || err.message);
            }
        }

    }
};