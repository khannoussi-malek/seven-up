const mongoose = require('mongoose')


let userSchema  = mongoose.Schema(
    {
        email        : {type:String , required:true},
        username     : {type:String , required:true},
        password     : {type:String , required:true},
        phone_number : {type:String}
    }
);

let User = mongoose.model('Users',userSchema)
module.exports = User
