/*eslint-env node, assert, mocha*/

var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
require("../index");

describe("jsPribExtensions created base functions and extended objects", function() {
			it("Array outerSet", function() {
					console.log("assert " +Object.getOwnPropertyNames(assert).sort());
					console.log("expect " +Object.getOwnPropertyNames(expect).sort());
					var o=[].outerSet([]);
					should.exist(o,"");
					assert.typeOf(o, "Array", "Array type not returned");
					expect( o ).to.deep.equal( [] ,"can't handle empty arrays");
					expect( [1].outerSet([]) ).to.deep.equal( [1] ,"can't handle empty compare array");
					expect( [1].outerSet([1,2]) ).to.deep.equal( [2] ,"can't handle greater compare array");
					expect( [1,2].outerSet([1]) ).to.deep.equal( [2] ,"can't handle smaller compare array");
					expect( [1,2].outerSet([1],[3]) ).to.deep.equal( [2,3] ,"can't handle multlie compare arrays");
				});
			it("String startWith", function() {
					var s= new String("atest");
					assert.typeOf(s.startsWith("ad"), "boolean", "boolean type not returned");
					expect( s.startsWith("a") ).to.equal(true,"can't handle single char");
					expect( s.startsWith("at") ).to.equal(true,"can't handle multi char");
					expect( s.startsWith("ad") ).to.equal(false,"can't false");
				});
	});
