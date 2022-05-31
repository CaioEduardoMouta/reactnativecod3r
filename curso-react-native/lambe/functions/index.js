const functions = require("firebase-functions");
const cors = require('cors')({ origin: true})
const fs = require('fs')
const uuid = require('uuid-v4')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
    projectId: 'lambe-e5e83',
    keyFilename: ''
})

exports.helloWorld = functions.https.onRequest((request, response) => {
   
 });
