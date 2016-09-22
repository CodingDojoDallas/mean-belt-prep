console.log('**** routes');
var mongoose = require('mongoose');

require('../controllers/friends.js');  //path to controller file
module.exports = function(app){
  app.get('/user', userController.index);
  app.get('/user/:id', userController.show);
  app.post('/user', userController.create);
  app.put('/user/:id', userController.update);
  app.delete('/user/:id', userController.delete);
}
