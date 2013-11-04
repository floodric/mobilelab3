var express = require('express'),
    routes = require('./routes/slash'),
    course = require('./routes/course'),
    update = require('./routes/update'),
    model = require('./model/model.js'),
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
app.get('/courses', model.list);	
// function(req,res){ console.log(typeof req.params.coursenum) });
app.get('/courses/:coursenum', function(req,res){
  var course = model.view(req.params.coursenum);
  res.send(JSON.stringify(course));
});	
//app.get('/courses/:coursenum/students', routes.pathless);	
//app.get('/courses/:coursenum/students/:andrew', routes.pathless);	
app.put('/courses', function(req,res){
  var course = model.create(req.params.coursenum);
  res.send(JSON.stringify(course));
});	
//app.put('/courses/:coursenum/students', routes.pathless);	
app.post('/courses/:coursenum',function(req,res){
  var bool = model.edit(req.params.coursenum);
  res.send(JSON.stringify(bool));
});	
//app.post('/courses/:coursenum/students/:andrew', routes.pathless);	
app.delete('/courses', function(req,res){
  var bool = model.destroy(req.params.coursenum);
  res.send(JSON.stringify(bool));
});	
//app.delete('/courses/:coursenum/students', routes.pathless);	

app.post('/request', update.doPost);	// example handling of a POST request 
app.put('/request', update.doPut);		// example handling of a PUT request

app.listen(5555);
console.log("Express server listening on port 5555");
