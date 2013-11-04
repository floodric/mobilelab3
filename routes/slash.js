/*
 * GET home page.
 */

exports.pathless = function(req, res){
  res.render('main', { title: 'Course List'});
};