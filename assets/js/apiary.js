;(function(window, document) {
  // this tiny loader simply injects Apiary's real embed script
  var s = document.createElement('script');
  s.src = 'https://static.apiary.io/embed/apiary.js';
  s.async = true;
  document.head.appendChild(s);
})(window, document);
