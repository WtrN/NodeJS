const http = require('http');
const fs = require('fs');
const csv = require('csv');
const ChartJs = require('chart.js');

const parser = csv.parse((error, data) => {
    console.log(data);
    // var newData = csv2Array(data);
    
    // 3)chart.jsのdataset用の配列を用意
    var tmpLabels = [], tmpData1 = [], tmpData2 = [];
    for (var row in data) {
        tmpLabels.push(data[row][0])
        tmpData1.push(data[row][1])
        tmpData2.push(data[row][2])
    };

    // 4)chart.jsで描画
    var ctx = document.getElementById("iChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: tmpLabels,
        datasets: [
            { label: "Tokyo", data: tmpData1, backgroundColor: "red" },
            { label: "Osaka", data: tmpData2, backgroundColor: "blue" }
        ]
        }
    });

})
function main(){
    var hoge = fs.createReadStream('../data.csv').pipe(parser);
    console.log(typeof hoge);
}

main();