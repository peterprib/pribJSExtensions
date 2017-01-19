/*eslint-env node, assert, mocha, mocha*/
var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should;


var jsPribExtensions = require("../index");

describe("jsPribExtensions", function() {
		describe("require loaded", function() {
				it("load successfully", function() {
						should.exist(jsPribExtensions);
						expect("atest".startWith("a")).to.equal(true);
						"atest".startWith("at").should.be.equal.to(true);
						expect("atest".startWith("ad")).to.equal(false);
						assert.typeOf("atest".startWith("ad"), "string", " test type");
					});
		});
	});