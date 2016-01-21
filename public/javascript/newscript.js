//easy questions 
window.onload = openRulesModal();


var test = [
{
  "question":"Which of these states have the most WWTP?",
  "correctIndex": 0,
  "correctLetter": "A: Texas",
  "options": ["A: Texas"," B: Alabama "," C: Michigan "," D: Iowa"],
  "coolFact": "Texas has over 4,600 water & wastewater facilities (including municipal and industrial facilities) "
},
{
  "question":"What process comes first in a convention wastewater treatment process?",
  "correctIndex": 1,
  "correctLetter": "B: Screening",
  "options": ["A: Disinfection "," B: Screening "," C: Aeration","D: Sludge Process"],
  "coolFacts": " "
},

{
  "question":"What does POTW stand for?",
  "correctIndex": 1,
  "correctLetter": "B: Publicaly Owned Treatment Works",
  "options": ["A: Public Opinion Trust Water","B: Publicly Owned Treatment Works","C: Previously Open Trading Waters","D: Please Open The Waterslide"],
  "coolFacts": "Most people say 'P-O-T-W' and not 'Pot-Wah'",
},

{
  "question":"What does MBR stand for?",
  "correctIndex": 2,
  "correctLetter": "C: Membrane Bioreactor",
  "options": ["A: Mainland Brushless Rotor","B: Mississippi Biological Retainer","C: Membrane Bioreactor","D: Master Boot Record"],
  "coolFacts": "According to the American Membrane Technology Association, there are currently 1,600 membrane plants in the United States "
},

{
  "question":"How many Surface Water Treatment Plants are there in Texas? ",
  "correctIndex": 2,
  "correctLetter": "C: 449",
  "options": ["A: 100,033","B: 27,600","C: 449","D: 4,553"],
  "coolFacts": "399 of those 446 Surface Water Treatment Plants in Texas use Sand Filtration "
},


{
  "question":" How many Surface Water Treatment Plants are there in Washington State",
  "correctIndex": 0,
  "correctLetter": "A: 115",
  "options": ["A: 155","B: 11,201","C: 8","D: 13,500"],
  "coolFacts": " Approximately 7% of the Surface Water Treatment Plants in Washington State use Microfiltration",
},

{
  "question":"At the end of 2014, how many water systems in Texas had current violations for TTHM?  ",
  "correctIndex": 1,
  "correctLetter": "B: 108",
  "options": ["A: 3","B: 108","C: 55,890","D: 2,031"],
  "coolFacts": "Coke County Water Supply Corp in Texas had one of the highest exceedances for TTHM in Q4 2014, at 264 ug/L"
},

{
  "question":"Of the 244 WWTPs in Tennessee, how many use UV disinfection in their treatment process? ",
  "correctIndex": 1,
  "correctLetter": "B: 46",
  "options": ["A: 234","B: 46","C: 7","D: 12"],
  "coolFacts": "Clarksville STP is the largest WWTP in Tennessee that uses UV disinfection, with a design flow rate of 25 MGD"
},

{
  "question":"What Total Phosphorus Limit is the State of Illinois implementing in the next permit cycle for major municipal dischargers?",
  "correctIndex": 1,
  "correctLetter": "B: 1.0 mg/l",
  "options": ["A: 130.0 mg/l","B: 1.0 mg/l","C: 0.0005 mg/l","D: 15.0 mg/l"],
  "coolFacts": "This limit is being implemented for major municipal dischargers in highest loading watersheds (Fox River, Des Plaines River, DuPage River/Salt Creek), and 3 of the largest plants in Chicago"
},

{
  "question":"How many 'public community' potable water systems are there in Georgia?",
  "correctIndex": 2,
  "correctLetter": "C: 923",
  "options": ["A: 15, 317","B: 4,299","C: 923","D: 5"],
  "coolFacts": " Gwinnett County's Department of Water Resource's water system is the largest water system in Georgia, serving 749,722 people"
},
]


