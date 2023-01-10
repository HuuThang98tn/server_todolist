const mongoose = require("mongoose");
const NotFoundError = require("../exception/NotFoundError");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const MyError = require("../exception/MyError");

const mUserSchema = new Schema({

    userName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },

})

mUserSchema.statics.findByCredentials = async (email, password) => {
    const user = await mUserModel.findOne({
        email,
    });

    if (!user) throw new NotFoundError('User');

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) throw new MyError('Password invalid');

    return user;
};
const mUserModel = mongoose.model("users", mUserSchema);
module.exports = mUserModel;