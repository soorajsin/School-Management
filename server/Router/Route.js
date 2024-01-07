const express = require("express");
const router = new express.Router();
const userdb = require("../Model/Schema");
const bcrypt = require("bcryptjs");
const authenticateDatauser = require("../Middleware/Authenticate");


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
                                                  const token = await findUser.generateToken();
                                                  // console.log(token);


                                                  //generate cookie
                                                  res.cookie("auth_token", token, {
                                                            httpOnly: true, // Ensures the cookie is only accessible on the server
                                                            secure: true, // Ensures the cookie is only sent over HTTPS (in a production environment)
                                                            maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds (adjust as needed)
                                                  });

                                                  const result = {
                                                            findUser,
                                                            token
                                                  };


                                                  res.status(201).json({
                                                            status: 201,
                                                            msg: "user successfully login",
                                                            userData: result
                                                  })
                                        }
                              }
                    }

          } catch (error) {
                    // console.log(error);
                    res.status(400).json({
                              msg: 'Network Connection Error not login',
                    })
          }
});



router.get("/validator", authenticateDatauser, async (req, res) => {
          // console.log("data");

          if (req.getData) {
                    res.status(201).json({
                              msg: "User find successfully",
                              status: 205,
                              getData: req.getData
                    })
          } else {
                    res.status(500).json({
                              msg: "Token is invalid or expired"
                    })
          }
})



router.post("/addStudent", authenticateDatauser, async (req, res) => {
          try {
                    // console.log(req.body);
                    const {
                              sendData
                    } = req.body;

                    if (!sendData) {
                              res.status(400).json({
                                        msg: "Please provide data to add student"
                              })
                    } else {
                              // console.log(sendData);

                              const user = req.getData;

                              if (!user) {
                                        res.status(400).json({
                                                  msg: "User not found"
                                        })
                              } else {
                                        // console.log(user);

                                        user.student.push(...sendData);

                                        const updatedUser = await user.save();
                                        // console.log(updatedUser);

                                        res.status(201).json({
                                                  msg: "student successfully added",
                                                  status: 202,
                                                  updatedUser: updatedUser
                                        })
                              }
                    }
          } catch (error) {
                    res.status(400).json({
                              msg: "add student failed"
                    })
          }
})


router.delete("/deletestudent", authenticateDatauser, async (req, res) => {
          try {
                    // console.log(req.body);

                    const {
                              studentId
                    } = req.body;
                    if (!studentId) {
                              res.status(400).json({
                                        msg: "please provide the id of the student you want to delete"
                              })
                    } else {
                              const user = req.getData;

                              if (!user) {
                                        res.status(400).json({
                                                  msg: "the token is invalid or has expired"
                                        })
                              } else {
                                        // console.log(user);

                                        const studentEntry = user.student.find((student) => student._id.toString() === studentId);

                                        if (!studentEntry) {
                                                  res.status(400).json({
                                                            msg: "wrong student id"
                                                  })
                                        } else {
                                                  // console.log(studentEntry);

                                                  user.student = user.student.filter((student) => student._id.toString() !== studentId);

                                                  const updatedUser = await user.save();

                                                  res.status(201).json({
                                                            status: 203,
                                                            msg: "delete successfully done",
                                                            updatedUser: updatedUser
                                                  })
                                        }
                              }
                    }
          } catch (error) {
                    res.status(400).json({
                              msg: "failed not delete student data"
                    })
          }
})


module.exports = router;