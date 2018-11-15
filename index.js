console.log("index.js running!");

var express = require("express");

var app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8080, () => {
    console.log("LISTENING ...");
});
