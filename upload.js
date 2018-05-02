module.exports = function(RED) {
    function UploadFileNode(config) {
        RED.nodes.createNode(this, config);

        var node = this;
        node.on('input', function(msg) {
            this.log("INPUT MESSAGE: "+msg);

            // todo: put initialization outside
            var firebase = require("firebase");
            var config = {
              apiKey: node.key,
              authDomain: node.authdomain,
              storageBucket: node.bucket
            };
            this.log("CFG: " + JSON.stringify(config));
            firebase.initializeApp(config);

            var storageRef = firebase.storage().ref();
            var imagesRef = storageRef.child(node.folder);

            if (msg.attachements.length > 0) {
              
              //todo: add image metadata
              var file = msg.attachements[0].content;
              var fileName = msg.attachements[0].fileName;

              var uploadRef = imagesRef.child(fileName);
              uploadRef.put(file).then(function(snapshot) {
                this.log("uploaded file: " + JSON.stringify(snapshot));
              });
            }

            //todo: return image reference
            node.send(msg);
        });
    }
    RED.nodes.registerType("upload-to-firebase", UploadFileNode);
}
