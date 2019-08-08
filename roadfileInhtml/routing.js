const http = require('http');
const fs = require('fs');
const path = require('path');

var mimeTypes={
    '.html' : 'text/html',
    '.css' : 'text/css',
    '.js' : 'text/javascript',
    '.jpg' : 'image/jpg',
    '.png' : 'image/png',
    '.mp3' : 'audio/mpeg'
};

const server = http.createServer(function(req, res){
    var url = decodeURI(req.url);
    console.log(url);
    var targetFile = __dirname + url;

    fs.exists(targetFile , function(exists){
        if(exists){
        fs.readFile(targetFile,function(err,data){
            if(err){
            res.writeHead(500);
            res.end('Server Error !');
            return;
            }
            var headers = {'Content-Type' : mimeTypes[path.extname(targetFile)]};
            res.writeHead(200,headers);
            res.end(data);
            console.log(targetFile+'が開かれた'+'mimeType:'+mimeTypes[path.extname(targetFile)]);
            console.log(path.extname(targetFile));
        });
        return;
        }
        res.writeHead(404);
        res.end('ページが見つかりません');
    });
}).listen(8000);
console.log('Server running http://localhost:8000/');