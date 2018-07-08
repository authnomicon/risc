exports = module.exports = function(configurationHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.post('/', configurationHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/risc/DiscoveryService'
];
exports['@path'] = '/.well-known/risc-configuration';
exports['@require'] = [
  './handlers/configuration'
];
