exports = module.exports = function(readService, updateService) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/', readService);
  router.post('/', updateService);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/risc/StreamStatusService'
];
exports['@require'] = [
  './handlers/read',
  './handlers/update'
];
