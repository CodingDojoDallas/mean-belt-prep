console.log('userFactory');
myApp.factory('userFactory', function($http,$routeParams) {

  var someVariables = [];
  var current_user;

  function userFactory(){
    var _this = this;

    _this.register = function(user,callback){
      $http.post('/user',user).then(function(res){
        console.log('POST return for /user');
        console.log(res.data);
        if ('error' in res.data) {
          callback(res.data);
        }
        else{
          current_user = res.data;
          callback(res.data);
        }
      });
    }
  }
  return new userFactory();
});
