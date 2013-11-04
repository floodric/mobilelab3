// empty file for editing
$(function() {
	$("#f1").submit(addToList);
	$("#f2").submit(removeFromList);
	$("#f3").submit(editCourse);
	$("#f4").submit(viewCourse);
	$("#f5").submit(listCourses);
	} );



// courses is an array of courses
var courseList = $.getJSON('./courses.json').courses;
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

