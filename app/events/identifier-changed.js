exports = module.exports = function() {
  
  
  return {
    parse: function(payload) {
      
    }
    
    format: function(ev) {
      var payload = {};
      payload.subject = {}; // the user
      payload['new-value'] = 'todo';
    }
  }
};

exports['@uri'] = 'https://schemas.openid.net/secevent/risc/event-type/identifier-changed';
