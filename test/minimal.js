/*jshint node:true */
/*global describe:false, it:false */

"use strict";

var prettyHrtime = require('../');
require('should');
require('mocha');

describe('pretty-hrtime', function() {
	describe('minimal', function () {

		var runTest = function (expected, source) {
			var actual;

			// Arrange

			// Act
			actual = prettyHrtime(source);

			// Assert
			actual.should.equal(expected);
		};

		it('1.2m', function() {
			runTest('1.2 min', [72, 100]);
		});

		it('48s', function() {
			runTest('48 s', [48, 100]);
		});

		it('1.02s', function() {
			runTest('1.02 s', [1, 2.02e7]);
		});

		it('840ms', function() {
			runTest('840 ms', [0, 8.4005e8]);
		});

		it('600ms', function() {
			runTest('600 ms', [0, 6.004e8]);
		});

		it('200ms', function() {
			runTest('200 ms', [0, 2.004e8]);
		});

		it('1.2ms', function() {
			runTest('1.2 ms', [0, 1.2004e6]);
		});

		it('600μs', function() {
			runTest('600 μs', [0, 600200]);
		});

		it('1.2μs', function() {
			runTest('1.2 μs', [0, 1204]);
		});

		it('600ns', function() {
			runTest('600 ns', [0, 600]);
		});

	});
});