//medium questions 
var medium = [
{
  "question":"How many facility inspections did the State of New York do in 2013? ",
  "correctIndex": 2,
  "correctLetter": "C: 848",
  "options": ["A: 11, 499"," B: 103 "," C: 848 "," D: 19, 224 "],
  "coolFact": "State of New York assessed $290,900 in penalties in FY13/14, and fined 11 major POTWs with a consent order that year"
},
{
  "question":" How many companies in Louisiana privately operate at least 20 wastewater systems?",
  "correctIndex": 0,
  "correctLetter": "A: 14",
  "options": ["A: 14"," B: 100"," C: 250","D: 7"],
  "coolFacts": " Ascension Wastewater Treatment operates 138 sites in Louisiana"
},

{
  "question":"According to the latest Capital Improvement Plan, how much has City of Chicago allocated for sewer and water projects over the next 5 years?",
  "correctIndex": 0,
  "correctLetter": "A: $3.8 Billion",
  "options": ["A: $3.8 Billion","B: $12.5 Billion","C: $2.2 Billion","D: $31.3 Billion"],
  "coolFacts": "This $3.8 Billion represents 43% of the city's capital plan"
},

{
  "question":"How many municipal wastewater treatment facilities are there in the state of New York?",
  "correctIndex": 1,
  "correctLetter": "B: 638",
  "options": ["A: 1,101","B: 638","C: 411","D: 255"],
  "coolFacts": " 25 of these 638 municipal wastewater treatment facilities had an enforcement action in 2013"
},

{
  "question":"How many aerated lagoons facilities exist in California?",
  "correctIndex": 0,
  "correctLetter": "A: 92",
  "options": ["A: 92","B: 5,231","C: 9,733","D: 1,455"],
  "coolFacts": "San Francisco Southeast Water Pollution Control Plant is the largest WWTP in California that uses aerated lagoons. The facility has a design flow rate of 85.4 MGD"
},

{
  "question":"Which 3 States have been involved in a 24-year water dispute over rights to water releases from Lake Lanier?",
  "correctIndex": 2,
  "correctLetter": "C: Georgia/ Alabama/Flordia",
  "options": ["A: Iowa/South Carolina/Tennessee","B: Georgia/Alabama/Tennessee","C: Georgia/Alabama/Florida","D: Kentucky/Alabama/Florida"],
  "coolFacts": " City of Atlanta, Georgia has requested to withdraw 705 MGD from the reservoir, which Alabama and Florida argue will leave little downstream"
},

{
  "question":"How many municipal wastewater treatment facilities have Nitrogen Limits in Alabama? ",
  "correctIndex": 0,
  "correctLetter": "A: 0",
  "options": ["A: 0","B: 498","C: 77","D: 6, 411"],
  "coolFacts": "Outside of TMDL projects, there is no statewide strategy/action for nutrient limits in Alabama  "
},

{
  "question":"How many municipal wastewater treatment facilities have Nitrogen limits of <3mg/L in Florida?",
  "correctIndex": 2,
  "correctLetter": "C: 18",
  "options": ["A: 0","B: 2","C: 18","D: 340"],
  "coolFacts": "'<3 mg/L' is currently the strictest Nitrogen limit in Florida, and outside of TMDL projects, there is no statewide strategy/action for nutrient limits in Florida"
},
]

//hard questions

var hard = [
{
  "question":"How many unique wastewater utilities are there in Illinois?",
  "correctIndex": 2,
  "correctLetter": "C: 514",
  "options": ["A: 602"," B: 487 "," C: 514"," D: 372 "],
  "coolFact": "Outside Chicago, the latest wastewater facility in Illinois is Fox Metro WRD Wastewater Treatment Plant in Oswego, with an average flow rate of 42 MGD "
},
{
  "question":"How many septic systems are there in Florida?",
  "correctIndex": 0,
  "correctLetter": "A: 2.6 Million",
  "options": ["A: 2.6 Million"," B: 2.2 Million"," C: 1.8 Million","D: 3.7 Million"],
  "coolFacts": " Nearly 40% of Florida’s septic systems are located in coastal areas, where porous soils is a risk for rapid transport of contaminants to groundwater"
},

{
  "question":"How many industrial facilities discharge their effluent to municipal wastewater facilities in Oregon?",
  "correctIndex": 1,
  "correctLetter": "B: 181",
  "options": ["A: 513","B: 181","C: 159","D: 277"],
  "coolFacts": "'Yo Cream' is the biggest industrial discharger in Portland, discharging 55,000 GPD of effluent to the municipal wastewater treatment facility.  "
},

{
  "question":"How many water main breaks did Milwaukee Water Works have in 2014 (last year)?",
  "correctIndex": 3,
  "correctLetter": "D: 930",
  "options": ["A: 1,062","B: 738","C: 422","D: 930"],
  "coolFacts": "2014 was a record year for water main breaks for Milwaukee Water Works. In comparison, the annual average total was 530 water main breaks per year 2009-2013 "
},

{
  "question":"What is the highest percentage of industrial influents treated by any one Municipal WWTP in Tennessee as a percentage of their total influents (by volume)?  ",
  "correctIndex": 3,
  "correctLetter": "D: 46%",
  "options": ["A: 40%","B: 22%","C: 65%","D: 46%"],
  "coolFacts": " Huntsville STP's influent (by volume) contains 46% industrial effluent flow. "
}
]


