exports = module.exports = function(verifyHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.post('/', verifyHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/risc/VerificationService'
];
exports['@require'] = [
  './handlers/verify'
];
