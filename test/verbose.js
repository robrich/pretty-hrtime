/*jshint node:true */
/*global describe:false, it:false */

"use strict";

var prettyHrtime = require('../');
require('should');
require('mocha');

describe('pretty-hrtime', function() {
	describe('verbose', function () {

		var runTest = function (expected, source) {
			var actual;

			// Arrange

			// Act
			actual = prettyHrtime(source, {verbose:true});

			// Assert
			actual.should.equal(expected);
		};

		it('1.2h', function() {
			runTest('1 hour 12 minutes 10 seconds', [4330, 0]);
		});

		it('1.2m', function() {
			runTest('1 minute 12 seconds 100 nanoseconds', [72, 100]);
		});

		it('1m', function() {
			runTest('1 minute 100 nanoseconds', [60, 100]);
		});

		it('48s', function() {
			runTest('48 seconds 100 nanoseconds', [48, 100]);
		});

		it('1.02s', function() {
			runTest('1 second 20 milliseconds 200 microseconds', [1, 2.02e7]);
		});

		it('840ms', function() {
			runTest('840 milliseconds 50 microseconds', [0, 8.4005e8]);
		});

		it('600ms', function() {
			runTest('600 milliseconds 500 microseconds', [0, 6.005e8]);
		});

		it('200ms', function() {
			runTest('200 milliseconds 500 microseconds', [0, 2.005e8]);
		});

		it('1.2ms', function() {
			runTest('1 millisecond 200 microseconds 500 nanoseconds', [0, 1.2005e6]);
		});

		it('600μs', function() {
			runTest('600 microseconds 200 nanoseconds', [0, 600200]);
		});

		it('1.2μs', function() {
			runTest('1 microsecond 204 nanoseconds', [0, 1204]);
		});

		it('600ns', function() {
			runTest('600 nanoseconds', [0, 600]);
		});

		// Node v5.4+ negative nano values
		it('31s', function() {
			runTest('30 seconds 902 milliseconds 90 microseconds 742 nanoseconds', [31, -97909258]);
		});

		it('2.9s', function() {
			runTest('2 seconds 904 milliseconds 961 microseconds 742 nanoseconds', [3, -95038258]);
		});

		it('603ms', function() {
			runTest('603 milliseconds 429 microseconds 224 nanoseconds', [1, -396570776]);
		});
	});
});
