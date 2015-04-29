(function() {
  angular
    .module('app')
    .controller('ProjectController', Project);

  function Project($scope, $http) {
    var vm = this,
        SPREADSHEET = 'https://spreadsheets.google.com/feeds/list/18hNP6xTkkalDUyM0IMRGuG6ovKin5yLZlmxgz-OfD2A/1/public/values?alt=json';

    $http.get(SPREADSHEET).
      success(function(data) {
        vm.projects = data.feed.entry;
      }
    );
  }
})();
