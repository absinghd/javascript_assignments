
//youtube course for ninja: https://www.youtube.com/watch?v=k8mi38BI55g&list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8&index=15
//also look into using firebase geo-point



const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//create geolocation SChema
const GeoSchema = new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates:{
        type: [Number],
        index:"2dsphere"
    }
})

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
    },
    geometry: GeoSchema

})

const Chef = mongoose.model('chef', ChefSchema);

module.exports = Chef;