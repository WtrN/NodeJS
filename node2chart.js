//１:モジュールのロード
const http = require('http');
const fs = require('fs');
const csv = require('csv')
const Chart = require('chart.js')

var data = [];
const server = http.createServer(function(req, res){
    fs.createReadStream(__dirname + 'data.csv').pipe(data);
    console.log(data);
}).listen(3000)

console.log('Server running http://localhost:3000/')