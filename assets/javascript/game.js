var countdown = 30;
var questionArray = []; // TODO: Insert list of questions
var correct = 0;
var incorrect = 0;
var questionIndex = 0; // for tracking index of questions array
var questionNum = (questionIndex + 1); // for printing correct question number on page


// Constructor for Trivia Questions

function makeQuestion(prompt, options, answer, explain) {
    this.currentQuestion = prompt;
    this.currentOptions = options;
    this.currentAnswer = answer;
    this.currentExplain = explain;
};

// PROMPT // OPTIONS // ANSWER // EXPLANATION //
var questions = [                                
    new makeQuestion("How many days are in a week?", ["12", "8", "7", "5"], "7", "There are '7' days in a week. Sunday, Monday, Tuesday, Wednesday, Thursday, Friday and Saturday."),
    new makeQuestion("True or False: A polar bear's skin is black.", ["True", "False"], "True", "Underneath their fur, polar bear's have BLACK skin -- the better to soak in the sun's warmth."),
];

var newPrompt = questions[questionIndex].currentQuestion
var newOptions = questions[questionIndex].currentOptions
var newAnswer = questions[questionIndex].currentAnswer
var newExplain = questions[questionIndex].currentExplain

var loadQuestion = function() {

newPrompt = questions[questionIndex].currentQuestion
newOptions = questions[questionIndex].currentOptions
newAnswer = questions[questionIndex].currentAnswer
newExplain = questions[questionIndex].currentExplain

    $("#question-number").empty();
    $("#prompt").empty();
    $("#askQuestion").empty();
    $("#right").empty();
    $("#wrong").empty();

    
    $("#question-number").text("#" + questionNum);
    
    $("#countdown").after("<div id='prompt'>")
    $("#countdown").after("<span id='askQuestion'><h4>" + newPrompt + "</h4></span><br><br>")
    
    $("#prompt").append("<div id='quiz-options'>")
    for (var j = 0; j < newOptions.length; j++) {
        
        $("#quiz-options").append("<button type='button' class='btn btn-primary' id='userPick' value='" + newOptions[j] + "'>" + newOptions[j] + "</button>")

    }
}

var hideSplash = function() {
    $("#splash").css("visibility", "hidden"); //...hides splash div
    beginCountdown();
    loadQuestion();
    $("#quiz").addClass("slide-in");
    $("#quiz").css("visibility", "visible"); // reveals quiz ui
    setTimeout(function() {
        $("#quiz").removeClass("slide-in")
    }, 1000)
}


var nextQuestion = function() {
    questionIndex++;

    if (questionIndex === questions.length) {
        
        $("#quiz").addClass("slide-out");

        $("#correct").html("<h3>" + correct + "</h3> questions correct!")
        $("#incorrect").html("<h3>" + incorrect + "</h3> questions wrong...")

        setTimeout(function() {
            $("#results").css("visibility", "visible");
            $("#results").addClass("puff-in")
            $("#correct").addClass("pulse")
            $("#incorrect").addClass("pulse")
        }, 1000)

    } else {

        $("#quiz").addClass("slide-out");
        
        setTimeout(function () { // timed function for animating in new quiz card
            
            loadQuestion();
            $("#quiz").removeClass("slide-out");
            $("#quiz").addClass("slide-in");
            $("#quiz").css("visibility", "visible");
            beginCountdown();
            setTimeout(function() {
                $("#quiz").removeClass("slide-in");
                
            }, 1000)
            
        }, 1000)
    }

    
}

var intervalId;

var beginCountdown = function() {
    $("#countdown").text(countdown);
    intervalId = setInterval(countdownInterval, 1000);
    
}

var stopCountdown = function() {
    clearInterval(intervalId);
}


var countdownInterval = function () {
    countdown--;
    $("#countdown").text(countdown);
}

var animateAnswer = function () {
    $("#answer").css("visibility", "visible")
    $("#answer").addClass("roll-in")
    setTimeout(function() {
        $("#answer").addClass("roll-out")
        $("#answer").removeClass("roll-in")
    }
    , 5000)
    setTimeout(function() {
        $("#answer").css("visibility", "hidden")
        $("#answer").removeClass("roll-out")
    }, 6000)
}



$(document).ready(function(){ //On page load...
// TODO:
    // Play Jeopardy music
    // Load Sound Effects
    // Option hover, option select, correct answer, wrong answer, slide-in, slide-out
console.log(questions)

$("#splash").addClass("scale-in");

//Splash screen
$("#start").on("click", function() {
    
    $("#splash").addClass("scale-out");
    setTimeout(hideSplash, 1000); //note: hideSplash also loads first question

    console.log(newPrompt)
    console.log(newAnswer)
    
});


// Quiz options

$(document).on("click", "#userPick", function() {
    countdown=30;
    stopCountdown();

    if (this.value == newAnswer) {
        correct++;
        animateAnswer();
        $("#right-wrong").text("RIGHT")
        $("#right").text(newExplain)
        setTimeout(nextQuestion, 6000)
    } else {
        incorrect++;
        animateAnswer();
        $("#right-wrong").text("WRONG")
        $("#wrong").text(newExplain)
        setTimeout(nextQuestion, 6000)
    }
})


            // Start over/game reset
            
            
})
