const lang = {
    javascript: {
        options: {
            mode: 'javascript',
            smartIndent: true,
            indentWithTabs: true,
            lineNumbers: true,
            tabSize: 4,
            theme: 'monokai.css'
        },
        defaultFunction: 'function solution() { \r\treturn; \r}'
    },

    python: {
        options: {
            mode: 'python',
            smartIndent: true,
            indentWithTabs: true,
            lineNumbers: true,
            tabSize: 4,
            theme: 'monokai.css'
        },
        defaultFunction: 'def solution():\r\treturn\r\rif __name__ == "__main__":\r\tprint(solution())'
    }
}

export default lang;