# _Mr.Robogers Neighborhood_

#### By _**Oscar Gonzalez**_

#### _This website is made for a user to type in a number, and then said user gets a unique response from Mr Robogers._

## Technologies Used

*_HTML_
*_CSS_
*_JQUERY_
*_JavaScript_
*_Bootstrap_

## Description

_This is my third project for Epicodus that is meant to show off my ability to us Arrays and Looping. The user will enter any number they wish and get a "robot-like" response; what that means is that a number with 1, 2, or 3 will be replaced with a specific phrase, and any number that is not 1, 2, or 3 will remain unchanged. Here is a [link](https://github.com/OLGON92/robo-rogers) to the repository on GitHub._

## Setup/Installation Requirements
* This is link for my project on github pages https://olgon92.github.io/language-suggester/
* _Click link above_
* _It should open in your preferred web browser_
* _From there take the quiz_
* _See your results_

## Known Bugs

* _No known bugs_

## License

_If you have any questions or concerns please contact me at ogon318@gmail.com
You are also welcome to make any contributions if you'd like_

*_MIT_

Copyright (c) _2022_ _Oscar Gonzalez_

## Test Driven Development Notes

_Describe: createArray()_

_Test 1: "The function should return an array with all values between 0 and the user entered number as strings."_
_Code: createArray("6")_
_Expected Result: ["0", "1", "2", "3", "4", "5", "6"]_

_Describe: roboResponse()_

_Test 2: "It should change any number containing a 3 to the phrase "Won't you be my neighbor?"_
_Code: createArray("6")_
_Expected Result: ["0", "1", "2", "Won't you be my neighbor?", "4", "5", "6"]_

_Test 3: "It should change any number containing a 2 to the phrase "boop;" with of course the exception of 3 which will reamin the previous phrase of "Won't you be my neighbor?"_
_Code: createArray("6")_
_Expected Result: ["0", "1", "boop", "Won't you be my neighbor?", "4", "5", "6"]_

_Test 4: "It should change any number containing a 1 to the phrase "beep;" except the numbers 2 and 3 which will remain the same phrases from before."_
_Code: createArray("14")_
_Expected Result: ["0", "beep", "boop", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]_
