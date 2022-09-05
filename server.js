var express = require("express");
var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Develope/public"));

app.listen(PORT,function(){
    console.log(`app listening on http://localhost:${PORT}`)
})