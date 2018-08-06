var https = require('https');

function getHTML (options, callback) {
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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);