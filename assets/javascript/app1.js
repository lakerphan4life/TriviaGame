var game = {
	unanswered: 4,
	correct: 0,
	wrong: 0,
	answers: ["c","c","c","c"],

	userResponses: [],

	result: function() {
		var response = this.userResponses[i];
		for (var i = 0; i < this.userResponses.length; i++) {
			if (response === "c") {
				this.correct++;
				this.unanswered--;
			}
			if (response === "wrong") {
				this.wrong++;
				this.unanswered--;
			}
    	};

        console.log(this.userResponses);
        console.log(response);
        console.log(abcd);
        console.log("---------");
        
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
	time: 30,

    mins: 0.5,//Set the number of minutes you need
    secs: this.mins * 60,
    currentSeconds: 0,
    currentMinutes: 0,
    /* 
     * The following line has been commented out due to a suggestion left in the comments. The line below it has not been tested. 
     * setTimeout('Decrement()',1000);
     */ 

    Decrement: function() {
        this.currentMinutes = Math.floor(this.secs / 60);
        this.currentSeconds = this.secs % 60;
        if(this.currentSeconds <= 9) this.currentSeconds = "0" + this.currentSeconds;
        this.secs--;
        document.getElementById("timer").innerHTML = this.currentMinutes + ":" + this.currentSeconds; //Set the element id you need the time put into.
        if(this.secs !== -1) setTimeout('timer.Decrement()',1000);
    },
};

timer.Decrement();


$('input[name="q1"]').on('click', function() {
		var q1r = $('input[name="q1"]:checked').val();
		game.userResponses[0] = q1r;
		console.log(q1r);
		// game.countResponse(q1r);
		// flag1++;
});
$('input[name="q2"]').on('click', function() {
		var q2r = $( 'input[name="q2"]:checked').val();
		game.userResponses[1] = q2r;
		console.log(q2r);
		// game.countResponse(q2r);
		// flag1++;
});
$('input[name="q3"]').on('click', function() {
		var q3r = $( 'input[name="q3"]:checked').val();
		game.userResponses[2] = q3r;
		console.log(q3r);
		// game.countResponse(q3r);
		// flag1++;
});
$('input[name="q4"]').on('click', function() {
		var q4r = $( 'input[name="q4"]:checked' ).val();
		game.userResponses[3] = q4r;
		console.log(q4r);
		// game.countResponse(q4r);
		// flag1++;
});