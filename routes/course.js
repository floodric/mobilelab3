
/*
 * GET course listing.
 */

exports.list = function(req, res){
   res.render('main', { courseList: 'Courses'});
};

