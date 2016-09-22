console.log('**** routes');
var mongoose = require('mongoose');

var uc = require('../controller/usersController.js');  //path to controller file
// var tc = require('../controller/topicsControler.js');

module.exports = function(app){
  app.post('/user', uc.register);
  // app.get('/user/:id', uc.show);  
  // app.put('/user/:id', uc.update);
  // app.delete('/user/:id', uc.delete);

  // app.get('/topics', tc.index);
}
