/*eslint-env node, assert, mocha, mocha*/
var assert = require("assert");
describe("jsPribExtensions", function() {
		describe("test l1", function() {
				require("../index");
				it("should return -1 when the value is not present", function() {
				assert.equal(-1, [1,2,3].indexOf(4));
			});
	});
});