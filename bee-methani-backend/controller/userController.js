const User = require('../models/User');


const addUser = (req, res) => {
    let user = new User(req.body)
    User.findOne({ username: req.body.username })
        .then((result) => {
            if (result == null) {
                user.save()
                    .then((result) => {
                        res.json({ "err": false })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            else{
                console.log("exist")
                res.json({"err":true})
            }
        })


}



module.exports = { 
    addUser
 }