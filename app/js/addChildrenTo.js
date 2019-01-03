addChildrenTo('block-id', 3, 'p');
addChildrenTo('block-id', 2, 'div');

function addChildrenTo (block, count, type) {
  var blockElem =  document.getElementById(block);
  for (var i = 0; i < count; i++) {
    blockElem.appendChild(document.createElement(type));
  }
}