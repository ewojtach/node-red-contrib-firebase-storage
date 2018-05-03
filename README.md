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
`msg.payload` is used as metadata of the files to be stored.
`msg.attachments` Array of file descrition objects to be stored in Firebase bucket.
    Each attachment should contain at least ```fileName``` and ```content``` properties.

**Firebase configuration properties**

*Firebase Project* - ```projectId``` from Firebase config file.
*API Key* - ```apiKey``` from Firebase config file.
