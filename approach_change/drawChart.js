const csvData = require('./readCsv');
// const app = require('express')


var dataCSV = csvData.data;
// [ [ 'January', ' -10.4', ' -5.5' ],
// [ 'Feburary', ' -30.3', ' 1' ],
// [ 'March', ' 3.8', ' 12.3' ],
// [ 'April', ' 5.9', ' 13.5' ],
// [ 'May', ' 9.6', ' 16.4' ],
// [ 'June', ' 12.0', ' 19.4' ],
// [ 'July', ' 16.1', ' 28.2' ],
// [ 'August', ' 20.6', ' 30.3' ],
// [ 'September', ' 17.2', ' 26.2' ],
// [ 'October', ' 15.0', ' 20.8' ],
// [ 'November', ' 5.9', ' 10.1' ],
// [ 'December', ' 0.0', ' 3.3' ] ]

// 3)chart.jsのdataset用の配列を用意
var tmpLabels = [], tmpData1 = [], tmpData2 = [];
for (var row in dataCSV) {
    tmpLabels.push(dataCSV[row][0])
    tmpData1.push(dataCSV[row][1])
    tmpData2.push(dataCSV[row][2])
};

// 4)chart.jsで描画
//FIXME: htmlからnodeJsは呼び出せないので、切り分けが必要
var ctx = document.getElementById('iChart').getContext('2d');
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
