createSpanInBlockByID();

function createSpanInBlockByID() {
  var elem =  document.getElementById('BlockId');
  if (elem.getElementsByTagName('span').length === 0) {
    var elemSpan = document.createElement('span');
    elem.appendChild(elemSpan);
  }
}