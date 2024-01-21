// In this we see how to connect you application with mongodb

const mongoose = require('mongoose')
// 127.0.0.1 is internal loop ip for the local host
mongoose.connect('mongodb://127.0.0.1/testDb').then(()=>console.log('Connection is Successful')
).catch(err=> console.error('Could not connect to the MongoDB'))

//schema is like defining the properties

const carSchema = mongoose.Schema({
    manufacture : String,
    model : String,
    releaseDate : {type : Date, default : Date.now},
    isReleased : Boolean
})

//model is like the interface through which we can create data objects the follows a specific syntax

const Car = mongoose.model('Cars', carSchema)

const car = new Car({
    manufacture : "Rangerover",
    model : "Regular",
    isReleased : true
})

// the async saves the data in the mongoDB by taking the actual model and data object

async function createCar(Car, car){

    const result = await car.save()
    console.log("Response from mongoDB : ",result)
}

//createCar(Car, car)


// async method to retrive the documents form the mongodb
async function getCarByManufacturer(manufacturer, Car){
    const carList = await Car.find({manufacture : manufacturer}).select({manufacture : 1, model : 1, releaseDate : 1}).or([{manufacture : "Ford"}]).sort({releaseDate : -1})
    console.log('Response from MongoDB: ',carList)
}

//getCarByManufacturer("Rangerover", Car)

// async method to update a document

async function updateCar(Car, id){
    let car = await Car.findById(id)

    if(!car) return;

    car.model = "Monster"
    const result = await car.save()
    console.log('response from the mongoDB ',result)
}

//updateCar(Car, '65ad9c11631143c3290d01a3')

// async function to delete a document

async function deleteCourse(Car, id){
    const car = await Car.findByIdAndDelete(id)
    console.log(car)
}

deleteCourse(Car, '65ad9c11631143c3290d01a3')