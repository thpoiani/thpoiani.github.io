(function() {
  angular
    .module('app')
    .controller('EventController', Event);

  function Event($scope, $http) {
    var vm = this,
        SPREADSHEET = 'https://spreadsheets.google.com/feeds/list/18hNP6xTkkalDUyM0IMRGuG6ovKin5yLZlmxgz-OfD2A/3/public/values?alt=json';

    $http.get(SPREADSHEET).
      success(function(data) {
        vm.events = data.feed.entry;
      }
    );
  }
})();
