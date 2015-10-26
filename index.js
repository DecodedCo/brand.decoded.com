var express = require('express');
var hbsexpress = require('express-handlebars');
var app = express();

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

app.use(express.static(__dirname + '/public'));


// views is directory for all template files
app.set('views', __dirname + '/src/views');


var Handlebars = hbsexpress({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir:  app.get('views') + '/layouts',
  partialsDir: [ app.get('views') + '/component-partials', app.get('views') + '/partials'],
  templatesDir: [ app.get('views') + '/components-templates']
});

// Register `hbs.engine` with the Express app.
app.engine('hbs', Handlebars);
app.set('view engine', 'hbs');

app.get('/', function(request, response) {
  var locals = { appName : "Decoded Brand Guidelines" };
  response.render('pages/home', locals);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
