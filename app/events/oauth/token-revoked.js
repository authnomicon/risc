exports = module.exports = function() {
  
  
  return {
    parse: function(payload) {
      
    }
    
    format: function(ev) {
      var payload = {};
      payload.subject = {}; // the token
      payload.token_subject = {} // the user
      payload.reason = '';
      
    }
  }
};

exports['@uri'] = 'https://schemas.openid.net/secevent/oauth/event-type/token-revoked';
