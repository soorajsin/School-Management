const mongoose = require("mongoose");
const validator = require("validatorjs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keysecret = "hjgtfrdserfvgcfgtknmjhuyiolkjhbngfda";


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
                              if (!validator.isEmail(value)) {
                                        throw new Error("Invalid Email");
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


//generate token
userSchema.methods.generateToken = async function () {
          try {
                    const token = jwt.sign({
                              _id: this._id
                    }, keysecret);

                    this.tokens = this.tokens.concat({
                              token
                    })

                    await this.save();
                    return token;
          } catch (error) {
                    console.log(error);
                    throw new Error("Failed to generate token");
          }
}



const user = mongoose.model("users", userSchema);
module.exports = user;