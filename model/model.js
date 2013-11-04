// empty file for editing

var courseList = [
  { "name":"Intoructory Golf" , "courseNumber":"95-231", "instructor": "Tiger Woods" },
  { "name":"Mobile to Cloud: Building Distributed Systems" , "courseNumber":"67-327", "instructor": "Joe Mertz" },
  { "name":"Web Application Security" , "lastName":"67-328", "instructor": "Clarence Heimann" },
  { "name":"Communication Design Fundamentals" , "courseNumber":"51-262", "instructor": "Brenden Kneram" },
  { "name":"Finance" , "courseNumber":"70-203", "instructor": "Nancy Fi" },
  { "name":"Design Studio I" , "courseNumber":"51-201", "instructor": "Bob Ross" },
  { "name":"Sensemaking" , "courseNumber":"05-499", "instructor": "Nikki Nik" }
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

function removeFromList(course){
  courseNumber = stripDash(course.courseNumber);
  if(getCourse(courseNumber)){
    courseList.filter(function(val,i,arr){val.courseNumber == courseNumber});
    return true;
  }
  return false;
}

function editCourse(course){
  courseNumber = stripDash(courseNumber);
  if(getCourse(courseNumber)){
    courseList.map(function(val,i,arr){
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

