//Start button pressed:
	//game initialized
	//timer begins
	//questions + timer revealed
	//each time a question choice is selected, the response is recorded
	//responses that are recorded will show up in the score
//score object?

//when timer = 0:
	//game ends
	//screen goes to show score








var game = {
	unanswered: 5,
	correct: 0,
	wrong: 0,
	answers: ["c","c","c","c"],



	q1ans: 0,
	q2ans: 0,
	q3ans: 0,
	q4ans: 0,

	responses: [],

	// q1ans: "c", 
	// q2ans: "c", 
	// q3ans: "c", 
	// q4ans: "c", 


	readResponse: function () {

	for (var i=0;i<this.unanswered;i++){
		if (this.responses[i] === this.answers[i]){
			this.unanswered--;
			this.correct++;
		}
		else{
			this.unanswered--;
			this.wrong++;
		};

		// var resp = rep;
	// 	if ( responses ===  ) {
	// 		this.correctResponse();
	// 	}
	// 	else { this.wrongResponse(); };
	// },
		// console.log(this.responses)
	},
	// correctResponse: function() {
	// 	this.unanswered--;
	// 	this.correct++;
	// },

	// wrongResponse: function() {
	// 	this.unanswered--;
	// 	this.wrong++;
	// },

};
// $('input[name=radioName]:checked').val();
// $("#q1").on( "click", function() {
// 	var q1r = $('input[name=radioName]:checked').val();
// 	console.log(q1r);
// 	game.readResponse(q1r);
// });

$("input").on( "click", function() {

	if ($( "input:checked" ).attr("name") === "q1") {
		var q1r = $( "input:checked" ).val();
		console.log(q1r);
	};

	if ($( "input:checked" ).attr("name") === "q2") {
		var q2r = $( "input:checked" ).val();
		console.log(q2r);
	};

	if ( $( "input:checked" ).attr("name") === "q3") {
		var q3r = $( "input:checked" ).val();
		console.log(q3r);
	};

	if ($( "input:checked" ).attr("name") === "q4") {
		var q4r = $( "input:checked" ).val();
		console.log(q4r);
	};

});

// $( "#q2" ).on( "click", function() {
// 	var q2r = $( "input:checked" ).attr("name");
// 	console.log(q2r);

// });
// $( "#q3" ).on( "click", function() {
// 	var q3r = $( "input:checked" ).attr("name");
// 	console.log(q3r);
// });

// $( "#q4" ).on( "click", function() {
// 	var q4r = $( "input:checked" ).attr("name");
// 	console.log(q4r);
// });



// 	if ( (qr === "q1") && ( game.q1ans === 0 )) {
// 		var q1r = $( "input:checked" ).val();
// 		game.q1ans++;
// 		game.responses[0] = q1r;
// 		game.readResponse(q1r);
// 	};
// 	if ( (qr === "q2") && ( game.q2ans === 0 )) {
// 		var q2r = $( "input:checked" ).val();
// 		game.responses[1] = q2r;
// 		game.readResponse(q2r);
// 	};
// 	if ( (qr === "q3") && ( game.q3ans === 0 )) {
// 		var q3r = $( "input:checked" ).val();
// 		game.responses[2] = q3r;
// 		game.readResponse(q3r);
// 	};
// 	if ( (qr === "q4") && ( game.q4ans === 0 )) {
// 		var q4r = $( "input:checked" ).val();
// 		game.responses[3] = q4r;		
// 		game.readResponse(q4r);
// 	};




// 	// if (($( "input:checked" ).val())
// 	// var response = $( "input:checked" ).val();
	
// 	// console.log(response);
// 	// if ($( "input:checked" )) {
// 	// 	var response1 = $( "input:checked" ).val();
// 	// 	console.log(response1);
// 	// 	game.readResponse(response1);
// 	// };
// });
// //question1

// 	// $("input")



















