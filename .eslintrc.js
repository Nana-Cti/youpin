// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: false,
        node: true,
        es6: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-var": "error",
        "indent": 'off',
        "keyword-spacing": [ // 关键字缩进
            "error", {
                "before": true,
                "after": true
            }
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "no-unreachable": [ // 不允许在 return, throw, break添加代码
            "error"
        ],
        "spaced-comment": [ // 注释后预留空格
            "error",
            "always"
        ],
        "space-before-function-paren": [ // 括号与函数名加空格
            "off", "always"
        ],
        "eqeqeq": [ // 使用 ===
            "error", "always"
        ],
        "space-infix-ops": [ // 拼接字符串预留空格
            "error", {
                "int32Hint": false
            }
        ],
        "no-multiple-empty-lines": [ // 最大空行数
            "error", {
                "max": 2
            }
        ],
        "block-spacing": [ // 大括号两边预留空格
            "error",
            "always"
        ],
        "array-bracket-spacing": [2, 'never'],
        "brace-style": [2, '1tbs', { 'allowSingleLine': true }], // java风格的大括号
        "comma-dangle": [2, 'never'], // 对象最后一个key不允许带 ‘,’
        "comma-spacing": [ // 逗号前后的空格
            2, {
                'before': false,
                'after': true
            }
        ],
        "comma-style": 'off', // 逗号在行尾
        "linebreak-style": [
            "error",
            "unix" // 换行使用LF
        ],
        "quotes": 'off',
        "no-extra-semi": "error", // 禁止使用分号
        "semi-spacing": [ // 分号前后空格
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "no-console": "off",
        "eol-last": "off",
        'linebreak-style': ["off", "windows"],
        'no-tabs': 'off'
    },
    globals: {
        App: true,
        Page: true,
        wx: true,
        getApp: true,
        getPage: true,
        requirePlugin: true
    }
}