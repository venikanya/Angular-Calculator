var expect = chai.expect;
describe('Calculator Tests',function(){
	var $scope, ctrl;
	beforeEach(function(){
		module('app');
		inject(function($rootScope, $controller, $q, _$timeout_) {
	      // create a scope object for us to use.
		      $scope = $rootScope.$new();
		      ctrl = $controller('MainCtrl', {
		        $scope: $scope
		      });
		});
	});
	describe('Addition', function(){
	    it("5 + 3 = 8", function () {
		        expect($scope.computeResult(5, 3, "+")).to.equal(8);
		});
	});
  	describe('Subtraction', function(){
	    it("5 - 3 = 2", function () {
		        expect($scope.computeResult(5, 3, "-")).to.equal(2);
		});
	});
	describe('Multiplication', function(){
	    it("5 * 3 = 15", function () {
		        expect($scope.computeResult(5, 3, "*")).to.equal(15);
		});
	});
	describe('Division', function(){
	    it("5 / 3 = 1.67", function () {
		        expect($scope.computeResult(5, 3, "/")).to.equal(1.67);
		});
	});
	describe('Complex Operation', function(){
	    it("5 + 3 - 1 * 10 /15 + 1.78 = 6.45", function () {
	    		$scope.clearHandler();
	    		$scope.numberHandler('5');
	    		$scope.operationHandler('+');
	    		$scope.numberHandler('3');
	    		$scope.operationHandler('-');
	    		$scope.numberHandler('1');
	    		$scope.operationHandler('*');
	    		$scope.numberHandler('10');
	    		$scope.operationHandler('/');
	    		$scope.numberHandler('15');
	    		$scope.operationHandler('+');
	    		$scope.numberHandler('1');
	    		$scope.numberHandler('.');
	    		$scope.numberHandler('7');
	    		$scope.numberHandler('8');
	    		$scope.equalsHandler();
		        expect($scope.output).to.equal("6.45");
		});
	});

});
