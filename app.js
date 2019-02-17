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
app.use('/static', express.static(__dirname + '/src'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/module', express.static(__dirname + '/module'));
app.get('/',function(req,res){
    res.render('index.html')
 });
 
app.post('/run', function(req, res) {
    var body = req.body;
    var executeInfo = {
        javascript: {
            fileName: 'test.js',
            command: `node test.js`,
            code: `var input = parseInt(process.argv[2]);
            ${body.code}
            console.log(solution(input));`
        },
        python: {
            fileName: 'test.py',
            command: 'python test.py',
            code: `${body.code}`
        }
    };


    writeFile(executeInfo[body.lang].fileName, executeInfo[body.lang].code);

    const testCases = body.testCases;
    let result = [];
    
    Object.keys(testCases).forEach(index => {
        let testCase = testCases[index];
        execute(`${executeInfo[body.lang].command} ${testCase.input}`).then(function(output) {
            result.push(parseInt(output));
        });
    });
    setTimeout(() => {
        res.send(result);
    }, 1000);
    
});

app.post('/getQuiz', function(req, res) {
    var body = req.body;
    var quizNumber = body.quizNumber;

    var quiz = {
        
    }
    res.send(quiz);
});

app.post('/getAnswer', function(req, res) {
    var body = req.body;
    var quizNumber = body.quizNumber;

    var quiz = {
        
    }
    res.send(quiz);
});

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});

function writeFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
}

function execute(command) {
    return new Promise(function(resolve, reject) {
        var exec = require('child_process').exec;
        exec(command, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                console.log('stdout: ' + stdout);
                resolve(stdout);
            }
        });
    });
}
