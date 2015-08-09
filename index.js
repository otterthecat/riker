var fs = require('fs');
var ncp = require('ncp').ncp;
var Prompt = require('promptosaurus');
var ejs = require('ejs');
var blowgun = require('blowgun')(ejs);

// data/options for project
var data = {};
var mode = null;
var targetDirectory = process.cwd();

// kick off the interrogation
var prompt = new Prompt();
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

  var options = {"transform": function(read, write){

      read.setEncoding('utf8')
        .pipe(blowgun(data))
        .pipe(write);
    }
  }

  ncp(__dirname + '/templates/', targetDirectory, options, function(err){
    if(err){
      console.log('Error copying stuff ', err);
    } else {
      console.log('mission complete')
    }
  });
});

module.exports = prompt;