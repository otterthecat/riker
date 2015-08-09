var fs = require('fs');
var path = require('path');

var sourcePath = path.resolve(__dirname, '../templates/configuration');
console.log('Source Path ', sourcePath);

var files = fs.readdirSync(sourcePath);
var currentDirectory = process.cwd()

module.exports = function(){
  files.forEach(function(file){
    fs.createReadStream(sourcePath + '/' +  file).pipe(fs.createWriteStream(currentDirectory + '/' + file));
  });
}
