var crypto = require('crypto');

function hashSaltPass(pass){//aquest va bd
    var salt = crypto.randomBytes(128).toString('base64');
    var hash = crypto.createHash('sha512').update(pass).digest('base64') + salt;
    return hash;
}

function onlyHashPass(pass){
    var salt = crypto.randomBytes(128).toString('base64');
    var hash = crypto.createHash('sha512').update(pass).digest('base64');
    return hash;
}

function removeSalt(hash){
	return hash.substr(0,88); 
}


module.exports = {
	hashSaltPass,
	onlyHashPass,
	removeSalt
}