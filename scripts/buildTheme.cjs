var sass = require('node-sass');
var fs = require('fs');
var path = require('path');

var fileName = path.join(__dirname, '../theme/entry.scss');
var outFileName = path.join(__dirname, '../src/index.css');


sass.render({
  file: fileName,
}, function(err, result) { 

	if(err){
		console.log('!! ************** Error Occured - Buiding Sass **************** !!');
		console.log(err);
		return;
	}
	
	var _results = result.css.toString();
	fs.writeFileSync(outFileName, _results);
	console.log('\n\n!! ************** Buiding Sass:: Successful **************** !!\n\n');

});