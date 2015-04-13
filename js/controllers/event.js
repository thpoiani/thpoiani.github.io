(function() {
  angular
    .module('app')
    .controller('EventController', Event);

  function Event() {
    var vm = this;

    vm.events = [
      {
        name     : "Semana Nacional de Ciência e Tecnologia",
        image    : "http://placehold.it/300x200",
        year     : 2014,
        local    : "São Carlos",
        category : "Minicurso",
        title    : "DOMinando JavaScript",
        link     : ""
      },
      {
        name     : "FLISOL",
        image    : "http://placehold.it/300x200",
        year     : 2015,
        local    : "São Carlos",
        category : "Minicurso",
        title    : "Disponibilizando dependências PHP com Composer, GitHub e Packagist",
        link     : ""
      }
    ];
  }
})();
