/*eslint-env node, assert, mocha*/

var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

					console.log("assert " +Object.getOwnPropertyNames(assert).sort());
					console.log("expect " +Object.getOwnPropertyNames(expect).sort());
					console.log("should() " +Object.getOwnPropertyNames(should).sort());
	


var propsArray=Object.getOwnPropertyNames([]).sort();
var propsObject=Object.getOwnPropertyNames({}).sort();
var propsString=Object.getOwnPropertyNames(new String("a")).sort();

console.log("Array properties: "+propsArray);
console.log("Object properties: "+propsObject);
console.log("String properties: "+propsString);

console.log("\nFirst require");
require("../index");
console.log("\nSecond Require");
require("../index");
console.log("\nRequire end\n");



var propsArrayAfter=Object.getOwnPropertyNames([]).sort();
var propsObjectAfter=Object.getOwnPropertyNames({}).sort();
var propsStringAfter=Object.getOwnPropertyNames("").sort();

console.log("Array properties: "+propsArrayAfter);
console.log("Object properties: "+propsObjectAfter);
console.log("String properties: "+propsStringAfter);

console.log("Array diff: "+propsArrayAfter.outerSet([propsArray]));
console.log("Array diff: "+propsArray.outerSet(propsArrayAfter));
console.log("Object diff: "+propsObjectAfter.outerSet(propsObject));
console.log("String diff: "+propsStringAfter.outerSet(propsString));


describe("jsPribExtensions", function() {
			it("Array outerSet", function() {
					console.log("assert " +Object.getOwnPropertyNames(assert).sort());
					console.log("expect " +Object.getOwnPropertyNames(expect).sort());
				
					assert.typeOf([].outerSet([]), "Array", "Array type not returned");
					
					expect( [].outerSet([]) ).to.equal( [] ,"can't handle empty arras");
					expect( [1].outerSet([]) ).to.equal( [1] ,"can't handle diff");
					expect( [1].outerSet([1,2]) ).to.equal( [2] ,"can't handle diff");
					expect( [1,2].outerSet([1]) ).to.equal( [2] ,"can't handle diff");
					expect( [1,2].outerSet([1],[3]) ).to.equal( [2,3] ,"can't handle diff");
				});
			it("String startWith", function() {
					assert.typeOf("atest".startWith("ad"), "boolean", "boolean type not returned");
					expect( "atest".startWith("a") ).to.equal(true,"can't handle single char");
					expect( "atest".startWith("at") ).to.equal(true,"can't handle multi char");
					expect( "atest".startWith("ad") ).to.equal(false,"can't false");
				});
	});
