var countdown = 30;
var correct = 0;
var incorrect = 0;
var questionIndex = 0; // for tracking index of questions array
var questionNum = 1; // for printing correct question number on page


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
    new makeQuestion("What school does Harry Potter attend?", ["Stanford", "MIT", "Fogwarts", "Hogwarts"], "Hogwarts", "Harry Potter attended Hogwarts School of Witchcraft and Wizardry"),
    new makeQuestion("Michael Jackson was called thhe King of what?", ["King of Pop", "King of Soul", "Lord of the Dance", "Lord of the Flies"], "King of Pop", "Michael Jackson was called the 'King of Pop' and is still considered so to this day."),
    new makeQuestion("What band would walk 500 miles and 500 more just to fall down at your door?", ["The Protectors", "Vanessa Carlton", "The Smiths", "The Proclaimers"],"The Protectors", "The Scottish duo known as The Proclaimers, released their famous song, 'I'm Gonna Be (500 Miles)', in 1988."),
    new makeQuestion("Where was The Beatles' 'Can't Buy Me Love' recorded?", ["Liverpool", "London", "Brooklyn", "Paris"],"Paris" , "The Beatles recorded 'Can't Buy Me Love' in Paris, France and was written by John Lennon and Paul McCartney."),
    new makeQuestion("How many furlongs to a mile?", ["8", "16", "2.4", "12"], "8", "There are 8 furlongs to a mile."),
    new makeQuestion("In bowling, what is it if you knock down all the pins with two balls?", ["A turkey", "A double", "A spare", "A strike"], "A spare", "Knocking down a whole set of pins with two balls is called 'a spare'."),
    new makeQuestion("Winona Ryder and Christian Slater starred in this cult classic film?", ["Mean Girls", "Stranger Things", "Heathers", "Titanic"], "Heathers", "Heathers is a 1988 American dark comedy film written by Daniel Waters and directed by Michael Lehmann."),
    new makeQuestion("Robert Plant was the lead singer for what rock band from 1968 to 1980?", ["The Proclaimers", "Metallica", "The Plantation", "Led Zeppelin"], "Led Zeppelin", "Robert Anthony Plant CBE (born 20 August 1948) is an English singer, songwriter, and musician, best known as the lead singer and lyricist of the rock band Led Zeppelin. Plant is regarded as one of the greatest vocalists in the history of rock music.")
];

var newPrompt = questions[questionIndex].currentQuestion
var newOptions = questions[questionIndex].currentOptions
var newAnswer = questions[questionIndex].currentAnswer
var newExplain = questions[questionIndex].currentExplain

var loadQuestion = function() {
    var audio = $("#swoosh")[0];
    audio.play();

newPrompt = questions[questionIndex].currentQuestion
newOptions = questions[questionIndex].currentOptions
newAnswer = questions[questionIndex].currentAnswer
newExplain = questions[questionIndex].currentExplain

    $("#question-number").empty();
    $("#prompt").empty();
    $("#askQuestion").remove();
    $("#right").empty();
    $("#wrong").empty();

    
    $("#question-number").text("#" + questionNum);
    
    $("#countdown").after("<div id='prompt'>")
    $("#countdown").after("<span id='askQuestion'><h4>" + newPrompt + "</h4><br></span>")
    
    $("#prompt").append("<div id='quiz-options'>")
    for (var j = 0; j < newOptions.length; j++) {
        $("#quiz-options").prepend("<div class=col-4>")
        $("#quiz-options").append("<button type='button' class='btn btn-primary' id='userPick' value='" + newOptions[j] + "'>" + newOptions[j] + "</button></div>")

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
    var audio = $("#swoosh")[0];
    audio.play();

    questionIndex++;
    questionNum++;

    $("#askQuestion").remove();

    if (questionIndex === questions.length) {
        
        $("#quiz").addClass("slide-out");

        $("#correct").html("<h3>" + correct + "</h3> questions correct!")
        $("#incorrect").html("<h3>" + incorrect + "</h3> questions wrong...")

        setTimeout(function() {
            var audio = $("#fanfare")[0];
            audio.play();

            $("#quiz").css("visibility", "hidden")
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
    if (countdown <= 0) {
        stopCountdown();
        countdown=30;
        incorrect++;
        animateAnswer();
        $("#right-wrong").text("OUT OF TIME!")
        $("#wrong").text(newExplain)
        setTimeout(nextQuestion, 6000)  
    } else {
        countdown--;
        $("#countdown").text(countdown);
    }
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
    var audio = $("#intro")[0];
        audio.play();

    $(document).on("mouseenter", ".btn", function() {
    var audio = $("#blop")[0];
        audio.play();
    });

    $(document).on("click", ".btn", function() {
    var audio = $("#click")[0];
        audio.play();
    })

console.log(questions)

$("#splash").addClass("scale-in");

//Splash screen
$("#start").on("click", function() {
    
    $("#splash").addClass("scale-out");
    setTimeout(hideSplash, 1000); //note: hideSplash also loads first question
    setTimeout(function() {
        $("#splash").removeClass("scale-in", "scale-out");
    }, 1500);

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

$(document).on("click", "#playAgain", function() {
    stopCountdown();
    $("#splash").removeClass("scale-out")
    $("#quiz").removeClass("slide-out")
    $("#results").removeClass("puff-in")
    $("#results").addClass("#puff-out")
   
    setTimeout(function() {
        $("#results").removeClass("#puff-out")
        $("#results").css("visibility", "hidden")
        $("#splash").addClass("scale-in")
        $("#splash").css("visibility", "visible")
    }, 1000)


    countdown = 30;
    correct = 0;
    incorrect = 0;
    questionIndex = 0; // for tracking index of questions array
    questionNum = 1; // for printing correct question number on page


})     

})
