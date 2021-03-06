var express = require('express'),
    cons = require ('consolidate'),
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
// list
app.get('/courses', function(req,res){
  var courseList = model.list()
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(courseList));
});	
// view
app.get('/courses/:coursenum', function(req,res){
  var course = model.view(req.params.coursenum);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(course));
});	
// create
app.put('/courses', function(req,res){
  var course = {"courseNumber":req.body.courseNumber,"name":req.body.name,"instructor":req.body.instructor};
  console.log(course);
  var bool = model.create(course);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(bool));
});	
// edit
app.post('/courses',function(req,res){
  var course = {"courseNumber":req.body.courseNumber,"name":req.body.name,"instructor":req.body.instructor};
  console.log(JSON.stringify(course));
  var bool = model.edit(course);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(bool));
});	
// delete
app.delete('/courses', function(req,res){
  var bool = model.destroy(req.body.courseNumber);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(bool));
});	

app.listen(5555);
console.log("Express server listening on port 5555");
