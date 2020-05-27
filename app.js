var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/', express.static('assets'));

app.get('/', (req,res) =>{
    // res.sendFile(__dirname + '/index.html');
    //res.end();
    //res.end("Homepage!!");
    res.render('index');
});

app.get('/login', (req,res) =>{
    // res.end("Login page");
    res.render('login');
});

app.get('/signup', (req,res) =>{
    // res.end('Signup page')
    res.render('signup');
});

app.get('/feed/', (req,res) =>{
    // res.end(`Feed page of id = ${req.params.id}`);
    res.render('feed');
});

app.get('/profile/:name', (req,res) =>{
    res.render('profile', {name: req.params.name});
});

app.get('/article', (req,res) =>{
    res.render('article');
});

app.listen(process.env.PORT || 3000);