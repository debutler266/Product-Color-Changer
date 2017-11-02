var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0; // variables listed above with corresponding fuctions below
                  // to be called upon ^ selects from 1 of 26 different songs/phrases/movies
var phrases = ["Early bird gets the worm", "A bird in the hand is worth two in the bush", "A chain is only as strong as its weakest link", "A diamond in the rough", "A fool's paradise", "A friend in need is a friend indeed", "Dog days", "Dollars to donuts", "Add insult to injury", "Don't cry over spilled milk", "Don't go there", "Don't have a clue", "Down in the dumps", "Piece of cake", "Down to the wire", "Go the whole nine", "An eye for an eye", "Hit the hay", "Stab me in the back", "Drink like a fish", "Cut to the chase", "Best of both worlds", "Kill two birds with one stone", "Break a leg", "Hit the nail on the head", "Dropping like flies"];
var movies = ["Men In Black", "Back to the Futue", "Titanic", "Shawshank Redemption", "The Godfather", "Pulp Fiction", "The Matrix", "Goodfellas", "The Goonies", "Meet the Fockers", "John Wick", "Me Myself and Irene", "Toy Story", "Malcolm X", "Do the Right Thing", "Wolf of Wallstreet", "Coming to America", "Harold and Kumar", "Finding Dory", "Dead Presidents", "Jurassic Park", "Pirates of the Caribbean", "Wizard of Oz", "Home Alone", "Saving Private Ryan", "Beauty & Beast"];
var songs = ["We Found Love in a hopless place", "They tried to make me go to rehab", "Work, work, work, work, work", "Just a small town girl", "Summer summer summer time", "Yeah it's a party in the USA?", "Nah nah nah nah, hey hey hey Goodbye", "And I think to myself what a wonderful world", "Hey hey you you I don't like your girlfriend", "I fell in to a burning ring of fire I went down down down", "In Neeewyork", "Santa Baby", "What's goin on?", "Touch the Sky", "Don't believe me just watch", "Now I do what I want now I do what I want", "Smells Spirit", "Another one bites the dust", "Rock with you", "B-B-B-Bennie and the Jets", "Single Ladies", "Oh such a perfect day I'm glad I spent it with you", "Lovin you", "Shake It up Baby", "All of the Lights", "Purple Rain"];
var challenges = ["A"]; //VOID

function sp(){ //invokes singlePlayer mode & functions
    document.getElementById('introPage').style.display = "none";
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
}

function mp(){ //invokes multiplayer mode and fuctions
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('multiPage').style.display = "block";
}

