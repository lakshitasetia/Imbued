// var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
    
  // var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "fname":req.body.fname,
        "lname":req.body.lname,
        "email":req.body.email,
        "password":req.body.password,
        "mobile":req.body.mobile,
        "age":req.body.age
       
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}
