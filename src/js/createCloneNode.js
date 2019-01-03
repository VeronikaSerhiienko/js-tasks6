createCloneNode('table-with-diagonal');

function createCloneNode(block) {
  var div = document.getElementById(block);
  var div2 = div.cloneNode(true);
  var allScripts = document.getElementsByTagName('script');
  document.body.insertBefore(div2, allScripts[0]);
}