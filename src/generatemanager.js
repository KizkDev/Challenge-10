let nameManager = require('../index.js')

function generateManagerHtml(managerObj) {



return `<p> Manager Name is ${nameManager.manager_name}</p>`
}


module.exports = generateManagerHtml();