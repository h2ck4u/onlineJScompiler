import template from "./templates";

class Quiz {
    constructor(id) {
        this.id = id;
        this.content =  template[id].text || '문제가 없습니다.';
        this.result = template[id].result || '???';
    }
}

export default Quiz;