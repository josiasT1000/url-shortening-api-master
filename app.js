const express = require("express");
const bodyParser = require("body-parser");
const superagent = require("superagent");
const ejs = require("ejs");

const app = express();

var shortenedLinks = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  // res.sendFile(__dirname+"/index.html");
  res.render("index", {links: shortenedLinks})
});
app.post("/", function(req, res){
  // console.log(req.body);
  superagent
    .post("https://rel.ink/api/links/")
    .send(req.body)
    .end(function (err, response) {
        // Calling the end function will send the request
        if(err){
          console.log("there is an error.");
        }else{
          console.log(response.body);
          shortenedLinks.push(response.body);
          res.redirect("/");
        }
      });
});


app.listen(3000, function(){
  console.log("server is running at port 3000");
});
