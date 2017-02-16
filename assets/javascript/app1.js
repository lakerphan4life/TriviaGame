var game = {
	unanswered: 4,
	correct: 0,
	wrong: 0,
	answers: ["c","c","c","c"],

	userResponses: [],

	result: function() {
		for (var i = 0; i < this.userResponses.length; i++) {
			if (this.userResponses[i] === this.answers[i]) {
				this.correct++;
				this.unanswered--;
			}
			if (this.userResponses[i] !== this.answers[i]) {
				this.wrong++;
				this.unanswered--;
			}
    	};

    	$('#title').html("GAME OVER");

		$('.questionList').addClass('hidden');
		$('#resetDiv').removeClass('hidden');
		$('#unanswered').html("Unanswered: " + this.unanswered);
		$('#correct').html("Correct: " + this.correct);
		$('#wrong').html("Wrong: " + this.wrong);

	},

        // console.log(this.userResponses);
        // console.log(response);
        // console.log(abcd);
        // console.log("---------");
        
 //    resetGame: function() {
 //    	this.unanswered = 4;
	// 	this.correct = 0;
	// 	this.wrong = 0;
	// 	this.userResponses = [];
	// 	$('#title').html("Start Game");
	// 	$('.questionList').addClass('hidden');
	// 	$('#resetDiv').addClass('hidden');
	// 	timer.time = 5,
	// },


		// $('#title').html("Start Game");
		// $('.questionList').addClass('hidden');

    

    showGame: function() {
		$('#start').addClass('hidden');
		$('.questionList').removeClass('hidden');
		timer.start();
    },


};

	

    // checkAnswer: function() {
    //    for (var i = 0; i < this.userResponses.length; i++) {
    //     if (this.userResponses[i] === this.answers[i]) {
    //     	this.unanswered--;
    //     	this.correct++;
    //     	console.log(this.correct, this.unanswered);
    //     }
    //     else {
    //     	this.unanswered--;
    //     	this.wrong++;	
    //     	console.log(this.correct, this.unanswered);
    // 	}
    // 	}
    // },

    // resultsPage: function() {

    // }


var timer = {
	time: 6,
	flag: 0,


    start: function() {

    	var interval = setInterval(timer.count,6000);
  		console.log(timer.time);
    	var currentTime = timer.timeConverter(timer.time);
		$('#title').html("Time Remaining: " + currentTime + " seconds!");
  	},

  	count: function() {
		if (timer.time >0) {
			timer.time--;
		}

		else { 
			clearInterval(intervalId); 
		};
  	},


  	timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  	}

};

   


// timer needs to start when the start button is pressed.


//EVENTS

$(document).ready(function() { 
	$('#title').html("Start Game");
	$('.questionList').addClass('hidden');
	$('#resetDiv').addClass('hidden');

});

$('#start').on('click', function() {
	game.showGame();

	timer.start();


});





function QuestionClick(x, y,z){
   this.y = y;
   this.x = x;
   console.log(x);
   console.log(y)
   $('input[name="'+x+'"]').on('click', function(){
       var answer = $('input[name="'+x+'"]:checked').val();
           game.userResponses[z] = answer;
	});
}

QuestionClick('q1', 'q1r' ,0);
QuestionClick('q2', 'q2r' , 1);
QuestionClick('q3', 'q3r', 2);
QuestionClick('q4', 'q4r', 3);


// $('input[name="q1"]').on('click', function() {
// 		var q1r = $('input[name="q1"]:checked').val();
// 		// game.userResponses[0] = q1r;
// 		game.userResponses.push(q1r)
// 		console.log(q1r);
// 		// game.countResponse(q1r);
// 		// flag1++;
// });
// $('input[name="q2"]').on('click', function() {
// 		var q2r = $( 'input[name="q2"]:checked').val();
// 		game.userResponses[1] = q2r;
// 		console.log(q2r);
// 		// game.countResponse(q2r);
// 		// flag1++;
// });
// $('input[name="q3"]').on('click', function() {
// 		var q3r = $( 'input[name="q3"]:checked').val();
// 		game.userResponses[2] = q3r;
// 		console.log(q3r);
// 		// game.countResponse(q3r);
// 		// flag1++;
// });
// $('input[name="q4"]').on('click', function() {
// 		var q4r = $( 'input[name="q4"]:checked' ).val();
// 		game.userResponses[3] = q4r;
// 		console.log(q4r);
// 		// game.countResponse(q4r);
// 		// flag1++;
// });
