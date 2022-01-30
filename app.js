const express = require('express');
const app = express();

const port = 3000

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// HelloWorld
app.get('/', function(req,res,next){
    res.send("Hello World");
});

// API
app.get('/api/:id', function(req,res,next){
    const id   = req.params.id;
    const name = req.query.name
    const data = {"status":"OK","id":id, "name":name}
    res.json(data);
});

// POST
app.post('/api/:id', (req,res,next) => {
    const id   = req.params.id;
    const data = req.body
    console.log(id, req.body)
    const retVal = Object.assign({id:id}, data)
    res.json(retVal)
})

// htmlを返す
app.get('/html', (req, res, next) => {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h5>Hello! EXPRESS!</h5>
        </body>
        </html>
    `

    res.send(html)
})


// htmlファイルを返す
app.get('/test', (req, res, next) => {
    //__dirname : ルートディレクトリ(今回はexpressフォルダ)
    res.sendFile(__dirname + '/public/test.html')
})

//Listen
app.listen(port, function(){
    console.log("Start Express on port 3000.");
});

