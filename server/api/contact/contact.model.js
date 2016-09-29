'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Contact', ContactSchema);
