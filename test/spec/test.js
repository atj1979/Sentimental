/* global describe, it */
var calcData = require ('../../server/config/indico.js');
var expect = require('chai').expect;

describe('tests for middleware.js', function () {
  describe('Tests for indico.js', function () {
    it('calcData should be a function', function () {
    	expect(calcData).to.be.a('function');

    });
  });
});

