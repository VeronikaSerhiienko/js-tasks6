replaceElementBy('block-id', 'table-with-diagonal');

function replaceElementBy(blockCurrent, blockToReplace) {
  var first = document.getElementById(blockCurrent);
  var last = document.getElementById(blockToReplace);
  document.body.replaceChild(last, first);
  console.log('Success');
}