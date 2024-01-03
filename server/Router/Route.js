const express = require("express");
const router = new express.Router();
const userdb = require("../Model/Schema");
const bcrypt = require("bcryptjs");


router.post("/register", async (req, res) => {
          try {
                    // console.log(req.body);

                    const {
                              uname,
                              email,
                              password,
                              cpassword
                    } = req.body;

                    if (!uname || !email || !password || !cpassword) {
                              res.status(400).json({
                                        msg: "plz fill all fields"
                              })
                    } else {
                              const findUser = await userdb.findOne({
                                        email
                              });

                              if (findUser) {
                                        res.status(400).json({
                                                  status: 202,
                                                  msg: "User Already Exist"
                                        })
                              } else {
                                        // console.log("done");

                                        const data = new userdb({
                                                  uname,
                                                  email,
                                                  password,
                                                  cpassword
                                        });

                                        const save = await data.save();
                                        // console.log(save);

                                        res.status(201).json({
                                                  status: 201,
                                                  msg: "Registration successfully done",
                                                  userData: save
                                        })
                              }
                    }
          } catch (error) {
                    res.status(500).json({
                              msg: "Network connection error",
                              error
                    })
          }
})



router.post("/login", async (req, res) => {
          try {
                    // console.log(req.body);

                    const {
                              email,
                              password
                    } = req.body;

                    if (!email || !password) {
                              res.status(400).json({
                                        msg: "enter all fields"
                              })
                    } else {
                              const findUser = await userdb.findOne({
                                        email
                              });

                              if (!findUser) {
                                        res.status(400).json({
                                                  status: 202,
                                                  msg: "User not found"
                                        })
                              } else {
                                        // console.log("done");

                                        const checkPassword = await bcrypt.compare(password, findUser.password);

                                        // console.log(checkPassword);
                                        if (!checkPassword) {
                                                  res.status(400).json({
                                                            status: 203,
                                                            msg: "Invalid Password"
                                                  })
                                        } else {
                                                  // console.log("done");

                                                  //generate the token
                                                  const token = await findUser.generateTOken();
                                        }
                              }
                    }

          } catch (error) {
                    res.status(400).json({
                              msg: 'Network Connection Error'
                    })
          }
})


module.exports = router;