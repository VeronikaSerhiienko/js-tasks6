paintDiagonal();

function paintDiagonal() {
  var table = document.getElementById('tableWithDiagonal');
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
}