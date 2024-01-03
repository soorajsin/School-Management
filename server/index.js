const express = require("express");
const app = express();
require("./DB/Connection");
const cors = require("cors");
const router = require("./Router/Route");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;



app.get("/", (req, res) => {
          res.status(400).json({
                    message: "Welcome to the Server"
          })
})


app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);


app.listen(port, () => {
          console.log(`Server is running on ${port}`);
})