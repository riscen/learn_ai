var app = angular.module("app-menu", []);
app.controller('menuController', function($scope){
	//Load this information from database
	$scope.themes = [
		{name: "Diffuse logic", 
		topics: [{value: "0", topic: "Introduction"}]},
		{name: "Bio-inspired algorithms", 
		topics: [{value: "0", topic: "Introduction"}]},
		{name: "Neural networks", 
		topics: [{value: "0", topic: "Introduction"},
		{value: "1", topic: "Perceptron"},
		{value: "2", topic: "Adaline"},
		{value: "3", topic: "Multi-Layer Perceptron (MLP)"}]}
		];
});