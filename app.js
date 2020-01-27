var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

mongoose.connect('mongodb+srv://Rajatino16:salilba65@cluster0-gpq1p.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to DB!');
}).catch(err => {
	console.log('ERROR:', err.message);
});

// mongoose.connect("mongodb://localhost/todo");

app.use(methodOverride("_method"));

var fSchema = new mongoose.Schema(
				{
					name : String
				});

var list = mongoose.model("friend",fSchema);

// friends.create({
// 	name : "rajatino"
// },function(err,friends){
// 	if(err){
// 		console.log(err);
// 	}
// 	else
// 		{console.log(friends);}
// } );

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));



app.get("/", function(req, res){
   res.render("home"); 
});

app.post("/add", function(req, res){
    var newFriend = req.body.newfriend;
	var addition = { name : newFriend }
    list.create(addition, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to friends page
            res.redirect("/todo");
        }
    });
});	


app.get("/todo", function(req, res){
	list.find({}, function(err, item){
       if(err){
           console.log(err);
       } else {
          res.render("items", {list: item});
       }
    });
});	

app.delete("/todo/:id", function(req, res){
   list.findByIdAndRemove(req.params.id, function(err){
      if(err){
		  console.log("this is the error");
      } else {
          res.redirect("/todo");
      }
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started!!!"); 
});


// USE ABOVE METHOD OR THIS METHOD IN GOORM IDE
// app.listen(3000, function() { 
//   console.log('Server listening on port 3000'); 
// });    use "PORT=3000 node app.js" to run the code 