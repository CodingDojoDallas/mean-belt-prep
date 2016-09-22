console.log('userFactory');
myApp.factory('userFactory', function($http,$routeParams) {

  var someVariables = [];
  var loggedin_user;

  function userFactory(){
    var _this = this;

    _this.register = function(callback){
      $http.post('/user').then(function(res){
        console.log('POST return for /user');
        console.log(res);
      });
    }
  }
  return new userFactory();
});
