# treegen
Javascript random tree data generator

## usage

The module exports a generator function with two required params: `depth` and `spread`, and both should be integer numbers.
The function will create a tree of objects that contain 'name' (string), 'data' (object) and 'children' (array) properties.  
You can specify two additional, optional params in order to control the kind of data that is generated: `nameGen` and `dataGen`, both of type `Function`.
If you do not specify the generator functions, `faker.js` will be used to create some dummy data:


		var treegen = require('treegen');
		var tree = treegen(1, 3);
		// only one level of depth, but spread=3: result is an object with 3 children:
		/*
		{
			"name": "Evert Carroll",
			"data": {
				"user": "Preston_Oberbrunner",
				"host": "leopold.name",
				"city": "West Roy bury"
			},
			"children": [
				{
					"name": "Jayme Wyman",
					"data": {
						"user": "Keaton_Braun96",
						"host": "izabella.com",
						"city": "East Marquis"
					},
					"children": []
				},
				{
					"name": "Madisen Kulas",
					"data": {
						"user": "Bernard86",
						"host": "tony.org",
						"city": "Barry haven"
					},
					"children": []
				},
				{
					"name": "Joanie Maggio",
					"data": {
						"user": "Jamie22",
						"host": "jamar.name",
						"city": "North Marian"
					},
					"children": []
				}
			]
		}
		*/

When specifying generator functions, the name generator should return a string, while the data generator should return an object:

		var treegen = require('treegen');
		function generateName() {
			return 'myObjectName';
		}
		function generateData() {
			return {
				foo: 'bar'
			}
		}
		var tree = treegen(1, 3, generateName, generateData);
		// same as before, but with different values
		/*
		{
			"name": "myObjectName",
			"data": {
				"foo": "bar"
			},
			"children": [
				{
					"name": "myObjectName",
					"data": {
						"foo": "bar"
					},
					"children": []
				},
				{
					"name": "myObjectName",
					"data": {
						"foo": "bar"
					},
					"children": []
				},
				{
					"name": "myObjectName",
					"data": {
						"foo": "bar"
					},
					"children": []
				}
			]
		}
		*/
