var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');


var pool = require('pg').pool;

var config = {
    user: "abhayvs610",
    database:"abhayvs610",
    host: "db.imad.hasura-app.io",
    port: '5432',
    password: process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'Webcentre- No.1 destination for everything about web',
    date: ' 12sup>th</sup> August, 2017, Saturday',
    heading: 'And my first webapp begins here',
    content: `<p align='center'><font color='white'>Article One</font></p>
                <p align='justify'>
                    HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                </p>
                 <p align='justify'>
                    HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                </p>
                 <p align='justify'>
                    HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                </p>
                <br>'
                          `
    },
    'article-two': {
        title: 'Webcentre- No.1 destination for everything about web',
        date: ' 9sup>th</sup> September, 2017, Monday',
        heading: 'And my first webapp begins here',
        content: `<p align='center'><font color='white'>Article Two</font></p>
                    <p align='justify'>
                        HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                    </p>
                    <br>'
                    <p align='justify'>
                        HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                    </p>`
                    },
    'article-three': {
        title: 'Webcentre- No.1 destination for everything about web',
        date: ' 14sup>th</sup> March, 2017, Wednesday',
        heading: 'And my first webapp begins here',
        content: `<p align='center'><font color='white'>Article Three</font></p>
                    <p align='justify'>
                        HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                    </p>
                     <p align='justify'>
                        HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                    </p>
                     <p align='justify'>
                        HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                    </p>
                    <br>'
                    <p align='justify'>
                        HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                    </p><p align='justify'>
                        HEy buddy, this is my new webapp and I'm going to rock everythng I do at first time
                    </p>}`
}
};
function createTemplate(data){
var title= data.title;
var date= data.date;
var content= data.content;
var heading= data.heading;

var htmlTemplate = `
    <html>
        <head>
        <title>${title}
        </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body bgcolor='light blue' text='red'>
            <div class='container'>
            <a href='/'>Go To Home</a>
            <h1 align='center'>${heading}
            </h1>
            ${content}
            <br>
            <div>
                ${date}
            </div>
            </div>
        </body>
    </html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
  function hash(input, salt) {
      //how do we create a hash
      var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
      return hashed.toString('hex');
  }
  
  
  app.get('hash/:input', function(req, res){
     var hashedString = hash(req,params,input, 'this is a hashed string');
     res.send(hashedString);
  });
  
  

app.get('/:articleName', function (req, res){
//artileName == article-one
//article[articleName] == {} content object for article one

var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

var counter = 0;
app.get('/counter', function(req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
