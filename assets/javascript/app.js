var game = {
	unanswered: 4,
	correct: 0,
	wrong: 0,
	answers: ["c","c","c","c"],

	userResponses: [],

    showGame: function() {
		$('#start').addClass('hidden');
		$('#title').html("Ready...");
		setTimeout(game.set,1000);
		setTimeout(game.go,2000);
		setTimeout(timer.start,2800);

    },

    set: function() {
    	$('#title').html("...Set...");
    },

    go: function () {
    	$('#title').html("GO!").addClass('massive');
    },

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

		$('#title').html("GAME OVER").addClass('massive'); //Display GAME OVER text
		$('.questionList').addClass('hidden');	//hide the questions
		$('#resetDiv').removeClass('hidden');	//show the reset div
		$('#unanswered').html("Unanswered: " + this.unanswered); //display the no. of unanswered 
		$('#correct').html("Correct: " + this.correct);	//display the no. of correct 
		$('#wrong').html("Wrong: " + this.wrong);	//display the no. of wrong 

	},


};

var timer = {
	time: 5,


	start: function() {
		$('.questionList').removeClass('hidden');
		$('#title').html("Time Remaining: " + timer.timeConverter(timer.time) + " seconds!").removeClass('massive');
		intervalId = setInterval(timer.count, 1000);
      	console.log(timer.time)
  	},

	stop: function() {
		clearInterval(intervalId);
		game.result();
	},

  count: function() {
  	if (timer.time > 0) {
		timer.time--;
		var currentTime = timer.timeConverter(timer.time);
		$('#title').html("Time Remaining: " + currentTime + " seconds!");
	}
	else { 
		timer.stop(); 
	};
  },

  timeConverter: function(t) {
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
  },
};

//EVENTS
$(document).ready(function() { 
	$('#title').html("Start Game");
	$('.questionList').addClass('hidden');
	$('#resetDiv').addClass('hidden');

});

$('#start').on('click', function() {
	game.showGame();
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
};
QuestionClick('q1', 'q1r' ,0);
QuestionClick('q2', 'q2r' , 1);
QuestionClick('q3', 'q3r', 2);
QuestionClick('q4', 'q4r', 3);