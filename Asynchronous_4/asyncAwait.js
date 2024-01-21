// In this file we deal with async and await keywords how it is useful in particular cases, here we're gonna discuss with a simple cofffe example

function placeOrder(drink){
    return new Promise(function(resolve , reject){
    console.log('Running placeOrder function')
    if(drink === 'coffee')
    resolve('Coffee ordered #987 recieved successfully.')
    else
    reject('Sorry, only coffee is served at this time.')
})}

function orderPrepatation(orderObj){
    return new Promise(function(resolve, reject){
    console.log(orderObj," ,Order is being prepared")
    resolve(` ${orderObj} Order is ready`)
    })
}

// let order = placeOrder('coffee').then(function(orderStatus){
//     console.log("order status : ",orderStatus)
//     const orderProcessing = orderPrepatation(orderStatus)
//     return orderProcessing
// }).then(function(orderProcessing){
//     console.log(orderProcessing)
// })

async function serveOrder(){
    let placingOrder = placeOrder("coffee")
    console.log(placingOrder)
    let preparingOrder = await orderPrepatation(placingOrder)
    console.log(preparingOrder)
}

serveOrder()


