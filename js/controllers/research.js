(function() {
  angular
    .module('app')
    .controller('ResearchController', Research);

  function Research() {
    var vm = this;

    vm.researchs = [
      {
        title    : "Visualização de dados geográficos heterogêneos para suporte à tomada de decisões na gestão de risco de inundações",
        image    : "http://placehold.it/300x200",
        year     : 2015,
        abstract : "Inundações são frequentes e impactantes no mundo, causando mais prejuízos econômicos do que outros eventos naturais. Para minimizar os impactos causados e aumentar a resiliência de comunidades vulneráveis contra esse desastre, Sistemas de Informação Geográfica monitoram dados geoespaciais de redes de sensores, mídias sociais, dados oficiais e de informações de voluntários, contribuindo com a gestão de risco de inundações. A integração de dados de fontes heterogêneas tem um grande potencial para a descoberta de conhecimento para mitigar riscos. Portanto, este projeto de pesquisa propõe uma abordagem de visualização interativa de dados geográficos heterogêneos para o suporte à tomada de decisões na gestão de risco de inundações.",
        authors  : "Poiani, T.H.; Albuquerque J.P.",
        link     : ""
      },
      {
        title    : "Abordagens de visualização de dados em contexto de desastres ambientais: uma revisão sistemática",
        image    : "http://placehold.it/300x200",
        year     : 2015,
        abstract : "",
        authors  : "Poiani, T.H.; Delamaro M.E.",
        link     : ""
      }
    ];
  }
})();
