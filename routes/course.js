
/*
 * GET course listing.
 */

exports.list = function(req, res){
  // This placeholder directly responds, and does not use the view engine
   res.render('course', { title: 'Courses'});
};

