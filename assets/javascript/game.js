var countdown = 30;
var questionArray = []; // TODO: Insert list of questions
var correct = 0;
var incorrect = 0;
var questionIndex = 0; // for tracking index of questions array
var questionNum = (questionIndex + 1); // for printing correct question number on page

// Constructor for Trivia Questions

function makeQuestion(prompt, options, answer, image) {
    this.currentQuestion = prompt;
    this.currentOptions = options;
    this.currentAnswer = answer;
    this.currentImage = image;
};

                                // PROMPT // OPTIONS // ANSWER // IMG SRC //
var questions = [                                
    new makeQuestion("How many days are in a week?", ["12", "8", "7", "5"], "7", "[INSERT IMG SRC HERE]"),
    new makeQuestion("True or False: A polar bear's skin is black.", ["True", "False"], "True", "[img src]"),
];

var loadQuestion = function() {
    var newPrompt = questions[questionIndex].currentQuestion
    var newOptions = questions[questionIndex].currentOptions
    var newAnswer = questions[questionIndex].currentAnswer
    var newImage = questions[questionIndex].currentImage
    
    beginCountdown()

    $("#question-number").text("#" + questionNum);

    $("#countdown").after("<div id='prompt'>")
    $("#countdown").after("<h4>" + newPrompt + "</h4><br><br>")

    $("#prompt").append("<form>")
    for (var j = 0; j < newOptions.length; j++) {

        $("#prompt").append("<input type='radio' value='" + newOptions[j] + "' >  " + newOptions[j] + "</input><br>")

    }
    $("#prompt").append("</form")

    
}

var hideSplash = function() {
    $("#splash").css("visibility", "hidden"); //...hides splash div

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

var beginCountdown = function() {
    $("#countdown").text(countdown);
    setInterval(countdownInterval, 1000);
}


var stopCountdown = function() {
    clearInterval(countdownInterval);
    countdown=30;
}

var countdownInterval = function () {
    countdown--;
    $("#countdown").text(countdown);
}



$(document).ready(function(){ //On page load...
    // TODO:
        // Play Jeopardy music
        // Load Sound Effects
            // Option hover, option select, correct answer, wrong answer, slide-in, slide-out
    console.log(questions[1])

    $("#splash").addClass("scale-in");

    //Splash screen
    $("#start").on("click", function() {

        $("#splash").addClass("scale-out");
        setTimeout(hideSplash, 1000); //note: hideSplash also loads first question
    })

        
        

    //TODO: - SHOW ANSWER - Create function for revealing answer (var showAnswer = function()...)
        // will have setTimeout(nextQuestion, 5000) nested inside
            // TODO: create html layout with div for quiz question & answers (change div innerHTML to reveal correct answer and image)

    $("#start").on("click", function() { // When start button is clickedd
        // Hide splash screen div

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
})