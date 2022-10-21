const connect = require('connect');
const app = connect();


function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');

};

function godByeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Godbye World');

};
app.use('/hello', helloWorld);
app.use('/godbye', godByeWorld);

app.listen(3000);