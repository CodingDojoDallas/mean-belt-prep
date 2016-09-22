myApp.controller('usersController', function($scope, $routeParams, $location, userFactory) {
  console.log('usersContoller()');
  var self = this;

  self.user = {};

  self.register = function(){
    console.log('This is uC.register()');
    userFactory.register(self.user, function(returned_data){
      console.log(returned_data.data);
      self.user ={};
      $location.path('/topics');
    })
  }
});
