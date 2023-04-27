const users = require('../utils/users')

const login = (req, res) => {
    const email = req.query.email
    const password = req.query.password
    if(users.includes(email && password)){
        res.status(200).json({access: true})
    } else {
        res.status(200).json({access: false})
    }
}

module.exports = {
    login
}