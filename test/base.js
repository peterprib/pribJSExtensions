const assert=require('assert').strict;
require("../index");

describe("jsPribExtensions created base functions and extended objects", function() {
	it("Array outerSet", function() {
		let o=[].outerSet([]);
		assert.deepStrictEqual(o,[]);
		assert.deepStrictEqual([1].outerSet([]), [1] ,"can't handle empty compare array");
		assert.deepStrictEqual([1].outerSet([1,2]), [2] ,"can't handle greater compare array");
		assert.deepStrictEqual([1,2].outerSet([1]), [2] ,"can't handle smaller compare array");
		assert.deepStrictEqual([1,2].outerSet([1],[3]), [2,3] ,"can't handle multlie compare arrays");
	});
	it("String startWithList", function() {
		let s= new String("atest");
		assert.deepStrictEqual(s.startsWithList("a"),true,"can't handle single char");
		assert.deepStrictEqual(s.startsWithList("at"),true),"can't handle multi char";
		assert.deepStrictEqual(s.startsWithList("ad"),false),"can't handle false";
	});
	const testObject={a:1,b:"b",c:[1,2],d:{p:"test"}};
	it("clone", function() {
		assert.deepEqual(testObject.clone(),testObject);
	});
	it("cloneProperties", function() {
		console.log(testObject.cloneProperties("b","c","d"))
		assert.deepEqual(testObject.cloneProperties("b","c","d"),{b:"b",c:[1,2],d:{p:"test"}});
	});
});
