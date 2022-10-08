class Engineer extends Employee{

    constructor(gitHub_username) {
    this.gitHub_username = gitHub_username;    
    }
getGithub(){
    return this.gitHub_username; 
}

getRole(){
    return 'Engineer';
}

}

module.exports = Engineer;