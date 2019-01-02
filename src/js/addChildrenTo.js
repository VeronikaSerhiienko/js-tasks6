addChildrenTo('BlockId', 3, 'p');
addChildrenTo('BlockId', 2, 'div');

function addChildrenTo (block, count, type) {
  var childrens = [];
  var blockElem =  document.getElementById(block);
  for ( var i = 0; i < count; i++) {
    childrens.push(document.createElement(type));
    blockElem.appendChild(childrens[i]);
  }
}