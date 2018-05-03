module.exports = function(RED) {
    function UploadFileNode(config) {

        RED.nodes.createNode(this, config);
        this.server = RED.nodes.getNode(config.server);
        this.folder = config.folder;

        var node = this;
        if (node.server) {
          node.status({fill: "green", shape:"dot", text: "connected"});
        } else {
          node.status({fill: "red", shape: "ring", text: "disconnected"});
        }

        node.on('input', function(msg) {
            if (node.server) {
              global.XMLHttpRequest = require("xhr2");
              node.status({fill: "blue", shape: "dot", text:"uploading"});

              var imagesRef = node.server.storageRef.child(node.folder);

              if (msg.attachments.length > 0) {

                //todo: add image metadata
                var file = msg.attachments[0].content;
                var fileName = msg.attachments[0].fileName;

                var uploadRef = imagesRef.child(fileName);
                uploadRef.put(file).then(function(snapshot) {
                  node.status({fill:"green",shape:"dot",text:"connected"});
                });
              }

              //todo: return image reference
              node.send(msg);
            } else {
              this.log("No config node configured")
              node.status({fill:"red",shape:"ring",text:"disconnected"});
            }
        });



    }
    RED.nodes.registerType("upload-to-firebase", UploadFileNode);
}
