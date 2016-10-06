(function(){
	'use strict';
	var myApp = angular.module('app',[]);

	myApp.controller('MainCtrl', function ($scope) {
		$scope.output = "0";
		var result = "";
		var number1 = Number.MAX_SAFE_INTEGER;
		var number2 = Number.MAX_SAFE_INTEGER;
		var opcode = "";
		var lastPressed="";
		//Control to update display
		function updateDisplay (val) {
			if(typeof val == "string")
				$scope.output = val;
			else
		    	$scope.output = String(val);
		};
		//Control for Clear "C" Button
		$scope.clearHandler = function(){
			updateDisplay(0);
			reset();
		};
		//Control for Equals "=" Button
		$scope.equalsHandler = function(){
			if(number2 == Number.MAX_SAFE_INTEGER)
				number2 = parseFloat(this.output);
			if(number1 != Number.MAX_SAFE_INTEGER && number2 != Number.MAX_SAFE_INTEGER){
				result = this.computeResult(number1, number2, opcode);
				updateDisplay(result);
			}
			else{
				updateDisplay(0);
			}
			reset();
		}
		//Control for number buttons "0 - 9 and ."
		$scope.numberHandler = function(num) {
			if(lastPressed=="op" || lastPressed == "")
				updateDisplay(num);
			else
		    	updateDisplay(this.output + num);
		    lastPressed = "num";
		};
		//Control for Operations +, -, *, /
		$scope.operationHandler = function(op){			
			if(this.output != "0"){
				if(number1 == Number.MAX_SAFE_INTEGER)
					number1 = parseFloat(this.output);
				else
					number2 = parseFloat(this.output);
			}
			if(number1 != Number.MAX_SAFE_INTEGER && number2 != Number.MAX_SAFE_INTEGER ){
				result = this.computeResult(number1, number2, opcode);
				updateDisplay(result);
				number1 = result;
				number2 = Number.MAX_SAFE_INTEGER;				
			}
			opcode = op;
			lastPressed = "op";
		};
		//Internal function to reset the variables in $scope
		function reset(){
			number1 =  Number.MAX_SAFE_INTEGER;
			number2 =  Number.MAX_SAFE_INTEGER;
			opcode="";
			lastPressed="";
		}
		//Function to compute result of operations
		//Attached it to scope to reference it from test file
		$scope.computeResult = function(number1, number2, opcode){
			switch(opcode){
				case "/":
					if(number2 !=0)
						return parseFloat((number1 / number2).toFixed(2));
					else
						return "Error";
				break;
				case "*":
					return number1*number2;
				break;
				case "+":
					return number1+number2;
				break;
				case "-":
					return number1-number2;
				break;
				default:
					return 0;
			}

		}
	});
})();