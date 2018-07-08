exports = module.exports = function(readHandler, updateHandler, removeHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/', readHandler);
  router.post('/', updateHandler);
  router.delete('/', removeHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/risc/StreamConfigurationService'
];
exports['@require'] = [
  './handlers/read',
  './handlers/update',
  './handlers/remove'
];
