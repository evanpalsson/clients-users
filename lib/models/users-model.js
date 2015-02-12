var Mongoose = require('Mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, uniqueness: true},
	age: {type: Number, min: 13, max: 100},
	address: [{
		address: {type: String, required: true, uppercase: true},
		city: {type: String, required: true, uppercase: true},
		zip: {type: String, required: true},
		kind: {type: String, enum: ['Billing', 'Shipping', 'Both'], default: 'Both'} //enum is a way to make possible values; the default is there to make a default option
	}],
	hobby: {type: String, required: false}
});

module.exports = Mongoose.model('User', schema);