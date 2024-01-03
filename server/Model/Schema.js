const mongoose = require("mongoose");
const validator = require("validatorjs");
const bcrypt = require("bcryptjs");


const userSchema = mongoose.Schema({
          uname: {
                    type: String,
                    required: true,
          },
          email: {
                    type: String,
                    required: true,
                    unique: true,
                    validator(value) {
                              if (!validator.isEmail) {
                                        throw new Error('Email is invalid');
                              }
                    }
          },
          password: {
                    type: String,
                    required: true,
                    minlength: 6
          },
          cpassword: {
                    type: String,
                    required: true,
                    minlength: 6
          },
          tokens: [{
                    token: {
                              type: String,
                              required: true
                    }
          }]
});


userSchema.pre("save", async function (next) {
          const user = this;

          if (user.isModified("password")) {
                    user.password = await bcrypt.hash(user.password, 10);
                    user.cpassword = await bcrypt.hash(user.cpassword, 10);
          }

          next();
})



const user = mongoose.model("users", userSchema);
module.exports = user;