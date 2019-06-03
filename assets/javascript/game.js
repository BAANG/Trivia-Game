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

hideSplash = function() {
    $("#splash").css("visibility", "hidden"); //...hides splash div
    $("#quiz").addClass("slide-in");
    $("#quiz").css("visibility", "visible"); // reveals quiz ui
}



$(document).ready(function(){ //On page load...
    // Load sfx
    console.log(questions[1].currentAnswer)

    $("#splash").addClass("scale-in");

    //Splash screen
    $("#start").on("click", function() {

        $("#splash").addClass("scale-out");

        setTimeout(hideSplash, 1000);
        
        // Animate and start music
        // Rules & directions
        // Prompt user to press 'START' button when ready.
    })

        
    //TODO: - NEXT QUESTION - Create function for generating/printing new question to page (var nextQuestion = function()...)
        // Starts countdown timer after generating question to page
        // Utilizes makeQuestion() constructor to dynamically create question objects
        // Utilizes questionNum as for loop iterator and/or for tracking the next question in questions array
        
    //TODO: - TIMER FUNCTION - Create function for timer/countdown (may possibly be nested witin nextQuestion())
         // - single second intervals, decrement 'countdown', print new countdown value to page

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