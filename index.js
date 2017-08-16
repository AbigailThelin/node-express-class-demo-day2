const express = require('express'),
      bodyParser = require('body-parser'),
      app=express(),
      port=3000;
      data= require('./data.js')


app.use(bodyParser.json())

app.get('/api/student', (req, res)=>{
    if(req.query.grade){
        data.fiter(e =>{
            if(e.grade === +req.query.grade){
                return e
            }
        })
    } else {
        finalData = data
    }
    res.status(200).send(data)
})




app.listen(port, ()=> console.log(`listening on port ${port}`))