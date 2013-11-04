// empty file for editing

// courses is an array of courses
var courseList = $.getJSON('./courses.json');
function addToList(course){
  courseList[course.courseNumber] = course;
}

function removeFromList(course){
  if(courseList[courseNumber]){
    courseList[courseNumber] = null;
  }
}

function editCourse(course){
  if(courseList[courseNumber]){
    courseList[courseNumber] = course;
  }
}

function viewCourse(courseNumber){
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

