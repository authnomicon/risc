exports = module.exports = function() {
  
  
  return {
    parse: function(payload) {
      
    }
    
    format: function(ev) {
      var payload = {};
      payload.subject = {}; // the token
      payload.token_subject = {} // the user
      
    }
  }
};

exports['@uri'] = 'https://schemas.openid.net/secevent/oauth/event-type/token-issued';
