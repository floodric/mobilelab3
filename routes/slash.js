/*
 * GET home page.
 */

exports.pathless = function(req, res){
  res.render('courses', { courseList: 'Courses'});
};
