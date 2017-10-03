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
    // console.log(dataString);


    ////***PICK UP HERE - work to creating server header response***
    // client.write({
    //   'GET: HTTP/1.1'
    //   'Server: localhost:8080'
    //   'Date: '
    // });

    const uri = dataString.split(' ')[1];

    if (uri === '/') {
      fs.readFile('./public/index.html', (err, data) => {
        if (err) throw err;
        console.log(data.toString);
      });
    }

    if (uri === '/index.html') {
      fs.readFile('./public/index.html', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
      });
    }

    if (uri === '/hydrogen.html') {
      fs.readFile('./public/hydrogen.html', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
      });
    }

    if (uri === '/helium.html') {
      // send html file with headers
      fs.readFile('./public/helium.html', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
      });
    }

    if (uri === '/404.html') {
      fs.readFile('./public/404.html', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
        });
    }
    if (uri === '/css/styles.css') {
      fs.readFile('./public/css/styles.css', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
        });
    }
    client.end();
  });

  client.on('end', () => {
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