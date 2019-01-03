replaceElementBy('table-with-diagonal', 'block-id');

function replaceElementBy(blockCurrent, blockToReplace) {
  var first = document.getElementById(blockCurrent);
  var last = document.getElementById(blockToReplace);
  document.body.replaceChild(last, first);
  console.log('Success');
}