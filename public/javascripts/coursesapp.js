
	function viewCourse() {
		$('#div1').html("");
		$.ajax({
				url: "courses",
				type: "get",
				data: {
					courseNumber: $("#ts1").val()
				},
				success: function(data) {
					//$('#div1').(JSON.parse(data));
          console.log(data);
					data = JSON.parse(data);
					data.forEach(function( val, i, arr) {
						console.log(val);
						$('#div1').append("<p>" + val.courseNumber + ": " + val.name + "</p>");
					});
				}
		});
		return false;

	};

	function createCourse(event) {
		console.log("create course");
		$.ajax({
				url: "courses",
				type: "put",
				data: {
					courseNumber: $("#courseNumber").val(),
					name: $("#name").val(),
					instructor: $("#instructor").val()
				},
				success: function(data) {
					if (data == "true") { $('#div2').html("Successfully created course"); viewCourse(); }
					else { $('#div2').html("Could not create course")};
				}
		});
		return false;	
	};




	function editCourse(event) {
		console.log("edit course");
		$.ajax({
				url: "courses",
				type: "post",
				data: {
					courseNumber: $("#courseNumberEdit").val(),
					name: $("#nameEdit").val(),
					instructor: $("#instructorEdit").val()
				},
				success: function(data) {
					if (data == "true") { $('#div2').html("Successfully edited course"); viewCourse(); }
					else { $('#div2').html("Could not edit course")};
				}
		});
		return false;	
	};



	function deleteCourse(event) {
		console.log("delete course");
		$.ajax({
				url: "courses",
				type: "delete",
				data: {
					courseNumber: $("#courseNumberDelete").val(),
				},
				success: function(data) {
					if (data == "true") { $('#div2').html("Successfully deleted course"); viewCourse(); }
					else { $('#div2').html("Could not delete course")};
				}
		});
		return false;	
	};


	$(function() {
		$("#f1").click(viewCourse);
		$("#f2").submit( function(event) {
			event.preventDefault();
			createCourse();
		});

		$("#f3").submit( function(event) {
			event.preventDefault();
			editCourse();
		});

		$("#f4").submit( function(event) {
			event.preventDefault();
			deleteCourse();
		});

	} );

