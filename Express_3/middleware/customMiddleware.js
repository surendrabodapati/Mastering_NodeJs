// custom middle ware functions to be used in the Express_3/app.js

function customMiddlewareOne(req , res , next){
    console.log("This is custom middleware one")
    next()
}

function customMiddlewareTwo(req , res , next){
    console.log("This is custom middleware Two")
    next()
}

module.exports = {
    middlewareOne : customMiddlewareOne,
    middlewareTwo : customMiddlewareTwo 
}