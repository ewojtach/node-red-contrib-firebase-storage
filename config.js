module.exports = function(RED) {

  function ConfigFirebaseNode(config) {
    RED.nodes.createNode(this, config);
    this.apikey = config.apikey;
    this.authdomain = config.authdomain;
    this.bucket = config.bucket;
    this.project = config.project;

    var node = this;

    // initialize firebase connection
    var firebase = require("firebase");
    var storage = require("firebase/storage")
    var configuration = {
      apiKey: node.apikey,
      authDomain: node.authdomain,
      storageBucket: node.bucket,
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(configuration);
    }

    this.storageRef = firebase.storage().ref();
  }

  RED.nodes.registerType("config-firebase", ConfigFirebaseNode);
}
