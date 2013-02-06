var Candidate = require('../models/candidate')

exports.display_resume = function(req, res){
	res.render('display_resume', {title: 'Carl J. Seger'});
}