const Buffer = require('safe-buffer').Buffer;
const Keygrip = require('keygrip');
const keys = require('../../config/keys');
const keygrip = new Keygrip([keys.cookieKey]);

module.exports = (user) => {

    const sessionOject = {
        passport : {
            user : user._id.toString()
        }
    };
    const session = Buffer.from(
        JSON.stringify(sessionOject)
        ).toString('base64');
    
    
    const sig = keygrip.sign('session=' + session);
    return { session: session, sig: sig};

};