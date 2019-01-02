paintLetter('textToPaint');

function paintLetter(textFieldId) {
  var textInner = document.getElementById(textFieldId).innerHTML;
  var text = document.getElementById(textFieldId);
  var colorfulText = document.createElement('p');
  document.body.insertBefore(colorfulText, text);
  var colorSet = ['crimson', 'aqua', 'chartreuse', 'darkmagenta', 'goldenrod', 'lightcoral', 'navy', 'maroon', 'lime','olive']; 
  var colorSetIndex = 0;
  for (var i = 0; i < textInner.length; i++) {
    var node = document.createElement('span');
    var textnode = document.createTextNode(textInner[i]);
    node.appendChild(textnode);
    colorfulText.appendChild(node);
    if (node.innerHTML.match(/\w/)) {
      node.style.color = colorSet[colorSetIndex];
      ++colorSetIndex;
      if (colorSetIndex === colorSet.length) {
        colorSetIndex = 0;
      }
    }
  }
  document.body.replaceChild(colorfulText, text);
}