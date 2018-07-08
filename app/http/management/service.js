exports = module.exports = function(statusService) {
  var express = require('express');
  var router = new express.Router();
  
  router.use('/status', statusService);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/risc/ManagementService'
];
exports['@require'] = [
  './status/sevice'
];
