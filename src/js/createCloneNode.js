createCloneNode('BlockId');

function createCloneNode(block) {
  var div = document.getElementById(block);
  var div2 = div.cloneNode(true);
  var allScripts = document.getElementsByTagName('script');
  div2.innerHTML = 'Супер!';
  document.body.insertBefore(div2, allScripts[0]);
  // document.body.appendChild(div2);
}