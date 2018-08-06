var https = require('https');


function getAndPrintHTMLChunks () {
  var data ='';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data' ,function(chunk){
      data += chunk + '\n';
    });

    response.on('end', function(){
      console.log(data);
    });

  });

  console.log('request made successfully');

}

getAndPrintHTMLChunks();