const starteDubugger = require('debug')('app:startup');



getUser(1)
    .then(user => {
        console.log("User:", user); // Log the user
        return getUserRespositories(user.gitHubUsername);
    })
    .then(repos => {
        console.log("Repositories:", repos); // Log the repositories
    })
    .catch(err => console.log(err));

starteDubugger('After');



function getUser(id) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        starteDubugger('Connecting to database....')
        return resolve({ id: id, gitHubUsername: 'Mosh' });
    }, 2000);
   })
}

function getUserRespositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            starteDubugger(`getting ${username} repositories..`)
            return resolve(['repo1, repo2, repo3, repo4']);
        }, 2000)
    })
}
