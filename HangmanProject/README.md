## Welcome to Hangman!!!
This is an online game of hangman I created for my project 1 at GA.

Hangman is a game most of us know by playing on paper and pencil. Its guessing game for 1-2 players. A word or phrase is hidden but the amount of characters in it are displayed. Users will try to guess it by suggesting letters or numbers, within a certain number of guesses.


This game of hangman contains 3 categories from users to choose from. Some contain both phrases and actual titles. While one category in particular ("Films") only contains popular movie titles. The other 2 categories are: "Phrases" and "Songs".



# Header 1 (Index.html)
Inside of my index.html I included <div></div> tags as well as buttons with an "onClick" function for each mode (Single/Multiplayer).

Also included is the <div and <id> tags which will "underline" each of the available 100 chracters to use in the "Phrases" textbox.

There is also the tag to create the hangman canvas and the letterbank containing both upper and lowercase letters of the alphabet. All 26 letters have a corresponding <id to identify both the upper and lower case versions when called upon later in functions.


## Header 2 (Style.css)

Css is set up with @media tag so that the game can be played on different browswers and mobile devices. In addition the game can be resized.




### Header 3 (Script.js)

Inside JS, I set up an array for the 3 categories mentioned earlier ("Phrases, Songs, Films")

If/else statements are in plac to render a certain function based on the user's interaction within the game.

The (( cntx.beginPath();
            cntx.moveTo
            cntx.lineTo are all used to actually draw the hangman and if/else statements keep track of what to draw as the number of  wrong guesses increases.

 Strings /// var placeKeep = 0;
    var countBack = ;

   Strings in JS to keep organization and properly display characters when there is over 15 characters on a single line.

   Functions in place to run when user wins/loses.




I used some jQuery such as the "ajax" methods use the ajax() method. T for requests where the other methods cannot be used.
jQuery was used for onClick EVENTS and "hover".


### Header 4 (Errors)
the splitWord() fuction is not working properly
"Play Again" button not working properly
For clarification purposes I made about 6 actual commits. I still had trouble figuring out how to commit properly to the GitHub repo I created for Project 1. Initially I thought I was commiting properly until I figured out the repo was not properly initialized.  
