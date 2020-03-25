var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller.js');
var registerController=require('./controllers/register-controller.js');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "signup.html" );  
})  
 
app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
 
/* route to handle login and registration */
app.post('./signup.html',registerController.register);
app.post('./login.html',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register, function(req, res)
{
   res.sendfile(__dirname+"/"+"login.html");
});
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(8072);

app.post('/signup.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "signup.html" );  
 })  
 

app.post('/login.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "login.html" );  
 })  
 