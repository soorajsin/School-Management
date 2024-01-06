const jwt = require("jsonwebtoken");
const keysecret = "hjgtfrdserfvgcfgtknmjhuyiolkjhbngfda";
const userdb = require("../Model/Schema");


const authenticateData = async (req, res, next) => {
          try {
                    const token = await req.headers.authorization;
                    // console.log(token);

                    if (!token) {
                              res.status(400).json({
                                        message: "No Token Provided"
                              })
                    } else {
                              // console.log(token);
                              const verifyToken = await jwt.verify(token, keysecret);
                              // console.log(verifyToken);
                              if (!verifyToken) {
                                        res.status(400).json({
                                                  message: "Invalid Token"
                                        })
                              } else {
                                        const getData = await userdb.findOne({
                                                  _id: verifyToken._id
                                        })
                                        // console.log(user);

                                        if (!getData) {
                                                  res.status(400).json({
                                                            message: "User Not Found!"
                                                  })
                                        } else {
                                                  req.getData = getData;

                                                  next();
                                        }
                              }
                    }
          } catch (error) {
                    res.status(500).json("Authenticate Failed")
          }
}


module.exports = authenticateData;