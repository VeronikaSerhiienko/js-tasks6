function getAttributes () {
  var valueOfHref = document.querySelector('a').href;
  var valueOfHreflang = document.querySelector('a').hreflang;
  var valueOfRel = document.querySelector('a').rel;
  var valueOfTarget = document.querySelector('a').target;
  var valueOfType = document.querySelector('a').type;

  console.log(valueOfHref);
  console.log(valueOfHreflang);
  console.log(valueOfRel);
  console.log(valueOfTarget);
  console.log(valueOfType);
}