var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.request(requestOptions, function(response){
    console.log('making request');
    response.on('data' ,function(chunk){
      console.log('chunk recieved');
      console.log(chunk.toString() + '\n');
    });

  }).end();

  console.log('request made');

}

getAndPrintHTMLChunks();