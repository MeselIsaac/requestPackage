var request = require ('request');
var fs = require('fs');

function imageDownloader(website, callback){


request.get(website)
.on('error', function (err) {
  throw err;
})
.on('response', function(response){
  console.log('Response Status Code:', response.statusMessage, ' Content Type:', response.headers['content-type']);
  console.log('Downloading image...');
})

.pipe(fs.createWriteStream('./future.jpg'))

.on('finish', function(){
  console.log(downloadComplete);
  callback()
})





}

var site = 'https://sytantris.github.io/http-examples/future.jpg'

function downloadComplete(){
  console.log('Download complete.');
}


imageDownloader(site, downloadComplete);


