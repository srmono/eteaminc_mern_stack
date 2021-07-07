console.log("start")

function userLogin(username, pw, callback){
    setTimeout(() => {
        console.log("user Logged in")
        callback({userName : "uname" })
    }, 5000);
}

function getUserProjects(uname, callback){
    setTimeout(() => {
        console.log("retruning projects")

        callback(["project1", "project2", "project3"])
    }, 5000);
}

function getProjectDetails(project, callback){
    setTimeout(() => {
        callback("Project details are here")
    }, 5000);
}

const user = userLogin("bvsrao91@gmail.com", "66886", user => {
    console.log(user);
    getUserProjects(user, projects => {
        console.log(projects);
        var proj = projects[0];
        getProjectDetails(proj, details => {
            console.log(details)
        })
    })
} )

console.log(user)