(function() {
  angular
    .module('app')
    .controller('EventController', Event);

  function Event() {
    var vm = this;

    vm.events = [
      {
        name       : "Semana Nacional de Ciência e Tecnologia",
        year       : 2014,
        local      : "São Carlos",
        category   : "Minicurso",
        title      : "DOMinando JavaScript",
        link       : "",
        image      : {
          src    : "http://placehold.it/300x200",
          alt    : "Placehold.it",
          width  : 300,
          height : 200
        },
        created_at : '2014-10-17'
      },
      {
        name       : "FLISOL",
        year       : 2015,
        local      : "São Carlos",
        category   : "Minicurso",
        title      : "Disponibilizando dependências PHP com Composer, GitHub e Packagist",
        link       : "",
        image      : {
          src    : "http://placehold.it/300x200",
          alt    : "Placehold.it",
          width  : 300,
          height : 200
        },
        created_at : '2015-04-25'
      }
    ];
  }
})();
