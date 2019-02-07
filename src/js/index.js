import Quiz from './Quiz';
import template from "./templates";
import lang from "./lang";

window.myCodeMirror = null;
window.onload = init;
function init() {
    setCodeMirror('javascript');

    appendOption();
    const elQuiz = document.getElementById('quiz');
    const quiz = new Quiz('Quiz1');
    elQuiz.innerHTML = quiz.content;
    elQuiz.setAttribute('result', quiz.result);

    document.getElementById('compile').addEventListener('click', function() {
        const code = myCodeMirror.getValue();
        const url = 'http://localhost:3000/compile';
        sendAjax(url, code, setResult)
    });

    document.getElementById('language').addEventListener('change', changeLanguage);
}

function setCodeMirror(language) {
    let info = lang[language] || lang['javascript'];
    if (!myCodeMirror) {
        const content = document.getElementById('content');
        myCodeMirror = CodeMirror.fromTextArea(content, info.options);
    }

    myCodeMirror.setOption('mode', info.options.mode);
    myCodeMirror.setValue(info.defaultFunction);
}

function appendOption() {
    const elSelectBox = document.getElementById('selectBox');
    let str = '';
    Object.keys(template).forEach(quiz => {
        str += `<option value="${quiz}">${quiz}</option>`;
    });
    elSelectBox.innerHTML = str;

    elSelectBox.addEventListener('change', changeQuiz);
}

function changeQuiz() {
    const elSelectBox = document.getElementById('selectBox');
    const elQuiz = document.getElementById('quiz');
    let value = elSelectBox.value;
    let quiz = new Quiz(value);
    elQuiz.innerHTML = quiz.content;
    elQuiz.setAttribute('result', quiz.result);
}

function changeLanguage() {
    const elSelectBox = document.getElementById('language');
    setCodeMirror(elSelectBox.value);
}



export default init;