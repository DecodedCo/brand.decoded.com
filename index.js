var express = require('express');
var hbsexpress = require('express-handlebars');
var handlebarsCore=require('handlebars')
var marked = require('marked');
var path = require('path');
var fs = require('fs');

var app = express();

app.set('port', (process.env.PORT || 5000));

// Markdown code highlighting with highlight.js
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

// serve static content from the /public directory
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/src/views');

// load navigation from json
routesHelper = function(options) {
  // get routes
  data = handlebarsCore.createFrame();
  var route;
  data.routes = require('./pages/routes.json');
  options.data = data;
  return options.fn(options.data);
};

var Handlebars = hbsexpress({
  handlebars: handlebarsCore,
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir:  app.get('views') + '/layouts',
  partialsDir: [ app.get('views') + '/component-partials', app.get('views') + '/partials'],
  templatesDir: [ app.get('views') + '/components-templates'],
  helpers: {
    routes: routesHelper,
    partial: require('./src/js/helpers/dynamicpartial.js')}
});

// Register `hbs.engine` with the Express app.
app.engine('hbs', Handlebars);
app.set('view engine', 'hbs');

app.get('/', function(request, response) {
  var locals = { appName : "Decoded Brand Guidelines" };
  response.render('pages/home', locals);
});

// read the md file, parse it and render the file in MD template
function markdownRender(request, response){
  fs.readFile('pages/' + request.params[0] + '.md', function (err, data) {
      if (err) {
          throw err;
      }
      var md = marked(data.toString());
      var locals = { appName : "Decoded Brand Guidelines", md: md};
      response.render('pages/md', locals);
  });
}

function jsRender(request, response){
  fs.readFile('pages/' + request.params[0] + '.js', function (err, data) {
      if (err) {
          throw err;
      }
      var md = marked(data.toString());
      var locals = { appName : "Decoded Brand Guidelines", md: md};
      response.render('pages/md', locals);
  });
}

function dynamicPages(request, response){
  var locals = { appName : "Decoded Brand Guidelines" };

  var mdPages = require('domain').create();
  mdPages.on('error', function(err){
      // handle the error safely
      console.log('No MD page found: ', err);
      response.render('pages/home', locals);
  });

  // catch the uncaught errors in this asynchronous or synchronous code block
  mdPages.run(function(){
      markdownRender(request, response);
  });
}

app.get('/pages/*', dynamicPages);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
