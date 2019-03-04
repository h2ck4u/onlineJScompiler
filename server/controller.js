const fs = require('fs');

const controller = {
    index: (req,res) => {
        res.render('index.html')
    },

    run: (req, res) => {
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
    },

    getAllQuiz: (req, res) => {
        var jsonContent = fs.readFileSync("Quiz.json");
        var quizList = JSON.parse(jsonContent);
    
        res.send(Object.keys(quizList));
    },

    getQuiz: (req, res) => {
        var jsonContent = fs.readFileSync("Quiz.json");
        var quizList = JSON.parse(jsonContent);
        
        var body = req.body;
        var quizNumber = body.quizNumber;
    
        var quiz = {
            'quiz': quizList[quizNumber].quiz
        }
        
        res.send(quiz);
    },
    
    getAnswer: (req, res) => {
        var jsonContent = fs.readFileSync("Quiz.json");
        var quizList = JSON.parse(jsonContent);
    
        var body = req.body;
        var quizNumber = body.quizNumber;
    
        var answer = {
            'answer': quizList[quizNumber].result
        }
        res.send(answer);
    }
}
    
function writeFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
}

function execute(command) {
    return new Promise(function(resolve, reject) {
        var exec = require('child_process').exec;
        var option = {
            timeout: 200,
            maxBuffer: 1024
        }
        exec(command, option, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                console.log('stdout: ' + stdout);
                resolve(stdout);
            }
        });
    });
}

module.exports = controller;
