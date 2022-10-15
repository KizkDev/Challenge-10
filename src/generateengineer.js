let nameEngineer = require('../index.js');

function generateEngineerHtml(engineerObj) {

    return `<p> Engineer´s name is ${nameEngineer.engineer_name} </p`
}

module.exports = generateEngineerHtml;