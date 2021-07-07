const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //console.log("user name available")
        //resolve({user: "venkat"})
        reject(new Error("No User"))
    }, 5000);
})

promise
    .then( user => console.log(user))
    .catch( err => console.log(err))
    .finally( () => console.log("final message"))