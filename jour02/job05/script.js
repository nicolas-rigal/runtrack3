
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollPercent = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  var footer = document.querySelector('footer');
  footer.classList.remove('footer-color-0', 'footer-color-25', 'footer-color-50', 'footer-color-75');

  if (scrollPercent < 25) {
    footer.classList.add('footer-color-0');
  } else if (scrollPercent < 50) {
    footer.classList.add('footer-color-25');
  } else if (scrollPercent < 75) {
    footer.classList.add('footer-color-50');
  } else {
    footer.classList.add('footer-color-75');
  }
});
