var app = angular.module('eisApp', ['ngRoute']);

host = 'http://localhost:5000/'

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/Document', {
      templateUrl: 'views/docs.html',
      controller: 'DocsCtrl'
    })
    .when('/Image', {
      templateUrl: 'views/images.html',
      controller: 'ImgCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
});

app.controller('MainCtrl', function($scope, $http) {
  $scope.loading = true;
  $http.get(host + 'categories/').then(function(response) {
    $scope.categories = response.data.categories;
    $scope.loading = false;
  })
})

app.controller('DocsCtrl', function($scope, $http) {
  $scope.loading = true;
  $http.get(host + 'categories/documents').then(function(response) {
    console.log("HELLO");
    console.log(response);
    $scope.documents = response.data.files;
    $scope.loading = false;
  })
})

app.controller('FilesCtrl', function($scope, $http) {
  $http.get(host + 'categories/').then(function(response) {
    console.log(response);
    $scope.categories = response.data.categories;
  })

  $http.get('files/' + '5').then(function(response) {
    console.log(response);
    $scope.currentItem = response.data.files[0];
  })
})
