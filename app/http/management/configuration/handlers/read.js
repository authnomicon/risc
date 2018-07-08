// TODO:
exports = module.exports = function(streams, parse, authenticate) {
  
  // TODO: Validate the token, etc
  
  
  function handle(req, res, next) {
    // TODO: resolve feed somehow
    
    resolver.resolve(req.user, function(err, id) {
      req.locals.feedID = id;
    })
    
    repository.get('feed-id', function() {
      req.locals.feed;
    });
    
    
    feed.status(req.locals.feed, function(err) {
      
      var body = {
        events_requested: 'enabled'
      }
      
    });
  }
  
  function errorHandler(err, req, res, next) {
    
    var body = {
      err: 'todo',
      description: err.message;
    }
    
    res.send(body);
  }
  
  
  return [
    authenticate([ 'anonymous' ]),
    handle
  ];
}

exports['@require'] = [
  'http://schemas.authnomicon.org/js/set/IEventStreamsService',
  'http://i.bixbyjs.org/http/middleware/parse',
  'http://i.bixbyjs.org/http/middleware/authenticate',
];
