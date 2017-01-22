/*eslint-env node, assert, mocha*/
var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should;

var propsArray=Object.getOwnPropertyNames(Array).sort();
var propsObject=Object.getOwnPropertyNames(Object).sort();
var propsString=Object.getOwnPropertyNames(String).sort();
console.log("Array properties: "+propsArray);
console.log("Object properties: "+propsObject);
console.log("String properties: "+propsString);
var jsPribExtensions = require("../index");
var propsArrayAfter=Object.getOwnPropertyNames(Array).sort();
var propsObjectAfter=Object.getOwnPropertyNames(Object).sort();
var propsStringAfter=Object.getOwnPropertyNames(String).sort();
console.log("Array properties: "+propsArrayAfter);
console.log("Object properties: "+propsObjectAfter);
console.log("String properties: "+propsStringAfter);

console.log("Array diff: "+propsArrayAfter.outerSet(propsArray));
console.log("Object diff: "+propsObjectAfter.outerSet(propsObject));
console.log("String diff: "+propsStringAfter.outerSet(propsString));


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
