var should = require("should");
var helper = require("node-red-node-test-helper");
var downloadNode = require("../download.js");

helper.init(require.resolve('node-red'));

describe('download Node', function () {

  afterEach(function () {
    helper.unload();
  });

  it('should be loaded', function (done) {
    var flow = [{ id: "n1", type: "download-from-firebase", name: "download-from-firebase", folder: "folder1"}];
    helper.load(downloadNode, flow, function () {
      var n1 = helper.getNode("n1");
      n1.should.have.property("name", "download-from-firebase");
      n1.should.have.property("folder", "folder1");
      done();
    });
  });
});
