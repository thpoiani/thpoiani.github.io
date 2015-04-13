(function() {
  angular
    .module('app')
    .controller('ProjectController', Project);

  function Project() {
    var vm = this;

    vm.projects = [
      {
        name        : "JS Social Sharer",
        image       : "http://placehold.it/300x200",
        year        : 2014,
        link        : "https://github.com/thpoiani/js-social-sharer",
        description : "Avoid loading several JavaScript APIs for social sharing that can slow down your website. Only with a small amount of JavaScript, JS Social Sharer handle a hyperlink tag to create a sharing solution that don't require a powerful API from the social networks."
      },
      {
        name        : "folhas",
        image       : "http://placehold.it/300x200",
        year        : 2014,
        link        : "https://github.com/thpoiani/folhas",
        description : "Proposto como Projeto Final do curso superior de Tecnologia em Análise e Desenvolvimento de Sistema, folhas tem como principal objetivo o compartilhamento de documentos para edição colaborativa."
      },
      {
        name        : "GASOOL",
        image       : "http://placehold.it/300x200",
        year        : 2012,
        link        : "https://github.com/thpoiani/GASOOL",
        description : "A principal função desse programa é retornar os preços dos combustíveis dos postos cadastrados no site Preço dos Combustíveis no Brasil. O seu retorno é dado graças a biblioteca libcurl, a qual é necessária para o funcionamento correto do programa. O download de sua última versão pode ser feito em http://curl.haxx.se."
      }
    ];
  }
})();
