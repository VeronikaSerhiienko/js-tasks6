replaceElementBy('block-id', 'table-with-diagonal');

function replaceElementBy(blockCurrent, blockToReplace) {
  var first = document.getElementById(blockCurrent);
  var last = document.getElementById(blockToReplace);
  // first.parentNode.replaceChild(last, first);
  document.body.insertBefore(last, first);
  console.log('Success');
}