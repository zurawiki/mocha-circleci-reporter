'use-strict';

var Dot = require('mocha').reporters.Dot;
var JUnit = require('mocha-junit-reporter');


function MochaCircleCIReporter(runner, options) {
  new Dot(runner, options);
  new JUnit(runner, options);
}

module.exports = MochaCircleCIReporter;
