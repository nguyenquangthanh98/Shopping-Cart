var mongoose = require('../config/configDB');
var Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    local: {
        email: String,
        password:String
    },
    activeMail: {
        type: Boolean,
        default: false
    },
    type: {
        type: Number,
        default: 2 //1:admin , 2:user
    }
}, {
    collection: "user"
})


var productSchema = new Schema({
    imagePath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    collection: "product"
})


var userSchema = mongoose.model('user', userSchema);
var productModel = mongoose.model('product', productSchema);

module.exports = {
    productModel
}

