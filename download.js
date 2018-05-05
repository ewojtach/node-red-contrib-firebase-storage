module.exports = function(RED) {
    function DownloadFileNode(config) {

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
              var imagePath = node.folder + '/' + msg.fileName;
              var imagesRef = node.server.storageRef.child(imagePath);

              // Get the download URL
              imagesRef.getDownloadURL().then(function(url) {
                msg.downloadUrl = url;
                node.status({fill:"green", shape:"dot", text:"connected"});
                node.send(msg);
              }).catch(function(error) {
                node.error("Download failed: " + error.code);
                node.status({fill: "red", shape: "ring", text: "download failed"});
              });
            } else {
              node.error("Config node not filled with Firebase account data")
              node.status({fill:"red", shape:"ring", text:"disconnected"});
            }
        });
    }
    RED.nodes.registerType("download-from-firebase", DownloadFileNode);
}
