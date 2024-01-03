const express = require("express");
const app = express();
const port = 4000 || process.env.port;


app.get("/", (req, res) => {
          res.send("Hello, server")
})


app.listen(port, () => {
          console.log(`Server is running on ${port}`);
})