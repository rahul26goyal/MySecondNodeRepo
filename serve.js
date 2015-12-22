// init server here
//

var herokuModule = require("nodeapponheroku");
console.log('exported module====', herokuModule);
herokuModule.print('Successfully called print from Heroku Module...export successful');
