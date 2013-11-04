// empty file for editing

var courseList = {
  "95231":{ "name":"Intoructory Golf" , "courseNumber":"95-231", "instructor": "Tiger Woods" },
  "67327":{ "name":"Mobile to Cloud: Building Distributed Systems" , "courseNumber":"67-327", "instructor": "Joe Mertz" },
  "67328":{ "name":"Web Application Security" , "lastName":"67-328", "instructor": "Clarence Heimann" },
  "51262":{ "name":"Communication Design Fundamentals" , "courseNumber":"51-262", "instructor": "Brenden Kneram" },
  "70203":{ "name":"Finance" , "courseNumber":"70-203", "instructor": "Nancy Fi" },
  "51201":{ "name":"Design Studio I" , "courseNumber":"51-201", "instructor": "Bob Ross" },
  "05499":{ "name":"Sensemaking" , "courseNumber":"05-499", "instructor": "Nikki Nik" }
}

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
exports.destroy = removeFromList;
exports.create = addToList;
exports.list = listCourses;

