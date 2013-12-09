/*jshint node:true */
/*global describe:false, it:false */

"use strict";

var prettyHrtime = require('../');
require('should');
require('mocha');

describe('pretty-hrtime', function() {
	describe('smoke', function () {

		it('should work', function(done) {
			var duration, regex, startTime, doneTime, actual, match;

			// Arrange
			duration = 100;
			regex = /^1\d\d ms/;

			// Act
			startTime = process.hrtime();

			setTimeout(function () {
				doneTime = process.hrtime(startTime);

				actual = prettyHrtime(doneTime);

				// Assert
				match = regex.test(actual);
				match.should.equal(true);

				done();
			}, duration);
		});

	});
});
