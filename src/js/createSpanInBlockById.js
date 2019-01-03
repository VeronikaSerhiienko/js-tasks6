createSpanInBlockByID('block-id');

function createSpanInBlockByID(blockId) {
  var elem =  document.getElementById(blockId);
  if (elem.getElementsByTagName('span').length === 0) {
    var elemSpan = document.createElement('span');
    elem.appendChild(elemSpan);
  }
}