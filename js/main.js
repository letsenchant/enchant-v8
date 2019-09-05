(function() {
  bindEvents()
})();

function bindEvents() {
  var brandCards = Array.from(document.getElementsByClassName('BrandCard'));
  brandCards.map(function(card) {
    card.addEventListener('click',function(e){
      var link = card.getElementsByClassName('BrandCard__link')[0]
      link.click()
    });
  })
}
