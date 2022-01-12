var app = require('http').createServer(createServer);
var fs = require('fs'); 
var url = require('url');

function createServer(req, res) {
    var path = url.parse(req.url).pathname;
    var fsCallback = function(error, data) {
        if(error) throw error;

        res.writeHead(200);
        res.write(data);
        res.end();
    }

    switch(path) {
        case '/home.html':
            fs.readFile('D:\\Downloads\\School_final_2edited\\School_final_2\\School_final\\School Site'+'/home.html', fsCallback);
        break;
        default:
            doc = fs.readFile('D:\\Downloads\\School_final_2edited\\School_final_2\\School_final\\School Site'+'/Welcome.html', fsCallback);
			doc = fs.readFile('D:\\Downloads\\School_final_2edited\\School_final_2\\School_final\\School Site\\css'+'/common.css', fsCallback);
			doc = fs.readFile('D:\\Downloads\\School_final_2edited\\School_final_2\\School_final\\School Site\\css'+'/style.css', fsCallback);
			
        break;
    }
}

app.listen(8080);