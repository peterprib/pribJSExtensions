/*eslint-env node, assert, mocha*/
var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should;
var jsPribExtensions = require("../index");
describe("jsPribExtensions", function() {
		describe("require loaded", function() {
				it("load successfully", function() {
						should.exist(jsPribExtensions,"jsPribExtensions not defined");
					});
				it("String startWith", function() {
						assert.typeOf("atest".startWith("ad"), "boolean", "boolean type not returned");
						expect("atest".startWith("a")).to.equal(true,"can't handle single char");
						"atest".startWith("at").should.be.equal.to(true,"can't handle multi char");
						expect("atest".startWith("ad")).to.equal(false,"can't false");
					});
		});
	});
