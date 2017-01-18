/*eslint-env node, assert, mocha, mocha*/
var assert = require("assert");
describe("test", function() {
  describe("test l1", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});