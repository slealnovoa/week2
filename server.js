const connect = require('connect');
const app = connect();


function hypertext(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from NodeJs as html</h1>');

};

function none(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJs application');

};
app.use('/html', hypertext);
app.use('', none);

app.listen(3000);