// var Cryptr = require('cryptr');
// cryptr = new Cryptr('myTotalySecretKey');

 
var connection = require('./../config');
var http= require("http");
var express=require("express");

module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  // decryptedString = cryptr.decrypt(results[0].password);
        pwd= results[0].password;
            if(pwd==req.body.password){
              res.redirect('https://distracted-wozniak-b3867f.netlify.com/home.html');
                }
            else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exists"
          });
        }
      }
    });
}
