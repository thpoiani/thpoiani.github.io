(function() {
  angular
    .module('app', ['ngSanitize'])
    .controller('IndexController', Index);

  function Index() {
    var vm = this;
    vm.author = {
      name  : 'Thiago Henrique Poiani',
      about : 'Mestrando em Ciências da Computação no Instituto de Ciências Matemáticas e de Computação da <a href="http://www.icmc.usp.br/" target="_blank">Universidade de São Paulo</a> (ICMC-USP).<br>Cursando especialização em Desenvolvimento de Software para Web na <a href="http://www.ufscar.br" target="_blank">Universidade Federal de São Carlos</a> (UFSCar).<br>Tecnólogo em Análise e Desenvolvimento de Sistemas pelo <a href="http://www.ifspsaocarlos.edu.br/" target="_blank">Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, campus São Carlos</a> (IFSP).'
    }
  }
})();
