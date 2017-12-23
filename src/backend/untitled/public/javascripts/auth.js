var User = require('../../models/user').User
let check = async function (req,res){
    let variable = await auth(req,res);
    return variable
}
let auth = async function (req,res) {
    var auth = req.headers['authorization'];  // auth is in base64(username:password)  so we need to decode the base64
    if(!auth) {     // No Authorization header was passed in so it's the first time the browser hit us

        // Sending a 401 will require authentication, we need to send the 'WWW-Authenticate' to tell them the sort of authentication to use
        // Basic auth is quite literally the easiest and least secure, it simply gives back  base64( username + ":" + password ) from the browser
        res.statusCode = 401;
        return false
    }

    else if(auth) {    // The Authorization was passed in so now we validate it
        let creds = await getCredentials(auth);
        var username = creds[0];
        var password = creds[1];
        User.findOne({username: username}, function (err, user) {
            if(user){
                console.log(user)
                if(user.checkPassword(password)){
                    res.statusCode = 200;  // OK
                    return true;
                }
                else {
                    console.log('autorized')
                    console.log(username,password)
                    res.statusCode = 401; // Force them to retry authentication
                    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');

                    // res.statusCode = 403;   // or alternatively just reject them altogether with a 403 Forbidden

                    return false;
                }
            }
        })  // Is the username/password correct?
    }
    return true;
}
let havePermission = async(req,res) =>{
    var auth = req.headers['authorization'];
    let permission = false;
    let creds = await getCredentials(auth)
    var username = creds[0];
    var password = creds[1];
    await User.findOne({username: username}, function (err, user) {
        console.log(user);
        if(user.role === 'admin'){
            permission = true
        }
        else {
            console.log('error')
            permission = false
        }

    })  // I
    console.log('false');
    console.log(permission)
    return permission
}

let getCredentials = async function (auth) {
    var tmp = auth.split(' ');   // Split on a space, the original auth looks like  "Basic Y2hhcmxlczoxMjM0NQ==" and we need the 2nd part

    var buf = new Buffer(tmp[1], 'base64'); // create a buffer and tell it the data coming in is base64
    var plain_auth = buf.toString();        // read it back out as a string

    console.log("Decoded Authorization ", plain_auth);

    // At this point plain_auth = "username:password"

    var creds = plain_auth.split(':');      // split on a ':'
    return creds
}
module.exports = {
    check,
    havePermission
}