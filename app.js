var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors');
const fs = require('fs');
const PORT = process.env.PORT || 3000

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// CORS 설정
app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use('/static', express.static('static'));
app.get('/',function(req,res){
    res.render('index.html')
 });
 
app.post('/compile', function(req, res) {
    var body = req.body;
    writeFile(body.code);
    execute().then(function(result) {
        res.send(result);
    });
});

app.listen(PORT, () => {
    console.log('Server is running on PORT:',PORT);
});

function writeFile(data) {
    var str = `console.log((${data})());`;
    fs.writeFileSync('test.js', str, 'utf8');
}

function execute() {
    return new Promise(function(resolve, reject) {
        var exec = require('child_process').exec;
        exec('node test.js', function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                console.log('stdout: ' + stdout);
                resolve(stdout);
            }
        });
    });
}
