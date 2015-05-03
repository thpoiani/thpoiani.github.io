(function(window, document, undefined) {
  var colors = ['red', 'purple', 'indigo', 'blue', 'green', 'lime', 'yellow', 'orange', 'brown'],
      color  = colors[Math.floor(Math.random() * colors.length)];

  setTimeout(function() {
    document.body.className += color;
  }, 0);

///

  var header = document.getElementById('header'),
      logo   = document.getElementById('logo'),
      main   = document.getElementById('main');

  function onScroll(event) {
    var position = window.scrollY;

    if (position >= 82) {
      if (logo.className.indexOf('small') === -1) {
        logo.className += 'small';
      }
    } else {
      if (logo.className.indexOf('small') != -1) {
        logo.className = '';
      }
    }

    if (position >= 192) {
      if (header.className.indexOf('small') === -1) {
        header.className += ' small';
        main.className   += 'small';
      }
    } else {
      if (header.className.indexOf('small') != -1) {
        header.className = '';
        main.className   = '';
      }
    }
  }


  window.addEventListener("scroll", onScroll);


})(window, document);

// (function(window, document, undefined) {
//   var lists = document.querySelectorAll('.cards');

//   function getHeight(items) {
//     var maxHeight = 0;

//     for (var i = items.length - 1; i >= 0; i--) {
//         var height = items[i].offsetHeight;

//         if (height > maxHeight) {
//             maxHeight = height;
//         }
//     };

//     return maxHeight;
//   }

//   function setHeight(items) {
//     for (var i = items.length - 1; i >= 0; i--) {
//         items[i].style.height = maxHeight + "px";
//     };
//   }

//   for (var i = lists.length - 1; i >= 0; i--) {
//     var items     = lists[i].querySelectorAll('.card'),
//         maxHeight = getHeight(items);

//     setHeight(items);
//   };

// })(window, document);
