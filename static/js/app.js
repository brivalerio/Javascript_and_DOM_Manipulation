//from data.js
var tableData = data;
console.log(data);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// console.log(tbody);

data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
