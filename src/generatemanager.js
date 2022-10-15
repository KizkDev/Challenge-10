let nameManager = require('../index.js')

module.exports = function generateManagerHtml(managerObj) {
    return `<p> Manager Name is ${nameManager.manager_name}</p>`
}

