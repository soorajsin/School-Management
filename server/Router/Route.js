const express = require("express");
const router = new express.Router();


router.post("/register", async (req, res) => {
          try {
                    console.log(req.body);
          } catch (error) {
                    res.status(500).json({
                              msg: "not found data",
                              error
                    })
          }
})


module.exports = router;