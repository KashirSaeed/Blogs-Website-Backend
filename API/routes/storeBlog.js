const express = require('express');
const router = express.Router();
const {connection} = require('../database/sql');
const multer = require('multer');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname);
    }
})

var upload = multer({storage});
router.post('/' , upload.single('image')   ,(req,res,next)=>{
    const data = {
        content:req.body.data,
        image:req.file.filename,
    }

    connection.query('INSERT into Blogs SET ?' , data , (err,result)=>{
        if(err) throw err;
        else{
            console.log("data stored");
            res.redirect('http://localhost:3000');
        }
    } );


} );

module.exports = router;