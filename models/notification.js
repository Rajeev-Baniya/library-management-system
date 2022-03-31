const mongoose = require("mongoose");

const notificationSchmea = new mongoose.Schema({ 
    description: String,
    user_id : {
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
        },        
        username : String,
    },
},
{
    timestamps: true
})

module.exports = mongoose.model("Notification", userSchema);