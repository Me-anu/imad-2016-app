var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles= {
var `article-one`: {
    title:'Article one by anu',
    heading:'Article One',
    date:'october 1 2016',
    content: `<p>
            This is the content of article one page.This This is the content of article one page.This is the content of article one page. the content of article one page.This is the content of article one page.This is the content of article one page.This is the content of article one page.This is the content of article one page.
        </p>
         <p>
            This is the content of article one page.This This is the content of article one page.This is the content of article one  page. the content of article one page.This is the content of article one page.This is the content of article one page.This is the content of article one page.This is the content of article one page.
        </p>
         <p>
            This is the content of article one page.This This is the content of article one page.This is the content of article one page. the content of article one page.This is the content of article one page.This is the content of article one page.This is the content of article one page.This is the content of article one page.
        </p>`
},
var `article-two`:{
     title:'Article two by anu',
    heading:'Article two',
    date:'october 3 2016',
    content: `<p>
            This is the content of article two page.This This is the content of article two page.This is the content of article two page. 
            </p>`
},
var `article-three`:{
      title:'Article three by anu',
    heading:'Article three',
    date:'october 5 2016',
    content: `<p>
            This is the content of article three page.This This is the content of article three page.This is the content of article three page. 
            </p>`
}
};

function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate =`
    <html>
   <head>
     <title>
         ${title}
     </title>  
     <meta name= "viewport" content= "width=device-width, initial-scale=1"/>
      <link href="/ui/style.css" rel="stylesheet" />
     </head>
    <body> 
    <div class='container'>
         <div>
        <a href='/'>home</a>
    </div>
     <hr/>
    <h3>
        ${heading}
    </h3>
    <div>
        ${date}
    </div>
    <div>
        ${content}
    </div>
   </div>
    </body>
</html>`
;
   return htmlTemplate; 
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:article-one', function(req, res) {
    var articleName = req.parans.articleName;
 res.send(createTemplate(articles[articleName]));    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
