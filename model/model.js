// empty file for editing

var courseList = [
  { "name":"Intoructory Golf" , "courseNumber":"95231", "instructor": "Tiger Woods" },
  { "name":"Mobile to Cloud: Building Distributed Systems" , "courseNumber":"67327", "instructor": "Joe Mertz" },
  { "name":"Web Application Security" , "courseNumber":"67328", "instructor": "Clarence Heimann" },
  { "name":"Communication Design Fundamentals" , "courseNumber":"51262", "instructor": "Brenden Kneram" },
  { "name":"Finance" , "courseNumber":"70203", "instructor": "Nancy Fi" },
  { "name":"Design Studio I" , "courseNumber":"51201", "instructor": "Bob Ross" },
  { "name":"Sensemaking" , "courseNumber":"05499", "instructor": "Nikki Nik" }
]

function getCourse(courseNum){
  for(var i=0;i<courseList.length;i++){
    if(courseList[i].courseNumber == courseNum){
      return courseList[i];
    }
  }
  return null;
}

function stripDash(courseNumString){
  // strip out spaces/dashes since we want unified model
  return courseNumString.replace("-","").replace(" ","");
}

function addToList(course){
  courseNumber = stripDash(course.courseNumber);
  courseList.push(course);
  return true;
  // its kinda impossible to get here, so meh
  //  return false;
}

function removeFromList(courseNumber){
  if(typeof(courseNumber) == "object"){ // something went wrong and we have a course
    courseNumber = courseNumber.courseNumber;
  }
  courseNumber = stripDash(courseNumber);
  if(getCourse(courseNumber)){
    courseList = courseList.filter(function(val,i,arr){
      return !(val.courseNumber == courseNumber);
    });
    return true;
  }
  return false;
}

function editCourse(course){
  courseNumber = stripDash(course.courseNumber);
  if(getCourse(courseNumber)){
    courseList = courseList.map(function(val,i,arr){
      if(val.courseNumber == courseNumber){
        return course;
      } else{ 
        return val;
      }
    });
    return true;
  }
  return false;
}

function viewCourse(courseNumber){
  courseNumber = stripDash(courseNumber);
  return getCourse(courseNumber);
}

function listCourses(){
  return courseList;
}

exports.view = viewCourse;
exports.edit = editCourse;
exports.destroy = removeFromList;
exports.create = addToList;
exports.list = listCourses;