var currentQuestion;
var gameTimer;
var score = 0; 
var paused = false;

function loadQuestion(question) {
  $("#question").html(question['question']);

  var answersDom = $('.questionblock')
  for (var i = 0; i < answersDom.length; i++) {
    $(answersDom[i]).data('correct', i == question['correctIndex']);
    $(answersDom[i]).html(question['options'][i]);
  }
  currentQuestion = question;

  var currentName = localStorage.getItem('name');
  var lastName = localStorage.getItem('lastName');
  var displayName = currentName + " " + lastName;
  var showMe = displayName.toUpperCase();
  console.log(showMe);

  $("#usersname").html(displayName); //move 
  //startTimer(20, $('#time'));
  //console.log("time is running out");
}



//Score Determiner 
// THIS IS CALLED ON MODAL CLICK 
function determineScore() { 
  if (score < 3) { 
    console.log("0-3"); 
    loadQuestion(getUniqueRandom(test));
  }

  if (score >= 3 && score < 5 ) { 
    console.log("4-5");
    loadQuestion(getUniqueRandom(medium)); 
  }

  if (score == 5) { 
    console.log("5");
    loadQuestion(getUniqueRandom(hard)); 
  }

  startTimer(20, $('#time'));
}

// TIME FUNCTION 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    if (gameTimer) {
      clearInterval(gameTimer);
    }
    paused = false;
    $("#timer").removeClass("danger");
    gameTimer = setInterval(function () {
      if (!paused){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (seconds == "05") { 
          $("#time").addClass("danger");
        }
        if (--timer < 0) {
            //timer = duration;
            openTimeModal();
                $(".additionalInfo").html(currentQuestion['coolFacts']);
              $(".correctLetter").html(currentQuestion['correctLetter']);
       
            clearInterval(gameTimer);
        }
      }
    }, 1000);
}


function getUniqueRandom(arr) {

  var index = Math.floor(Math.random() * arr.length);
  var val = arr[index];

  arr.splice(index, 1); 
  console.log(val);

  return val; 
}

//this function takes an array of questions, and takes the question called out of the array 


$(document).keyup(function(e) { 
    if (e.keyCode == 80) { 
      openPauseModal();

    } 
});



// function ridCongratsScreen() {
// $('#congratsScreen').css({'visibility': 'hidden'});
// }


function ridPauseScreen() {
$('#pauseScreen').css({'visibility': 'hidden'});
}

// function ridCorrectScreen() {
// $('#correctScreen').css({'visibility': 'hidden'});
// }

// function ridIncorrectScreen() {
// $('#incorrectScreen').css({'visibility': 'hidden'});
// }

// function ridTimeScreen() {
// $('#timeScreen').css({'visibility': 'hidden'});
// }

// function ridExitScreen() {
// $('#exitScreen').css({'visibility': 'hidden'});
// }

// $( "#congratsScreen" ).click(function() {
//       if ($('#congratsModal').css('visibility') == 'visible') 
//         ridCongratsScreen();
//       $('#congratsModal').css({'visibility': 'hidden'});
//       gameDone();
// });


$( "#pauseScreen" ).click(function() {
      if ($('#pauseModal').css('visibility') == 'visible') 
        ridPauseScreen();
      $('#pauseModal').css({'visibility': 'hidden'});
      paused = !paused; 
});

