
var clicky = function(item) {
  var elements = document.getElementById('carousel').getElementsByClassName('horse')
  for (var i = 0; i < elements.length; i ++) {
    elements[i].classList.remove('active')
  }
  item.classList.add('active')
}

