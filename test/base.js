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

console.log("\nRequire");
require("../index");
console.log("\nRequire end\n");

var propsArrayAfter=Object.getOwnPropertyNames([]).sort();
var propsObjectAfter=Object.getOwnPropertyNames({}).sort();
var propsStringAfter=Object.getOwnPropertyNames(new String("a")).sort();

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
					var o=[].outerSet([]);
					should.exist(o,"");
					assert.typeOf(o, "Array", "Array type not returned");
					
					expect( o ).to.deep.equal( [] ,"can't handle empty arrays");
					expect( [1].outerSet([]) ).to.deep.equal( [1] ,"can't handle diff");
					expect( [1].outerSet([1,2]) ).to.deep.equal( [2] ,"can't handle diff");
					expect( [1,2].outerSet([1]) ).to.deep.equal( [2] ,"can't handle diff");
					expect( [1,2].outerSet([1],[3]) ).to.deep.equal( [2,3] ,"can't handle diff");
				});
			it("String startWith", function() {
					var s= new String("atest");
					assert.typeOf(s.startWith("ad"), "boolean", "boolean type not returned");
					expect( s.startWith("a") ).to.equal(true,"can't handle single char");
					expect( s.startWith("at") ).to.equal(true,"can't handle multi char");
					expect( s.startWith("ad") ).to.equal(false,"can't false");
				});
	});
