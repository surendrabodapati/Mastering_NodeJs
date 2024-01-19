// File to try express moudle with HTTP and middleware

const express = require('express')

const app = express()

const customMiddleware = require('./middleware/customMiddleware')

const thirdpartyMiddleware = require('morgan')

// To use built in middleware in express
app.use(express.json())

// custom middleware
app.use(customMiddleware.middlewareOne)
app.use(customMiddleware.middlewareTwo)

//Third middleware : morgan to log the requests
app.use(thirdpartyMiddleware())

// get post request response

app.get('/',(req , res)=>{
    res.send('Hello , just checking the test application')
})


app.get('/nodemon', (req , res)=>{
    res.send('This is to check how the nodemon is working so if its displaying you can chill')
})

// playing with multiple routing
let types = [ {id:1,type:'car'},
          {id:2,type:'Bike'}
]

app.get('/type/:id', (req, res)=>{
    console.log(req.params)
    const type = types.find( type => type.id === parseInt(req.params.id)) // loose comparision
    console.log(type)
    if(!type) res.status(404).send(' The variation you are trying to find is not available')

    res.send(type)
})


app.get('/types' , (req , res)=>{
    res.send(types)
})

app.post('/types', (req, res)=>{
    const type = {
        id : types.length + 1,
        type : req.body.type

        
    }

    res.send(type)
    types.push(type)
})

app.put('/types/:typename', (req, res)=>{
    let type = types.find(type => type.type === req.params.typename)
    if(!type) res.status(404).send("The resource you are looking for is not available")

    type.type = req.body.type
    res.send(type)
})

app.delete('/types/delete/:id', (req, res)=>{
    let type = types.find(type=> type.id === parseInt(req.params.id))

    if(!type) res.status(404).send("The the resource you are looking for doesn't exit")

    let index = types.indexOf(type)

    types.splice(index, 1)
    res.send(types)
})

const port = process.env.PORT || 8888
//console.log(port)

app.listen( port, ()=>{console.log(`App is listening at port ${port}`)} )