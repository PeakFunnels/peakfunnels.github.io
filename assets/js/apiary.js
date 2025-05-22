// assets/js/apiary.js
;(function(window, document) {
  // create a <script> tag that points at the real Apiary embed library
  var s = document.createElement('script');
  s.src = 'https://static.apiary.io/embed/apiary.js';
  s.async = true;
  // insert it into <head>
  var h = document.getElementsByTagName('head')[0];
  h.appendChild(s);
})(window, document);
