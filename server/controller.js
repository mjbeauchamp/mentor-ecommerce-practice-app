const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        let {name, patronus, username, password} = req.body
        let db = await req.app.get("db")
        let user = await db.username_check([username])
        console.log(user)

        if(user[0]) return res.status(200).send("Username already in use. Please choose a different username.")

        //If the email isn't already in use, create a new user
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        let newUser = await db.register_user(name, patronus, username, hash)
        console.log(newUser[0])
        //Add new user to session so they're logged in
        req.session.user = newUser[0]
        res.status(200).send(req.session.user)
    }
}