// $( "#correctScreen" ).click(function() {
//       if ($('#correctModal').css('visibility') == 'visible') 
//         ridCorrectScreen();
//       $('#correctModal').css({'visibility': 'hidden'});
//       determineScore();
// });

// $( "#incorrectScreen" ).click(function() {
//       if ($('#incorrectModal').css('visibility') == 'visible') 
//         ridInCorrectScreen();
//       $('#incorrectModal').css({'visibility': 'hidden'});
//       gameDone();
// });

// $( "#timeScreen" ).click(function() {
//       if ($('#timeModal').css('visibility') == 'visible') 
//         ridTimeScreen();
//       $('#timeModal').css({'visibility': 'hidden'});
//       gameDone();
// });

// $( "#exitScreen" ).click(function() {
//       if ($('#exitModal').css('visibility') == 'visible') 
//         ridExitScreen();
//       $('#exitModal').css({'visibility': 'hidden'});

// });


function openRulesModal() {
  el = document.getElementById("rulesModal");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";

}

function seeScreen () { 
  $('#screen').css({'width':$(document).width(),'height':$(document).height()});
}


function openCorrectModal() {
  el = document.getElementById("correctModal");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  seeScreen();
}

function openCongratsModal() {
  el = document.getElementById("congratsModal");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";

    $("#userScoreCongrats").html(score);
   //$('#congratsScreen').css({'width':$(document).width(),'height':$(document).height()});
}

function openIncorrectModal() {
  el = document.getElementById("incorrectModal");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  $("#userScoreIncorrect").html(score);
 //$('#incorrectScreen').css({'width':$(document).width(),'height':$(document).height(), 'visibility': 'visible'});

}

function openTimeModal() {
  el = document.getElementById("timeModal");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  $("#userScoreTime").html(score);
   var x = document.getElementById("question").innerHTML;
  console.log(x);

 // seeScreen();
}

function openPauseModal() {
  el = document.getElementById("pauseModal");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  $('#pauseScreen').css({'width':$(document).width(),'height':$(document).height(), 'visibility': 'visible'});
  paused = !paused;
}

function openExitModal() {
  el = document.getElementById("exitModal");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
 //seeScreen();

}

function addNew() {
  $("#starsTog ul").append('<li  style="width:25px"> <img src="star.png" class="small"> </li>').addClass("animated rubberBand");
}


$(".questionblock").click(function() {
  var correct = $(this).data('correct');
  //$(".additionalInfo").html(currentQuestion['correctLetter']);

    if (correct) {
      if (score == 5){ 
        score = score +1; 
        openCongratsModal(); 
          $(".additionalInfo").html(currentQuestion['correctLetter'])
          paused =! paused;
       
         
      }

          else {
          //You are correct!
          openCorrectModal();
          $(".additionalInfo").html(currentQuestion['correctLetter']);
         // $(".correctLetter").html(currentQuestion['correctLetter']);
           $("#stars").append('<li  style="width:25px"> <img src="star.png" class="small"> </li>');
            score = score + 1; 
           $("#stars li:last").addClass("animated rubberBand");
           $("#userScore").html(score);

          paused = !paused;
         
          addNew();
          
       

          
      }
    } else {
      openIncorrectModal();
     $(".additionalInfo").html(currentQuestion['correctLetter']);
     //take value from the question block and console.log it 
     var x = document.getElementById("question").innerHTML;
     console.log(x);
    
      paused = !paused;
       
  }
});










function gameDone() {
  //Go to summary screen/modal window 
  // save users data
  // update the scoreboard/automatic refresh 
  //TODO: Get Score

  var golfScore = 0;
  for (i=0; i < 3; i++) { 

    var val = $($('.gScore')[i]).val();
    if (val != "") {
      golfScore = parseInt(val);
    }
  }

  var wrong = document.getElementById("question").innerHTML;
   


  var send_score = score;
  $.post('/save_score', {'score': send_score, 'timestamp': new Date().getTime(), 'gscore': golfScore, 'wrongQuestion': wrong}, 
    function() { 
      console.log("works");
      });

  setTimeout(function() {

    window.location.href="/";
  }, 3000);

  score = 0;
  console.log("you are finished!");
}


 




