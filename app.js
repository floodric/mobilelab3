var express = require('express'),
    routes = require('./routes/slash'),
    course = require('./routes/course'),
    update = require('./routes/update'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');	// Set the directory for views
  app.set('view engine', 'ejs');	// Set the view engine to EJS
  app.use(express.favicon());	// Return a favicon if requested
  app.use(express.logger('tiny'));	// Log requests to the console.log
  app.use(express.bodyParser());	// Parse the request body into req.body object
  app.use(express.methodOverride()); // Allows you to override HTTP methods on old browsers
  app.use(app.router); // Do the routes defined below
  app.use(express.static(path.join(__dirname, 'public')));	// Process static files
});

app.get('/', routes.pathless);	
app.get('/courses', course.list);	
app.get('/courses/:coursenum', routes.pathless);	
//app.get('/courses/:coursenum/students', routes.pathless);	
//app.get('/courses/:coursenum/students/:andrew', routes.pathless);	
app.put('/courses', routes.pathless);	
//app.put('/courses/:coursenum/students', routes.pathless);	
app.post('/courses/:coursenum', routes.pathless);	
//app.post('/courses/:coursenum/students/:andrew', routes.pathless);	
app.delete('/courses', routes.pathless);	
//app.delete('/courses/:coursenum/students', routes.pathless);	

app.post('/request', update.doPost);	// example handling of a POST request 
app.put('/request', update.doPut);		// example handling of a PUT request

app.listen(5555);
console.log("Express server listening on port 5555");
