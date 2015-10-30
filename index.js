var express = require('express');
var hbsexpress = require('express-handlebars');
var handlebarsCore=require('handlebars')
var marked = require('marked');
var path = require('path');
var fs = require('fs');

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

// serve static content from the /public directory
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/src/views');

routesHelper = function(options) {
  // get routes
  data = handlebarsCore.createFrame();
  var route;
  data.routes = [];
  app._router.stack.forEach(function(middleware){
      if(middleware.route){ // routes registered directly on the app
          data.routes.push({label: middleware.route.path.replace('/', ' '), link: middleware.route.path, type: 'nav-link'});
          // routes.push(middleware.route);
      } else if(middleware.name === 'router'){ // router middleware
          middleware.handle.stack.forEach(function(handler){
              route = handler.route;
              // route && routes.push(route);
              route && data.routes.push({label: route.path.replace('/', ' '), link: route.path, type: 'nav-link'});
          });
      }
  });

  options.data = data;
  return options.fn(options.data);
};

// use different main templates based on environment to enable base tag
if (process.env.NODE_ENV == 'production'){
  var mainTemplate = 'main-heroku';
} else {
  var mainTemplate = 'main-dev';
}

var Handlebars = hbsexpress({
  handlebars: handlebarsCore,
  defaultLayout: mainTemplate,
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

// Initialize ALL dynamic routes including subfolders
// read all files and folders in /routes
function recursiveRoutes(folderName) {
    fs.readdirSync(folderName).forEach(function(file) {

        var fullName = path.join(folderName, file);
        var stat = fs.lstatSync(fullName);

        if (stat.isDirectory()) {
        // recursively scan folders
            recursiveRoutes(fullName);
        } else if (file.toLowerCase().indexOf('.js') > 1) {
        // if file is js, include it, let the js set up the routes
            require('./' + fullName);
        } else if (file.toLowerCase().indexOf('.md') > 1) {
        // if the file is markdown, generate a MD route
          markdownRoute(fullName);
        }
    });
}

// read the md file, parse it and render the file in MD template
function markdownRoute(routePath){
  fs.readFile(routePath, function (err, data) {
      if (err) {
          throw err;
      }
      var md = marked(data.toString());
      // formate route string
      var route = routePath.replace('.md', '');
      var route = route.replace('pages', '');
      // init route
      app.get(route, function(request, response) {
        var locals = { appName : "Decoded Brand Guidelines", md: md};
        response.render('pages/md', locals);
      });
  });
}
recursiveRoutes('pages'); // Initialize it

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
