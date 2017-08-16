const express = require('express'),
      bodyParser = require('body-parser'),
      app=express(),
      port=3000;


app.use(bodyParser.json())

app.get('/api/student', (req, res)=>{

})




app.listen(port, ()=> console.log(`listening on port ${port}`))