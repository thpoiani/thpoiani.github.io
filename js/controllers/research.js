(function() {
  angular
    .module('app')
    .controller('ResearchController', Research);

  function Research($scope, $http) {
    var vm = this,
        SPREADSHEET = 'https://spreadsheets.google.com/feeds/list/18hNP6xTkkalDUyM0IMRGuG6ovKin5yLZlmxgz-OfD2A/2/public/values?alt=json';

    $http.get(SPREADSHEET).
      success(function(data) {
        vm.researches = data.feed.entry;
      }
    );
  }
})();
