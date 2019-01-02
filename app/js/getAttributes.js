function getAttributes () {
  var valueOfHref = document.getElementsByTagName('a')[0].href;
  var valueOfHreflang = document.getElementsByTagName('a')[0].hreflang;
  var valueOfRel = document.getElementsByTagName('a')[0].rel;
  var valueOfTarget = document.getElementsByTagName('a')[0].target;
  var valueOfType = document.getElementsByTagName('a')[0].type;

  console.log(valueOfHref);
  console.log(valueOfHreflang);
  console.log(valueOfRel);
  console.log(valueOfTarget);
  console.log(valueOfType);
}