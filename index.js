var fs = require('fs');
var Prompt = require('promptosaurus');
var prompt = new Prompt();
var ejs = require('ejs');
var blowgun = require('blowgun')(ejs);
var data = {};
var mode = null;

var readStream = fs.createReadStream('templates/package.json', {'encoding': 'utf8'});
var writeStream = fs.createWriteStream('demo/package.json');

prompt.add('what is the name of your project?', function(pName){
  data.project = pName;
})
.add('what does this project do?', function(pDesc){
  data.description = pDesc;
})
.add('who is the author of this project?', function(pAuthor){
  data.author = pAuthor
})
.add('Is this a Node, HTML, or Application project? (n|h|a)', function(projectMode){
  mode = projectMode;
})
.done(function(){
  readStream.pipe(blowgun(data))
    .pipe(writeStream);
  this.log('Mission complete.');
})
.ask();