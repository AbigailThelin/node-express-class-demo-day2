const express = require('express'),
      bodyParser = require('body-parser'),
      app=express(),
      port=3000,
      data= require('./data.js'),
      cors = require('cors')


app.use(cors())
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

app.get('/api/getName', (req, res)=>{
        let students = data.filter(e=>{
            if(e.name === req.query.name){
                return e
            }
        })
    res.status(200).send(students)
    }
)



app.post('/api/newStudent', (req, res)=>{
    //res.end() >> not sending back data but ending request
    //res.send() >> is sending back data and also ending request
    data.push(req.body)
    res.status(200).end()
})

app.post('/api/admin', (req, res)=>{
    let admin={
        username: 'Ironman',
        password: 'Avengers'
    }
    let {username, password } = req.body
    if(username === admin.username && password === admin.password){
        res.status(200).redirect('http://google.com')
    }else{
        res.status(402).redirect("nope")
    }

})


app.get('/api/age', (req, res)=>{
    let finalData = data;
    if(req.query.over){
        finalData = finalData.filter(e=>{
            if(e.age > +req.query.over){
                return e
            }
        })
    }
    res.status(200).send(finalData)
})


app.get('/api/grade/:grade', (req, res)=>{
        let finalData= data.filter(e=>{
            if(e.grade === +req.params.grade){
                return e
            }
        })
        if(req.query.age){
            finalData = finalData.filter(e=>{
                return e.age === +req.query.age
            })
        }
    res.status(200).send(finalData)
})


// app.get('/api/admin/:username/:password', (req, res) => {
//   // using params so you test it out easier in the browser, it would be better to use req.body with a post or something
//   let admin = {
//     username: 'Ironman',
//     password: 'Av3ngers!'
//   } 
//   let { username, password } = req.params
//   if(username === admin.username && password === admin.password) {
//     res.status(200).redirect('http://google.com')
//   } else {
//     res.status(403).redirect('http://yahoo.com')
//   }
// })


//=========TWO PARAMETERS IN ONE===============//

// app.get('/api/student', (req, res) => {
//   let finalData = data;
//   if(req.query.grade) {
//     finalData = finalData.filter(e => {
//       if(e.grade === +req.query.grade[0] || e.grade === +req.query.grade[1]) {
//         return e
//       }
//     })
//   }
//   if(req.query.name) {
//     finalData = finalData.filter(e => {
//     if(e.name.toLowerCase() === req.query.name.toLowerCase()) {
//       return e
//     }
//   })
//   }
//   res.status(200).send(finalData)
// })

app.listen(port, ()=> console.log(`listening on port ${port}`))