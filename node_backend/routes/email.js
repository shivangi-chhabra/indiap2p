const express = require('express')
const router = express.Router();
const fs = require('fs')



router.post('/', async(req,res)=>{
    const work = {Subscriber_Email: req.body.Subscriber_Email}
    try{
        const data = " "+ work.Subscriber_Email
        fs.appendFile('./data/email.txt', data, (err) => {  
            if (data){
                res.status(200)
            }
        }) 
    }catch(err){
        next(error)
    }
  })

  module.exports = router