function phrase(){ //fuction phrase option
                  //Picks from random numer, goes into phrases array and assigns a number

rand = Math.floor(Math.random()*phrases.length);
word = phrases[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Phrases..think, you've heard them before";
    hangman(); //sets random numer as word by going into the fuction hangman()
}

function movie(){ //function for movies option
    rand = Math.floor(Math.random()*movies.length);
    word = movies[rand];
    document.getElementById('singlePage').style.display = "none"; // Set to block and dispaly specific functions or pages when user is using the game
    document.getElementById('categoryName').innerHTML = "GET YOUR POPCORN READY..";
    hangman();
}

function song(){ //fuction for songs option
    rand = Math.floor(Math.random()*songs.length);
    word = songs[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "La-la-LA";
    hangman();
}

function challenge(){ //VOID/Removed!
    rand = Math.floor(Math.random()*challenges.length);
    word = challenges[rand];
    numChar = 1;
  var letter = word.substring(0,1);
  document.getElementById('letter1').innerHTML = letter;
  document.getElementById('letter1').style.visibility = "hidden";
  document.getElementById('underline1').style.display = "block";
  document.getElementById('underline1').style.borderBottom = "3px solid black";
  document.getElementById('singlePage').style.display = "none";
  document.getElementById('gamePage').style.display = "block";
  document.getElementById('categoryName').innerHTML = "Guess every letter other than the correct one to win!";
  document.getElementById('categoryName').style.width = "100%";
      if(document.getElementById('underline1').offsetWidth == 50){
        document.getElementById('categoryName').style.fontSize = "45px";
    }
      if(document.getElementById('underline1').offsetWidth == 28){
        document.getElementById('categoryName').style.fontSize = "30px";
    }
      if(document.getElementById('underline1').offsetWidth == 18){
        document.getElementById('categoryName').style.fontSize = "20px";
    }
      document.getElementById('letterBank').style.display = "none";
      document.getElementById('challengeBank').style.display = "block";
      phraseLength = 1;
      draw();
}
//******lines 79-148 are all for the challengeGuess fuction that has been voided out of the game entirely. IGNORE!!!
function challengeGuess(){ /// ENTIRE 'Challenge function was voided in index.html
  var target = event.target || event.srcElement;
  target.style.visibility = "hidden";
  var lower = target.id;
  var upper = document.getElementById(lower).getAttribute('value');
  var results = document.getElementById('results');
  if(document.getElementById('letter1').innerHTML === upper){
  document.getElementById('letter1').style.visibility = "visible";
  numRight++;
    }
    if(numRight==0){
    numWrong++;
    hang(); // voided


    }
    if(numRight==1){ // VOID LINES
    results.style.visibility = "visible";
    results.style.color = "red";
    results.innerHTML = "You lose!";
    if(document.getElementById('underline1').offsetWidth == 50){
      results.style.fontSize = "200px";
      results.style.height = "200px";
      results.style.lineHeight = "200px";
        }
    if(document.getElementById('underline1').offsetWidth == 28){
      results.style.marginTop = "20px";
      results.style.fontSize = "100px";
      results.style.height = "100px";
      results.style.lineHeight = "100px";
        }
    if(document.getElementById('underline1').offsetWidth == 18){
      results.style.marginTop = "15px";
      results.style.fontSize = "75px";
      results.style.height = "75px";
      results.style.lineHeight = "75px";
        }
      document.getElementById('challengeBank').style.display = "none"; //voided
      document.getElementById('vidSent').style.display = "block";
      document.getElementById('again').style.display = "block";
      document.getElementById('home').style.display = "block";
    }
    if(numWrong==25){ //voided
      results.style.visibility = "visible";
      results.style.color = "#00b100";
      results.innerHTML = "You win!";
    if(document.getElementById('underline1').offsetWidth == 50){
            results.style.fontSize = "200px"; //else if that is set to dispaly a certain page/result based the user's performance in the game in challengeGuess mode.
            results.style.height = "200px";
            results.style.lineHeight = "200px";
        }
    if(document.getElementById('underline1').offsetWidth == 28){
            results.style.marginTop = "20px";
            results.style.fontSize = "100px";
            results.style.height = "100px";
            results.style.lineHeight = "100px";
        }
    if(document.getElementById('underline1').offsetWidth == 18){
            results.style.marginTop = "15px";
            results.style.fontSize = "75px";
            results.style.height = "75px";
            results.style.lineHeight = "75px";
        }
      document.getElementById('challengeBank').style.display = "none"; //voided
      document.getElementById('vidSent').style.display = "block";
      document.getElementById('again').style.display = "block";
      document.getElementById('home').style.display = "block";
      document.getElementById('letter1').style.visibility = "visible";
    }
} ////// Ignore ^ lines 79-148 /////// 

function countChars(countfrom,displayto) { //counts and keeps track of characters typed into phrase textbox.
    var len = document.getElementById(countfrom).value.length;
    document.getElementById(displayto).innerHTML = len;
}

function readText(){ // takes characters typed from countChars fuction and renders them to the game when user hits "submit"
    word = document.getElementById('input').value;
    hangman();
}

function hangman(){
    var x = word.length;
    if(x==0){
    alert("Enter a phrase in the text box."); //prompts users to enter a phrase for multiplayer mode
    return; //Ensures the user has entered something in the box to proceed

      }
///Extra feature learned from @author Joe Reisigle
//(project for a production class at the University of Georgia's New Media Institute.
//gives phrase guesser in 'mp' proper functionality and so that users cannot enter non letters.
//this will prevent users from proceeding to the game when they enter a phrase that is not valid based on the conditions I've set.
var y = x-1;
var spaces = 0;
var validChar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "?", "!", ",", ".", "-", "'");
for(z = 0; z < word.length; z++){ //Ensures phrase entered contains valid characters fom the array above

    var letter = word.substring(y,x);
    if(validChar.indexOf(letter) > -1){
        x--;
        y--; // @author Joe Reisigle ///////
    }
    else{
        alert("Remove all special characters before proceeding.");
        return;
    }
}
//Method learned from project for a production class at the University of Georgia's New Media Institute.
//@author Joe Reisigle lines---- 184-214.
x = word.length; //Takes the letters and underlines them.
y = x-1; // y is x-1 ????
while (x>0){ //as long as the word entered lenth is greater than 0
numChar++; //will increase the number of characters as needed
var letter = word.substring(y,x); // will take y/1 before the last letter then go the the x which is x-1= y
if(letter === " "){
document.getElementById('letter'+x).innerHTML = "&nbsp;"; //adds necessary space if needed
document.getElementById('letter'+x).style.visibility = "hidden";
document.getElementById('letter'+x).style.display = "block";
document.getElementById('underline'+x).style.display = "block";
spaces++;

  }

else if(letter === "?" || letter === "!" || letter === "," || letter === "." || letter === "-" || letter === "'"){
    document.getElementById('letter'+x).innerHTML = letter;
    document.getElementById('letter'+x).style.display = "block";
    document.getElementById('underline'+x).style.display = "block";
    spaces++;
  }
else{
  document.getElementById('letter'+x).innerHTML = letter;
  document.getElementById('letter'+x).style.visibility = "hidden";
  document.getElementById('underline'+x).style.display = "block";
  document.getElementById('underline'+x).style.borderBottom = "3px solid black";

  }
  x--;
  y--; ////used this method by @author Joe Reisigle to get functionality for the multiplayer phrase guesser"
}
phraseLength = word.length - spaces; //subtracts all letters that cannot be gussed
document.getElementById('multiPage').style.display = "none";
document.getElementById('gamePage').style.display = "block";
splitWords();
document.getElementById('challengeBank').style.display = "none";
draw(); // 'challengeBank' element voided in Final Stages of Project
}

// *******Author of code  @Joe Reisigle *******
//The CanvasRenderingContext2D.beginPath()
//is a method that is used to draw on a <canvas>
//starts a new path by emptying the list of sub-paths.


function draw(){ //self-explanatory, got help frpm internet to set up and for the calulations.
    var ctx = document.getElementById("hangman").getContext('2d');
        ctx.fillStyle = "white";  // var ctx=draws line on a canvas
        ctx.lineWidth=3;
        ctx.fillRect(0, 0, 300, 300);
        ctx.beginPath(); //vertical bar
            ctx.moveTo(50,270);
            ctx.lineTo(50,25);
            ctx.stroke();
        ctx.beginPath(); //vertical bar long piece
            ctx.moveTo(65,270);
            ctx.lineTo(65,85);
            ctx.stroke();
        ctx.beginPath(); //vertical bar short piece
            ctx.moveTo(65,64);
            ctx.lineTo(65,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar
            ctx.moveTo(49,25);
            ctx.lineTo(175,25);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar short piece
            ctx.moveTo(49,40);
            ctx.lineTo(86,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar long piece
            ctx.moveTo(106,40);
            ctx.lineTo(175,40);
            ctx.stroke();
        ctx.beginPath(); //small vertical bar
            ctx.moveTo(173,25);
            ctx.lineTo(173,40);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(100,25);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(60,90);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(60,90);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(100,25);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //ground
            ctx.moveTo(35,270);
            ctx.lineTo(265,270);
            ctx.stroke();
        ctx.beginPath(); //noose
            ctx.moveTo(150,40);
            ctx.lineTo(150,80);
            ctx.stroke();
    var cntx = document.getElementById("homeHangman").getContext('2d');
        cntx.fillStyle = "white";
        cntx.lineWidth=3;
        cntx.fillRect(0, 0, 300, 300);
        cntx.beginPath(); //vertical bar
            cntx.moveTo(50,270);
            cntx.lineTo(50,25);
            cntx.stroke();
        cntx.beginPath(); //vertical bar long piece
            cntx.moveTo(65,270);
            cntx.lineTo(65,85);
            cntx.stroke();
        cntx.beginPath(); //vertical bar short piece
            cntx.moveTo(65,64);
            cntx.lineTo(65,40);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar
            cntx.moveTo(49,25);
            cntx.lineTo(175,25);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar short piece
            cntx.moveTo(49,40);
            cntx.lineTo(86,40);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar long piece
            cntx.moveTo(106,40);
            cntx.lineTo(175,40);
            cntx.stroke();
        cntx.beginPath(); //small vertical bar
            cntx.moveTo(173,25);
            cntx.lineTo(173,40);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(50,80);
            cntx.lineTo(100,25);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(60,90);
            cntx.lineTo(111,35);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(50,80);
            cntx.lineTo(60,90);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(100,25);
            cntx.lineTo(111,35);
            cntx.stroke();
        cntx.beginPath(); //ground
            cntx.moveTo(35,270);
            cntx.lineTo(265,270);
            cntx.stroke();
        cntx.beginPath(); //noose
            cntx.moveTo(150,40);
            cntx.lineTo(150,80);
            cntx.stroke();
            /// ************Author @@Joe Reisigle ***********//
}

function splitWords(){ //**Not working properly. //Supposed to give each word displayed
                      //displayed in the game its own space/underline
                      //suppsed to keep every word on its own line to need bleed through/have a word or two standing on their own line
    var placeKeep = 0;
    var countBack = 16; //if 16th letter is a space it will be removed
    if(numChar > 15){
    while(countBack > 1){
      if(document.getElementById('letter16').innerHTML == "&nbsp;"){ //"&nbsp" is a fixed space or hard space, Non-Breaking SPace (NBSP) is used to create a space in a line that cannot be broken by word wrap. With HTML &nbsp; this method allows you to create multiple spaces that are visible on a web page and not only in the source code.
        document.getElementById('underline16').style.width = "0px";
        document.getElementById('underline16').style.marginRight = "0px";
            }
            /////******* @Author Joe Reisigle ******/////
            ///******

      if(document.getElementById('letter'+countBack).innerHTML == "&nbsp;"){
        document.getElementById('underline'+countBack).style.width = (document.getElementById('underline1').offsetWidth)*(16-countBack)+"px";
        placeKeep = countBack;
        countBack = 0;
            }
            countBack--; //should go back number of necessary spaces if a word is bleeding over
                        //not working properly
        }
    }
  for(x=0;x<8;x++){
    countBack = 15+placeKeep;
    if(numChar > countBack){ //@Author Joe Reisigle if statement that checks for length of a word. If it is over 15 char, countback will prevent lines from bleeding over. /////
    while(countBack > 1){
    if(document.getElementById('letter'+countBack).innerHTML == "&nbsp;"){
      document.getElementById('underline'+countBack).style.width = (document.getElementById('underline1').offsetWidth*((16+placeKeep)-countBack))+"px";
      placeKeep = countBack;
      countBack = 0; //  FOR LOOP that runs the numChar countBack function 8 more times
                }
                countBack--;
            }
        }
    }

}

function guessLetter(){ //finds id and value of letter guessed an matches it accordingly based on id/value assigned in html
  var correct = 0;
  var target = event.target || event.srcElement;
  target.style.visibility = "hidden";
  var lower = target.id; //finds id (lowercase)
  var upper = document.getElementById(lower).getAttribute('value'); //uppercase id's
  var results = document.getElementById('results');
  var ul1 = document.getElementById('underline1').offsetWidth;
  for(a = 1; a < 101; a++){
  if(document.getElementById('letter'+a).innerHTML === upper || document.getElementById('letter'+a).innerHTML === lower){
    document.getElementById('letter'+a).style.visibility = "visible";
    correct++;
    numRight++; //checks to make sure (upper/lowecase characters are matched/assigned correctly)
  }             // displays upper/lowercase character
    }
    if(correct==0){
        numWrong++;
        hang();
    }
    if(numWrong==6){
        results.style.visibility = "visible";
        results.style.color = "red";
        results.innerHTML = "Be careful! You can't miss another letter or else!";
        if(ul1 == 50){
            results.style.lineHeight = "70px";
            results.style.fontSize = "30px";
        }
        if(ul1 == 28){
            results.style.lineHeight = "50px";
            results.style.fontSize = "25px";
        }
        if(ul1 == 18){
            results.style.lineHeight = "40px";
            results.style.fontSize = "20px";
        }
    }
    if(numWrong==7){
        results.innerHTML = "Awwh man, sorry you LOST!<br>Don't quit! Keep guessing until you get it right!";
        document.getElementById('again').style.display = "block";
        document.getElementById('home').style.display = "block";
        document.getElementById('vidSent').style.display = "block";
        if(ul1 == 50){
            results.style.lineHeight = "40px";
        }
        if(ul1 == 28){
            results.style.lineHeight = "25px";
        }
        if(ul1 == 18){
            results.style.lineHeight = "20px";
        }
    }
    if(numRight==phraseLength){
        win();
    }
}

  function win(){ //Fuction that will run when user has won the game of hangman
    var ul1 = document.getElementById('underline1').offsetWidth;
    var again = document.getElementById('again');
    var results = document.getElementById('results');
        results.style.visibility = "visible";
        results.style.color = "#00b100";
    if(numWrong > 6){
    results.innerHTML = "You got it!...";
    document.getElementById('letterBank').style.display = "none"; //retrives letters from created letterBank
    again.style.display = "block";
    document.getElementById('home').style.display = "block";
    document.getElementById('vidSent').style.display = "block";

    if(ul1 == 50){
      results.style.lineHeight = "70px";
      results.style.fontSize = "30px";
        }
    if(ul1 == 28){
      results.style.lineHeight = "50px";
      results.style.fontSize = "25px";
        }
    if(ul1 == 18){
      results.style.lineHeight = "40px";
      results.style.fontSize = "20px";
        }
    }
    else{
    results.innerHTML = "Congragulations!!! You WON!"; //renders text when user has won game
    document.getElementById('letterBank').style.display = "none";
    again.style.display = "block";
    document.getElementById('home').style.display = "block";
    document.getElementById('vidSent').style.display = "block";

    if(ul1 == 50){
            again.style.marginTop = "75px";
            results.style.marginTop = "75px";
            results.style.fontSize = "200px";
        }
    if(ul1 == 28){
            again.style.marginTop = "50px";
            results.style.marginTop = "40px";
            results.style.fontSize = "100px";
        }
    if(ul1 == 18){
            again.style.marginTop = "40px";
            results.style.marginTop = "15px";
            results.style.fontSize = "75px";
        }
    }
}
/////********* @Author Joe Reisigle lines 490-952 /////////////
//// from: project for a production class at the University of Georgia's New Media Institute.///
function hang(){ // as user guesses incorrect answers, fuction will run to start drawling hangman as number of incorrect guesses increases.
    var ctx = document.getElementById("hangman").getContext('2d');
    if(numWrong==1){
        ctx.beginPath(); //head
            ctx.arc(150, 100, 20, 0, 2*Math.PI); //even when the user has lost, IF statements check for the number of letters guessed in correctly for 1-25.
            ctx.stroke();                        //Hangman will continue to be draw body parts until user guesses the song, phrase, or title correctly.
        ctx.beginPath(); //left eye
            ctx.arc(143, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //mouth
            ctx.arc(150, 103, 9, 0, Math.PI);
            ctx.stroke();
    }
    if(numWrong==2){
        ctx.beginPath(); //body
            ctx.moveTo(150,120);
            ctx.lineTo(150,190);
            ctx.stroke();
    }
    if(numWrong==3){
        ctx.fillStyle = "white";
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,108);
            ctx.lineTo(160,108);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,135);
            ctx.lineTo(180,160);
            ctx.stroke();
    }
    if(numWrong==4){
        ctx.beginPath(); //left arm
            ctx.moveTo(150,135);
            ctx.lineTo(120,160);
            ctx.stroke();
    }
    if(numWrong==5){
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //sad mouth
            ctx.arc(150, 112, 9, 0, Math.PI, true);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,188);
            ctx.lineTo(180,230);
            ctx.stroke();
    }
    if(numWrong==6){
        ctx.beginPath(); //left leg
            ctx.moveTo(151,188);
            ctx.lineTo(120,230);
            ctx.stroke();
    }
    if(numWrong==7){
        ctx.fillRect(138, 90, 24, 24); //cover face
        ctx.fillRect(118, 121.2, 70, 120); //cover body
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,108);
            ctx.lineTo(160,108);
            ctx.stroke();
        ctx.beginPath(); //body
            ctx.moveTo(150,135);
            ctx.lineTo(150,205);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,150);
            ctx.lineTo(180,175);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(150,150);
            ctx.lineTo(120,175);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,203);
            ctx.lineTo(180,245);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,203);
            ctx.lineTo(120,245);
            ctx.stroke();
        ctx.lineWidth=2;
        ctx.beginPath(); //left eye
            ctx.moveTo(140,93);
            ctx.lineTo(146,98);
            ctx.stroke();
            ctx.moveTo(140,98);
            ctx.lineTo(146,93);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(154,98);
            ctx.lineTo(160,93);
            ctx.stroke();
            ctx.moveTo(154,93);
            ctx.lineTo(160,98);
            ctx.stroke();
    }
    if(numWrong==8){
        ctx.fillRect(118, 135, 70, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(150,150);
            ctx.lineTo(150,220);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,165);
            ctx.lineTo(180,180);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(150,165);
            ctx.lineTo(120,180);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,218);
            ctx.lineTo(180,260);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,218);
            ctx.lineTo(120,260);
            ctx.stroke();
    }
    if(numWrong==9){
        ctx.fillRect(118, 143, 70, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(150,165);
            ctx.lineTo(150,235);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,180);
            ctx.lineTo(180,195);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(150,180);
            ctx.lineTo(120,195);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,232);
            ctx.lineTo(180,270);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,232);
            ctx.lineTo(120,270);
            ctx.stroke();
    }
    if(numWrong==10){
        ctx.fillRect(118, 148, 70, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(150,180);
            ctx.lineTo(150,250);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,195);
            ctx.lineTo(180,210);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(150,195);
            ctx.lineTo(120,210);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,247);
            ctx.lineTo(200,270);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,247);
            ctx.lineTo(100,270);
            ctx.stroke();
    }
    if(numWrong==11){
        ctx.fillRect(90, 148, 120, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(200,195);
            ctx.lineTo(150,268);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(191,210);
            ctx.lineTo(220,245);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(191,210);
            ctx.lineTo(145,237);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,268);
            ctx.lineTo(210,268);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,268);
            ctx.lineTo(90,268);
            ctx.stroke();
    }
    if(numWrong==12){
        ctx.fillRect(90, 145, 140, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(230,220);
            ctx.lineTo(150,268);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(212,230);
            ctx.lineTo(240,255);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(212,230);
            ctx.lineTo(165,237);
            ctx.stroke();
    }
    if(numWrong==13){
        ctx.fillRect(90, 145, 160, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(245,255);
            ctx.lineTo(150,268);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(225,255);
            ctx.lineTo(255,268);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(225,255);
            ctx.lineTo(185,250);
            ctx.stroke();
    }
    if(numWrong==14){
        ctx.fillRect(90, 145, 160, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(245,264);
            ctx.lineTo(150,268);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(225,268);
            ctx.lineTo(255,268);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(225,264);
            ctx.lineTo(185,264);
            ctx.stroke();
        ctx.fillRect(138, 90, 24, 24); //cover face
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,108);
            ctx.lineTo(160,108);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
    }
    if(numWrong==15){
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //mouth
            ctx.arc(150, 103, 9, 0, Math.PI);
            ctx.stroke();
    }
    if(numWrong==16){
        ctx.fillRect(128, 78, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 120, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 115, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 115, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //mouth
            ctx.arc(150, 123, 9, 0, Math.PI);
            ctx.stroke();
    }
    if(numWrong==17){
        ctx.fillRect(128, 98, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 140, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 135, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 135, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //mouth
            ctx.arc(150, 143, 9, 0, Math.PI);
            ctx.stroke();
    }
    if(numWrong==17){
        ctx.fillRect(128, 118, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 160, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 155, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 155, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,168);
            ctx.lineTo(160,168);
            ctx.stroke();
    }
    if(numWrong==18){
        ctx.fillRect(128, 138, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 180, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 175, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 175, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,188);
            ctx.lineTo(160,188);
            ctx.stroke();
    }
    if(numWrong==19){
        ctx.fillRect(128, 158, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 200, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 195, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 195, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //sad mouth
            ctx.arc(150, 213, 9, 0, Math.PI, true);
            ctx.stroke();
    }
    if(numWrong==20){
        ctx.fillRect(128, 178, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 220, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 215, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 215, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //sad mouth
            ctx.arc(150, 233, 9, 0, Math.PI, true);
            ctx.stroke();
    }
    if(numWrong==21){
        ctx.fillRect(128, 198, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 240, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 235, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 235, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //sad mouth
            ctx.arc(150, 253, 9, 0, Math.PI, true);
            ctx.stroke();
    }
    if(numWrong==22){
        ctx.fillRect(128, 218, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 243, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.moveTo(140,234);
            ctx.lineTo(146,239);
            ctx.stroke();
            ctx.moveTo(140,239);
            ctx.lineTo(146,234);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(154,234);
            ctx.lineTo(160,239);
            ctx.stroke();
            ctx.moveTo(154,239);
            ctx.lineTo(160,234);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,250);
            ctx.lineTo(160,250);
            ctx.stroke();
    }
    if(numWrong==23){
        ctx.fillRect(128, 220, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(129, 246, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.moveTo(115,245);
            ctx.lineTo(121,250);
            ctx.stroke();
            ctx.moveTo(115,250);
            ctx.lineTo(121,245);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(120,234);
            ctx.lineTo(126,239);
            ctx.stroke();
            ctx.moveTo(120,239);
            ctx.lineTo(126,234);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(129,257);
            ctx.lineTo(138,240);
            ctx.stroke();
    }
    if(numWrong==24){
        ctx.fillRect(106, 218, 45, 45); //cover head
        ctx.fillRect(120, 261, 25, 5); //cover rest of head
        ctx.beginPath(); //head
            ctx.arc(108, 247, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.moveTo(105,257);
            ctx.lineTo(111,262);
            ctx.stroke();
            ctx.moveTo(105,262);
            ctx.lineTo(111,257);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(94,248);
            ctx.lineTo(100,253);
            ctx.stroke();
            ctx.moveTo(94,253);
            ctx.lineTo(100,248);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(121,248);
            ctx.lineTo(101,235);
            ctx.stroke();
    }
    if(numWrong==25){ //draws hangman all the way down to 25th incorrect guess and his head is on the ground.
        ctx.fillRect(86, 220, 45, 45); //cover head //** Got help with all hangman draw.
        ctx.beginPath(); //head
            ctx.arc(87, 248, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.moveTo(78,250);
            ctx.lineTo(84,256);
            ctx.stroke();
            ctx.moveTo(78,256);
            ctx.lineTo(84,250);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(91,250);
            ctx.lineTo(97,256);
            ctx.stroke();
            ctx.moveTo(91,256);
            ctx.lineTo(97,250);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(77,240);
            ctx.lineTo(97,240);
            ctx.stroke();
            ///////******* @author Joe Reisigle lines ^ 490-952 **************////////
    }
}

function reset(){ //**** NOT working properly. Probably spacing-related
    var ul1 = document.getElementById('underline1').offsetWidth; // got ul1 @author Joe Reisigle///
    var results = document.getElementById('results');
    var again = document.getElementById('again');
    for(a = 1; a < 101; a++){
      document.getElementById('letter'+a).innerHTML = "&nbsp;"; //adds space for letters
      document.getElementById('underline'+a).style.width = ul1 + "px";
///////********** @author Joe Reisigle******//// ul1 gets multiple expressions in a single text box and to get buttons to display nicely. More related to styling.
/// lines 956----97- /////////
    if(ul1 == 50){
      document.getElementById('underline'+a).style.marginRight = "5px";
      results.style.height = "70px";
        }
    else if(ul1 == 28){
      document.getElementById('underline'+a).style.marginRight = "3px";
      results.style.height = "50px";
      ////////// ******@author Joe Reisigle ******* ////////
        }
    else{
    document.getElementById('underline'+a).style.marginRight = "3px";
    results.style.height = "40px";
        }
    document.getElementById('underline'+a).style.display = "none";
    document.getElementById('underline'+a).style.borderBottom = "0px";
  } // for loop is supposed to make sure all letters are cleared out of spaces/underlines
    var bank = document.getElementById("letterBank").querySelectorAll("div");
    var cBank = document.getElementById("challengeBank").querySelectorAll("div");
    for(b = 0; b < 26; b++){ //for loop that gets all letters to appear in letterBox
        bank[b].style.visibility = "visible";
        cBank[b].style.visibility = "visible";
    }
    numWrong = 0;
    numRight = 0;
    phraseLength = 0;
    numChar = 0;
    results.style.marginTop = "5px";
    results.style.lineHeight = "40px";
    results.innerHTML = " "; //supposed to reset and put a space between letters
    document.getElementById('vidSent').style.display = "none";
    document.getElementById('letterBank').style.display = "block";
    again.style.marginTop = "0px";
    again.style.display = "none";
    document.getElementById('home').style.display = "none";
if(phrases.indexOf(word) > -1){ //if/else is put in place so that when user plays again they will not keep recieving the same word over and over based on the category choosen.
        phrases.splice(rand,1); //splicing adds and remvoes previously used words from array
        phrase(); //re-runs phrase fuction after already used word is removed^
    }
else if(movies.indexOf(word) > -1){
        movies.splice(rand,1);
        movie();
    }
else if(songs.indexOf(word) > -1){
        songs.splice(rand,1);
        song();
    }
else if(document.getElementById('charcount').innerHTML > 0){
        document.getElementById('gamePage').style.display = "none";
        document.getElementById('input').value = "";
        document.getElementById('charcount').innerHTML = "0";
        document.getElementById('multiPage').style.display = "block";
    }
else{
        challenge(); //mode totally VOIDED
    }
}
