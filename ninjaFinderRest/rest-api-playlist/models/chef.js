const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create chef Schema & model
const ChefSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Name field is required']
    },
    city:{
        type:String
    },
    available:{
        type:Boolean,
        default: false
    }
    //add in geo location
})

const Chef = mongoose.model('chef', ChefSchema);

module.exports = Chef;