import Quiz from './Quiz';
import template from "./templates";

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
        this.appendOption();
        const elQuiz = document.getElementById('quiz');
        const quiz = new Quiz('Quiz1');
        elQuiz.innerHTML = quiz.content;
        elQuiz.setAttribute('result', quiz.result);
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

    }
}
window.Compiler = Compiler;
export default Compiler;