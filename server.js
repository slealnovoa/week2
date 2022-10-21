const connect = require('connect');
const app = connect();


function none(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJs application');

};

function html(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from NodeJs Application as html</h1>');

};
/*
function json(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.end(
        "message": "hello from NodeJs application as json"
    
    );
};
*/
app.use('/', none)
app.use('/html', html);



app.listen(3000);