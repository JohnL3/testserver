var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create a schema
var drinkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
	drink:{
		type: String,
		required: true
	},
	price: {
		type: Currency,
		required: true
	} 
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Drinks = mongoose.model('Drink', drinkSchema);

// make this available to our Node applications
module.exports = Drinks;