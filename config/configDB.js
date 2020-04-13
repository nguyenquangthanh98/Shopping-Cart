var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Shopping-Cart', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;