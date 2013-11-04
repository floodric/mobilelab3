// empty file for editing

// courses is an array of courses
var courseList = $.getJSON('./courses.json').courses;

function stripDash(courseNumString){
  // strip out spaces/dashes since we want unified model
  return courseNumString.replace("-","").replace(" ","");
}

function addToList(course){
  courseNumber = stripDash(course.courseNumber);
  courseList[courseNumber] = course;
}

function removeFromList(course){
  courseNumber = stripDash(course.courseNumber);
  if(courseList[courseNumber]){
    courseList[courseNumber] = null;
  }
}

function editCourse(course){
  courseNumber = stripDash(courseNumber);
  if(courseList[courseNumber]){
    courseList[courseNumber] = course;
  }
}

function viewCourse(courseNumber){
  courseNumber = stripDash(courseNumber);
  return courseList[courseNumber];
}

function listCourses(){
  return courseList;
}

exports.view = viewCourse;
exports.edit = editCourse;
exports.destroy = removeFromList();
exports.create = addToList;
exports.list = listCourses();

