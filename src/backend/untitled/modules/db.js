let User = require('../models/user').User;
/*exports.encryptPassword = function (password) {
    return crypto.createHmac('sha1',this.salt).update(password).digest('hex');
};

schema.virtual('password')
    .set(function (password) {
        this._plainPassword = password;
        this.salt = '121313';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function () {
        return this._plainPassword;
    });

exports.checkPassword = function (password) {
    return this.encryptPassword(password) === this.hashedPassword;
};*/
let getUserByLoginAndPass = async function (name, passwordHash) {
  let user = await User.find({ username: name, hashedPassword: passwordHash });
  return user[0]
};

let create = async(newUser) => {
    let user = new User(newUser);
    user.save(function (err, user, affected) {
        if (err) throw err;
    })

};

module.exports = {
    getUserByLoginAndPass,
    create
};
