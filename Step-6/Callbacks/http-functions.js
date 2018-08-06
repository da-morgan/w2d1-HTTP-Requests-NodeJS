var https = require('https');

module.exports = function getHTML (options, callback) {
  var data ='';

  https.get(options, function(response){
  response.setEncoding('utf8');

    response.on('data' ,function(chunk){
      data += chunk + '\n';
    });

    response.on('end', function(){
      callback(data);
    });

  });

};