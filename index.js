var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

var isProduction = process.env.NODE_ENV === 'production';
app.set('port', (process.env.PORT || 5000));

/*****************************\
| DO NOT REMOVE THIS FUNCTION |
\*****************************/
app.use(function(request, response, next) {
  var ipAddr = request.headers["x-forwarded-for"];
  if (ipAddr){
    var list = ipAddr.split(",");
    ipAddr = list[list.length-1];
  } else {
    ipAddr = request.connection.remoteAddress;
  }
  // Allow access to labs
  allowed_ips = ['::1','127.0.0.1','localhost','::ffff:127.0.0.1'];
  if (ipAddr === process.env.LABS_IP || allowed_ips.indexOf(ipAddr) != -1) {
    next();
  } else {
    response.status(403);
    response.send('Direct access forbidden');
    response.end();
  }
})
/*****************\
| OK, CARRY ON... |
\*****************/

app.use(express.static(__dirname + '/build'));


// We only want to run the workflow when not in production
if (!isProduction) {
  console.log('Running locally, serving assets from webpack dev server.')
  var httpProxy = require('http-proxy');
  var proxy = httpProxy.createProxyServer();
  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./server/bundle.js');
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });

  // It is important to catch any errors from the proxy or the
  // server will crash. An example of this is connecting to the
  // server when webpack is bundling
  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
  });

}

// views is directory for all template files
app.set('views', __dirname + '/views');
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', function(request, response) {
  response.render('pages/home');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
