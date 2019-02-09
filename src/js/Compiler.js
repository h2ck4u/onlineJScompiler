import Quiz from './Quiz';
import template from "./templates";
import lang from "./lang";

const LANGUAGE = {
    JAVASCRIPT: 'javascript',
    PYTHON: 'python'
}

class Compiler {
    constructor() {
        this.language = LANGUAGE.JAVASCRIPT;
        this.quiz = null;
    }

    init() {
        this.setCodeMirror('javascript');
        this.appendOption();
        const elQuiz = document.getElementById('quiz');
        const quiz = new Quiz('Quiz1');
        elQuiz.innerHTML = quiz.content;
        elQuiz.setAttribute('result', quiz.result);
    }

    setCodeMirror(language) {
        let info = lang[language] || lang['javascript'];
        if (!myCodeMirror) {
            const content = document.getElementById('content');
            myCodeMirror = CodeMirror.fromTextArea(content, info.options);
        }
    
        myCodeMirror.setOption('mode', info.options.mode);
        myCodeMirror.setValue(info.defaultFunction);
    }

    appendOption() {
        const elSelectBox = document.getElementById('selectBox');
        let str = '';
        Object.keys(template).forEach(quiz => {
            str += `<option value="${quiz}">${quiz}</option>`;
        });
        elSelectBox.innerHTML = str;

        elSelectBox.addEventListener('change', this.changeQuiz);
    }

    changeQuiz() {
        const elSelectBox = document.getElementById('selectBox');
        const elQuiz = document.getElementById('quiz');
        let value = elSelectBox.value;
        let quiz = new Quiz(value);
        elQuiz.innerHTML = quiz.content;
        elQuiz.setAttribute('result', quiz.result);
    }

    changeLanguage() {
        const elSelectBox = document.getElementById('language');
        this.setCodeMirror(elSelectBox.value);
    }
}
window.Compiler = Compiler;
export default Compiler;