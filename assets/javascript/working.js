var game = {
	unanswered: 4,
	correct: 0,
	wrong: 0,
	answers: ["c","c","c","c"],

	userResponses: [],

    showGame: function() {
		$('#start').addClass('hidden');
		$('.questionList').removeClass('hidden');
		timer.start();

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
		}

	$('#title').html("GAME OVER"); //Display GAME OVER text
	$('.questionList').addClass('hidden');	//hide the questions
	$('#resetDiv').removeClass('hidden');	//show the reset div
	$('#unanswered').html("Unanswered: " + this.unanswered); //display the no. of unanswered 
	$('#correct').html("Correct: " + this.correct);	//display the no. of correct 
	$('#wrong').html("Wrong: " + this.wrong);	//display the no. of wrong 

},

};

var timer = {
	time: 5,
	flag: 0,

	start: function() {

    //Game begins with flag = 0. THerefore, this condition is met, and flag becomes 1. 
    if (timer.flag === 0) {
      intervalId = setInterval(timer.count, 1000);
      console.log(timer.time)
      timer.flag++;
    };

  },

	// start: function() {
	// 	setTimeout(this.stop, 5000)
	// 	if (timer > 0) {
	// 		this.time--;
	// 	}

	// 	if (timer === 0) {
	// 		this.stop();
	// 	};
	// },

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
	else { timer.stop(); };
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
}

QuestionClick('q1', 'q1r' ,0);
QuestionClick('q2', 'q2r' , 1);
QuestionClick('q3', 'q3r', 2);
QuestionClick('q4', 'q4r', 3);


