var express = require('express');
var hbsexpress = require('express-handlebars');
var marked = require('marked');
var path = require('path');

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

// Initialize ALL dynamic routes including subfolders
var fs = require('fs');
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
            console.log("require('" + fullName + "')");
        } else if (file.toLowerCase().indexOf('.md') > 1) {
        // if the file is markdown, read the file, parse it and render the file in MD template
          fs.readFile(fullName, function (err, data) {
              if (err) {
                  throw err;
              }

              var md = marked(data.toString());

              var route = fullName.replace('.md', '');
              var route = route.replace('routes', '');

              app.get(route, function(request, response) {
                var locals = { appName : "Decoded Brand Guidelines", md: md};
                response.render('pages/md', locals);
              });
          });


        }
    });
}
recursiveRoutes('routes'); // Initialize it

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
