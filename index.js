const port = process.env.PORT || 3001;

const server = require('./server.js');

server.listen(port,() => {
    console.log(`\n Listening on ${port} \n`);
});