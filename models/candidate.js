var mongoose = require('mongoose'), Schema = mongoose.Schema

var candidateSchema = new Schema({
	name: String	
});

var Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;