(function(window, document, MobileDetect, undefined) {

  var Color = (function() {
    var exports = {},
        Colors  = {
          RED    : 'red',
          PURPLE : 'purple',
          INDIGO : 'indigo',
          BLUE   : 'blue',
          GREEN  : 'green',
          LIME   : 'lime',
          YELLOW : 'yellow',
          ORANGE : 'orange',
          BROWN  : 'brown'
        }

    exports.setColor = function() {
      var delay = 0;

      setTimeout(function() {
        document.body.className += pickColor();
      }, delay);
    };

    function pickColor() {
      var array = [
        Colors.RED,
        Colors.PURPLE,
        Colors.INDIGO,
        Colors.BLUE,
        Colors.GREEN,
        Colors.LIME,
        Colors.YELLOW,
        Colors.ORANGE,
        Colors.BROWN
      ];

      return array[Math.floor(Math.random() * array.length)];
    }

    return exports;
  })();

  var Menu = (function(){
    var exports = {},
        header  = document.getElementById('header'),
        logo    = document.getElementById('logo'),
        main    = document.getElementById('main'),
        Limit   = {
          LOGO : 82,
          MENU : 192
        };

    exports.logo = function() {
      if (getPosition() >= Limit.LOGO && !hasClass(logo, 'small')) {
        logo.className += ' small';
        return;
      }

      if (getPosition() < Limit.LOGO) {
        logo.className = '';
        return;
      }
    }

    exports.header = function() {
      if (getPosition() >= Limit.MENU && !hasClass(header, 'small')) {
        header.className += ' small';
        main.className   += ' small';
        return;
      }

      if (getPosition() < Limit.MENU) {
        header.className = '';
        main.className   = '';
        return;
      }
    }

    exports.sticky = function() {
      var md = new MobileDetect(window.navigator.userAgent);

      if (!md.mobile()) {
        exports.logo();
        exports.header();
      }
    };

    function getPosition() {
      return window.scrollY;
    }

    function hasClass(element, clazz) {
      return element.className.indexOf(clazz) != -1;
    }

    return exports;
  })();

  window.addEventListener("scroll", Menu.sticky);
  Color.setColor();

})(window, document, window.MobileDetect);

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
