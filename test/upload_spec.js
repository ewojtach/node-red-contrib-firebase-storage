var should = require("should");
var helper = require("node-red-node-test-helper");
var uploadNode = require("../upload.js");

helper.init(require.resolve('node-red'));

describe('upload Node', function () {

  afterEach(function () {
    helper.unload();
  });

  it('should be loaded', function (done) {
    var flow = [{ id: "n1", type: "upload-to-firebase", name: "upload-to-firebase", folder: "folder1"}];
    helper.load(uploadNode, flow, function () {
      var n1 = helper.getNode("n1");
      n1.should.have.property("name", "upload-to-firebase");
      n1.should.have.property("folder", "folder1");
      done();
    });
  });
});
