const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const obterHash =(password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash() 
        })
    }
}