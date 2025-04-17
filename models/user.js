const mongoose = require("mongoose");
const Schema = mongoose.Schema;
<<<<<<< HEAD
const passportLocalMongoose = require("passport-local-mongoose");
=======
const passportLocalMongoose = require("passport-local-mongoose"); // this will define automatically username and password field so we don't need to define it manually
>>>>>>> extra/main

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

<<<<<<< HEAD
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
=======
userSchema.plugin(passportLocalMongoose); // this will add username and password field to the userSchema

const User = mongoose.model("User", userSchema);

module.exports = User;
>>>>>>> extra/main
