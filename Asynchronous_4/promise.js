// This fille is an introduction to promises in java script

const promise = new Promise(function(resolve , reject){
    const a = 2
    const b = 1

    setTimeout(()=>{
    if(a === b)
    {
        resolve('Both the variables matches')
    }
    else
    {
        reject('Error: variables does not match')
    }}, 2000)
})

console.log("promise status : ",promise)

promise.then(function(response){
    console.log("Promise resolved sucessfully : ",response)
    console.log("Promise status inside resolve : ",promise)
})

promise.catch(function(response){
    console.log("Promise got rejected : ",response)
    console.log("Promise status inside reject : ",promise)
})

