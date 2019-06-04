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
    
    $("#question-number").text("#" + questionNum);
    
    $("#countdown").after("<div id='prompt'>")
    $("#countdown").after("<h4>" + newPrompt + "</h4><br><br>")
    
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

    $("#quiz").addClass("slide-out");
    
    setTimeout(function () { // timed function for animating in new quiz card
        
        loadQuestion();
        $("#quiz").addClass("slide-in");
        $("#quiz").css("visibility", "visible");
        setTimeout(function() {
            $("#quiz").removeClass("slide-in");
            beginCountdown();
            
        }, 1000)
        
    }, 1000)
    
}

var intervalId;

var beginCountdown = function() {
    $("#countdown").text(countdown);
    intervalId = setInterval(countdownInterval, 1000);
    
}

var stopCountdown = function() {
    clearInterval(intervalId);
    countdown=30;
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
    stopCountdown();

    if (this.value == newAnswer) {
        animateAnswer();
        $("#right-wrong").text("RIGHT")
        $("#right").text(newExplain)
    } else {
        animateAnswer();
        $("#right-wrong").text("WRONG")
        $("#wrong").text(newExplain)
    }
})

    

        
        

    //TODO: - SHOW ANSWER - Create function for revealing answer (var showAnswer = function()...)
        // will have setTimeout(nextQuestion, 5000) nested inside
            // TODO: create html layout with div for quiz question & answers (change div innerHTML to reveal correct answer and image)


        // Begin 'for' loop without iterator limited by questions.length (questionNum++ when question is answered OR timer is up)
            // Reveal/make visible quiz/question div 
               
                // nextQuestion()
                // Start timer function (30s)
    
                    // on.click() event listener with option buttons as target
                    // stores if answer is correct or not (questions[i].currentAnswer === event.value(???))
                    // triggers answer reveal (showAnswer())
                        // - ideally, showAnswer() will then run nextQuestion() function

                        //  LOOP UNTIL (questionIndex === questions.length)

            // Show new div with values for correct & incorrect

            // Start over/game reset
            
            
    })
