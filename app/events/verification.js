exports = module.exports = function() {
  
  
  return {
    parse: function(payload) {
      
    }
    
    format: function(ev) {
      var payload = {};
      if (ev.state) { payload.state = ev.state; }
    }
  }
};

exports['@uri'] = 'https://schemas.openid.net/secevent/risc/event-type/verification';
