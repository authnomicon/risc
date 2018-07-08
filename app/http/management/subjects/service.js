exports = module.exports = function(addHandler, removeHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/subjects:add', addHandler);
  router.post('/subjects:remove', removeHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/risc/SubjectManagementService'
];
exports['@require'] = [
  './handlers/add',
  './handlers/remove'
];
