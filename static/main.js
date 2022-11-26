
const url = '/all'; // Get 10 random users
function getList() {
    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        var listArray = data;
      // Create and append the li's to the ul
    console.log('Results ', listArray);    
    // for (var i = 0; i < listArray.length; i++) {
    var tableStr = '';
    tableStr +=  "<table class='table able-bordered'>";
    tableStr += "<thead class='thead-dark'>";
    tableStr += "<th>id</th>";
    tableStr += "<th>name</th>";
    tableStr += "<th>Email</th>";
    tableStr += "<thead>";
    tableStr += "<tbody>";
    listArray.forEach(function( item ) {
        console.log( item );
        tableStr += "<tr>";
        tableStr += "<td>" + item.id + "</td>";
        tableStr += "<td>" + item.name + "</td>";
        tableStr += "<td>" + item.email + "</td>";
        tableStr += "</tr>";
        
    });
    tableStr += "</tbody>";
    tableStr += "</table>";
    document.getElementById("table").innerHTML = tableStr;    
  });  
 }

 function fillTable(data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].User_Name + "</td>");
        tr.append("<td>" + data[i].score + "</td>");
        tr.append("<td>" + data[i].team + "</td>");
        $('table').append(tr);
    }
}