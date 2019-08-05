const csvData = require('./readCsv');
const app = require('express')


var dataCSV = app.get('/', csvData.readCSV);
// 3)chart.jsのdataset用の配列を用意
var tmpLabels = [], tmpData1 = [], tmpData2 = [];
for (var row in dataCSV) {
    tmpLabels.push(dataCSV[row][0])
    tmpData1.push(dataCSV[row][1])
    tmpData2.push(dataCSV[row][2])
};

// 4)chart.jsで描画
//FIXME: htmlからnodeJsは呼び出せないので、切り分けが必要
var ctx = document.getElementById("iChart").getContext("2d");
var iChart = new Chart(ctx, {
    type: 'bar',
    data: {
    labels: tmpLabels,
    datasets: [
        { label: "Tokyo", data: tmpData1, backgroundColor: "red" },
        { label: "Osaka", data: tmpData2, backgroundColor: "blue" }
    ]
    }
});
