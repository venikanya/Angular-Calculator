# Calculator Challenge
# 9/29/2016

## Overview

This calculator gets results based on any number of inputs, where the inputs to the calculator can be chained.
Eg: (5+ 2 = 7 – 3 = 4 * 6 = 24……)
	It Support addition, subtraction, division, and multiplication
	It Support clearing the last result to 0 

## Environment Setup

- Node js, AngularJS
### LESS Compiler
- grunt to convert less files to css
### Dependencies
- angular-inject for angular controller injection in test file
### Unit Testing
- mocha and chai for unit testing

## Running Application
Open index.html in a browser of your choice to see the calculator interface and the unit test results.
The file is located in the project root folder

## Directory Structure
root/
	node_modules/.. 		---> development tools (fetched using `npm`)
	tests/calculatorTest.js ---> unit tests for calculator
	angular.min.js 			---> Minified angular.js file
	calculator.css 			---> Precompiled css file for calculator
	calculator.js 			---> Calculator handlers
	calculator.less 		---> LESS file for calculator
	gruntfile.js 			---> grunt module configuration file
	index.html 				---> app layout file (the main HTML template file of the app)
	npm.cmd, 			 	---> npm command line files part of npm installer
	package.json 			---> Node.js specific metadata, including development tools dependencies

# Implemented the following:

Requirements 
•	Support addition, subtraction, division, and multiplication 
•	Support clearing the last result to 0 
•	Include a README.md at the root of the project explaining how to contribute and how to run it 
•	Include automated tests (at least unit tests) and explanations in README.md of how to run them 
•	Cross browser support for latest versions of common browsers (IE, Chrome, Firefox, and Safari) 
•	Buttons must be clickable 
•	Do not use Bootstrap, come up with your own styles 
•	Send us a zip of the project
Bonus points 
•	Hover effect on buttons  
•	Add responsive layout 
•	Use Angular.js and ES6
•	Use SASS or Less.js to compile to CSS
