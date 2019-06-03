var bcrypt = require('bcryptjs');


module.exports = {

    encrpytPass: function (pass) {
        console.log("This function was called for password encryption!");
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(pass, salt, function (err, hash) {
                console.log(hash);
            });
        });
    },

    comparePass: function (pass, hash) {
        bcrypt.compare(pass, hash).then((res) => {
            return res;
        });
    }

}