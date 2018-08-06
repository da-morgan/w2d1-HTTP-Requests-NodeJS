var https = require('https');

function getAndPrintHTML (options) {
  var data ='';

  https.get(options, function(response){
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

