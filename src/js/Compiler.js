import Quiz from './Quiz';

const LANGUAGE = {
    JAVASCRIPT: {
        mode: 'javascript',
        defaultFunction: 'function solution() { \r\treturn; \r}'
    },
    PYTHON: {
        mode: 'python',
        defaultFunction: 'def solution():\r\treturn\r\rif __name__ == "__main__":\r\tprint(solution())'
    }
}

class Compiler {
    constructor() {
        this.language = LANGUAGE.JAVASCRIPT;
        this.quiz = null;
        this.testCase = {};
    }

    init() {
        this.setCodeMirror(this.language);

        const url = 'http://localhost:3000/getAllQuiz';
        sendAjax(url, {}, this.appendOption.bind(this));

        const elQuiz = document.getElementById('quiz');
        const quiz = new Quiz('Quiz1');
        elQuiz.innerHTML = this.changeQuiz();
        elQuiz.setAttribute('result', quiz.result);

        document.getElementById('run').addEventListener('click', run);

        document.getElementById('language').addEventListener('change', this.changeLanguage.bind(this));
    }

    setCodeMirror() {
        if (!this.myCodeMirror) {
            const content = document.getElementById('content');
            this.myCodeMirror = CodeMirror.fromTextArea(content, {
                smartIndent: true,
                indentWithTabs: true,
                lineNumbers: true,
                tabSize: 4,
                theme: 'monokai.css'
            });
        }

        this.myCodeMirror.setOption('mode', this.language.mode);
        this.myCodeMirror.setValue(this.language.defaultFunction);
    }

    appendOption(arr) {
        let keys = JSON.parse(arr);
        const elSelectBox = document.getElementById('selectBox');
        let str = '';
        keys.forEach(index => {
            str += `<option value="${index}">quiz${index}</option>`;
        });
        elSelectBox.innerHTML = str;

        elSelectBox.addEventListener('change', this.changeQuiz);
    }

    changeQuiz(event) {
        let number = !!event && event.target.selectedIndex || 0;
        const data = {
            quizNumber: number
        }
        const url = 'http://localhost:3000/getQuiz';
        sendAjax(url, data, setQuiz);
    }

    changeLanguage() {
        this.language = LANGUAGE[document.getElementById('language').value];
        this.setCodeMirror();
    }

    setTestCase(input, expected) {
        const idx = Object.keys(this.testCase).length;
        this.testCase[idx] = {
            input: input,
            expected: expected
        };
    }

    getTestCase() {
        return this.testCase;
    }
}
function setResult(value = []) {
    let arr = JSON.parse(value);
    if (arr.length > 0) {
        const testCaseList = document.getElementById('testCaseList');
        console.log(arr)
        arr.forEach((result, idx) => {
            let equal = result == compiler.testCase[idx].expected;
            let tbody = testCaseList.firstElementChild;
            tbody.children[idx].innerHTML += `<td>${equal}</td>`;
        });
        
    }
}

function setQuiz(data = '') {
    let json = JSON.parse(data);
    const elSelectBox = document.getElementById('selectBox');
    const elQuiz = document.getElementById('quiz');

    let value = elSelectBox.value;
    let quiz = new Quiz(value);
    elQuiz.innerHTML = json.quiz;
}

function run() {
    if(Object.keys(this.getTestCase()).length < 1) {
        alert('테스트 케이스를 추가하세요.');
    } else {
        const data = {
            code: this.myCodeMirror.getValue(),
            testCase: this.getTestCase()
        }
        const url = 'http://localhost:3000/run';
        sendAjax(url, data, setResult);
    }
}
window.Compiler = Compiler;
export default Compiler;