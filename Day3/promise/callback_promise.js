console.log("start")

function userLogin(username, pw){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("user Logged in")
            resolve({userName : "uname" })
        }, 5000);
    })
}

function getUserProjects(uname){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("retruning projects")
            resolve(["project1", "project2", "project3"])
        }, 5000);
    })  
}

function getProjectDetails(project){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Project details are here")
        }, 5000);
    })
}


// userLogin("bvsrao", "77979")
//     .then( user => { getUserProjects(user)} )
//     .then( projects => getProjectDetails(projects[0]))
//     .then( details => console.log(details))
//     //.catch(err => console.log(err))
//     .finally(() => console.log("this is final message"))

// async await


// async function displayUser(){
//     try {
//         let loggedInUser = await userLogin("username", "pw");
//         let projects = await getUserProjects(loggedInUser);
//         let ProjectDetails = await getProjectDetails(projects[0]);
//         console.log(ProjectDetails)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// displayUser()


// Promise all

var ig = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("instagram data")
        resolve({photos: ["pic1", "pic2"]})
    }, 3000);
})

var fb = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("instagram data")
        resolve({phosts: ["post1", "post2"]})
    }, 3000);
})


Promise
    .all([ig, fb])
    .then( result => {
        let instaGram = result[0]
        let faceBook = result[1]
        console.log("instagram data : ", instaGram)
        console.log("facebook data : ", faceBook)
    })
    
console.log("end")