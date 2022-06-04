const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const fs = require("fs");
const uuid = require("uuid-v4");
const {Storage, Bucket} = require("@google-cloud/storage");
const {Console} = require("console");
const storage = new Storage({
    projectId: "lambe-e5e83",
    keyFilename: "lambe.json"
})

exports.uploadImage = functions.https.onRequest((request, response) => {
   cors(resquest, response, () => {
        try {
            fs.writeFileSync("/tmp/imageToSave.jpg", 
            request.body.image, "base64")

            const bucket = storage.bucket('lambe')
            const id = uuid()
            bucket.upload("/tmp/imageToSave.jpg", {
                upload: 'media',
                destination: `/posts/${id}.jpg`,
                metadata: {
                    metadata: {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens: id
                    }
                }
                },  (err, file) => {
                    if(err) {
                        return response.status(500)
                        .json({ error: err})
                    }else {
                        const fileName = encodeURIComponent(file.name)
                        const imageUrl = 'https://console.firebase.googleapis.com/v0/b/'
                            + bucket.name + '/o/'+ fileName + '?alt=media&token' + id
                        return response.status(201).json( {imageUrl: imageUrl} )
                    }
                
            })
        } catch (err){
            console.log(err)
            return response.status(500).json({error:err})

        }
   })
 });
