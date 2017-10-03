//jshint esversion: 6
const net = require('net');
const fs = require('fs');


const PORT = process.env.PORT || 8080;
const address = '0.0.0.0';


const server = net.createServer((client) => {
  console.log('Client Connected');
  //enter your work here
  client.on('data' , (data) => {
    const dataString = data.toString();
    // console.log(dataString.split(' ')[3]);

    // const methodGET = dataString.split(' ')[0];
    // const host = dataString.split(' ')[2];

////////////////////BODY///////////////
    const uri = dataString.split(' ')[1];
    console.log(uri);
    function buildBody(target, path) {
      if( uri === target){
      fs.readFile(path, (err, data) => {
        if (err) throw err;
          console.log(data.toString());
        });
      }
    }
console.log(buildBody('/', './public/index.html'));
console.log(buildBody('/index.html', './public/index.html'));
console.log(buildBody('/hydrogen.html', './public/hydrogen.html'));
console.log(buildBody('/helium.html', './public/helium.html'));
console.log(buildBody('/404.html', './public/404.html'));
console.log(buildBody('/css/styles.css', './public/css/styles.css'));


    // if (uri === '/') {
    //   fs.readFile('./public/index.html', (err, data) => {
    //     if (err) throw err;
    //     console.log(data.toString);
    //   });
    // }

    // if (uri === '/index.html') {
    //   fs.readFile('./public/index.html', (err, data) => {
    //     if (err) throw err;
    //     console.log(data.toString());
    //   });
    // }

    // if (uri === '/hydrogen.html') {
    //   fs.readFile('./public/hydrogen.html', (err, data) => {
    //     if (err) throw err;
    //     console.log(data.toString());
    //   });
    // }

    // if (uri === '/helium.html') {
    //   // send html file with headers
    //   fs.readFile('./public/helium.html', (err, data) => {
    //     if (err) throw err;
    //     console.log(data.toString());
    //   });
    // }

    // if (uri === '/404.html') {
    //   fs.readFile('./public/404.html', (err, data) => {
    //     if (err) throw err;
    //     console.log(data.toString());
    //     });
    // }
    // if (uri === '/css/styles.css') {
    //   fs.readFile('./public/css/styles.css', (err, data) => {
    //     if (err) throw err;
    //     console.log(data.toString());
    //     });
    // }

    client.end(); //client ends the connection
  });

  client.on('end', () => { //server closes the connection
    console.log('Client Disconnected');
  });

});



/////////////////////////////////
///WHERE SERVER LISTENING
server.listen(PORT, address, () => {
  console.log('SERVER BCAST FROM ' + address + PORT);
});

///BE SURE TO INPUT THE VARIOR ERRORS THAT THE SERVER IS CHECKING FOR
// server.on('error', (err) => {
//   throw err;
// });