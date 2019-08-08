// 2) CSVから２次元配列に変換
function csv2Array(str) {
    var csvData = [];
    var lines = str.split("\n");
    for (var i = 0; i < lines.length; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
    }
    console.log("DoneConvert");
    return csvData;
}

function drawBarChart(data) {
    // 3)chart.jsのdataset用の配列を用意
    var tmpLabels = [], tmpData1 = [], tmpData2 = [];
    for (var row in data) {
    tmpLabels.push(data[row][0])
    for(let i = 1; i < data[row].length; i++)
    {tmpData1.push(data[row][i])}
    // tmpData2.push(data[row][2])
    };

    // // 4-A)chart.jsでBarChartの描画
    // var ctx = document.getElementById("myChart").getContext("2d");
    // var myChart = new Chart(ctx, {
    // type: 'bar',
    // data: {
    //     labels: tmpLabels,
    //     datasets: [
    //     { label: "Tokyo", data: tmpData1, backgroundColor: "red" },
    //     { label: "Osaka", data: tmpData2, backgroundColor: "blue" }
    //     ]
    // }
    // });

    //4-B)chart.jsでScatterChartの描画
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: { 
        label: 'Age-Survived',
        data: [{
            x: tmpData1,
            y: tmpData2
        }]
        }
    })
}

function main() {
    // 1) ajaxでCSVファイルをロード
    var req = new XMLHttpRequest();
    // var filePath = 'data.csv';
    var formData = new FormData();
    // req.open('get', filePath, true);
    req.open('post', '/data.csv');
    // req.send(formData);
    // console.log(formData);
    console.log("Try to open csvFile");


    req.onload = function() {
    console.log("onload");
    // 2) CSVデータ変換の呼び出し
    data = csv2Array(req.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart(data);
    console.log("DoneDraw");
    }

    req.send(formData); 

    //1')csv-parse でcsvFileをロード
    
    
}

console.log("Done0");
document.write("This is sample Chart.");
main();