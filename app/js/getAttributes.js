function getAttributes() {
  var link = document.querySelector('a');
  var valueOfHref = link.href;
  var valueOfHreflang = link.hreflang;
  var valueOfRel = link.rel;
  var valueOfTarget = link.target;
  var valueOfType = link.type;

  console.log(valueOfHref);
  console.log(valueOfHreflang);
  console.log(valueOfRel);
  console.log(valueOfTarget);
  console.log(valueOfType);
}