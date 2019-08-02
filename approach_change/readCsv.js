const fs = require('fs');
const csv = require('csv');


// exports.readCSV = function(req, res){
    
    const parser = csv.parse((error, data) => {
        console.log(data instanceof Array);
        // console.log(data);
        // res.send(data);
        exports.data = data;
    })
    var hoge = fs.createReadStream('../data.csv').pipe(parser);

// }