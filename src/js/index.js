import Quiz from './Quiz';
import template from "./templates";

window.onload = init;
function init() {
    appendOption();
    const elQuiz = document.getElementById('quiz');
    const quiz = new Quiz('Quiz1');
    elQuiz.innerHTML = quiz.content;
    elQuiz.setAttribute('result', quiz.result);
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


export default init;