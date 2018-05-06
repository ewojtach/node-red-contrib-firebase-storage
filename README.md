node-red-contrib-firebase-storage
========================
[Node-RED](http://nodered.org) nodes allowing to interact with Firebase storage.
Upload node - allows to upload files to Firebase Storage Bucket

Install
-------
Install from [npm](http://npmjs.org)
```
npm install node-red-contrib-firebase-storage
```

Usage
-----
**Firebase Upload**
Node allows uploading files to Google Firebase File Storage.
Input param is `msg.attachments` - array of file description objects to be stored in Firebase bucket.
Each attachment should contain at least ```fileName``` , ```content``` and ```contentType``` properties.
Node output contains `msg.downloadUrl` - download URL for uploaded file.

**Firebase Download**
Node allows resolving file name to download URL.
Input param is `msg.fileName` - download file name. Node output contains `msg.downloadUrl` - download URL for file.

**Firebase configuration properties**

- *Firebase Project* - ```projectId``` from Firebase config file.
- *API Key* - ```apiKey``` from Firebase config file.
- *storageBucket* - ```storageBucket``` from Firebase config file, eg. "my-project.appspot.com".
