module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
         // 【警告】提交的消息主体部分前应该有一个空行
        "body-leading-blank": [1, "always"],
        // condition: body lines has value or less characters
        "body-max-line-length": [2, "always", 100],
        "footer-leading-blank": [1, "always"],
         // 消息头部不能超过100字符，超过error
        "footer-max-line-length": [2, "always", 100],
        // 消息头部不能超过100字符，超过error
        "header-max-length": [2, "always", 100],
        // 主体部分忽略大小写
        "subject-case": [0],
        /**
         * type 用来描述本次提交的改动类型，可选值及对应含义如下：
         * feat: 新增功能
         * fix: 修复 bug
         * docs: 文档相关的改动
         * style: 对代码的格式化改动，代码逻辑并未产生任何变化(例如代码缩进，分号的移除和添加)
         * test: 新增或修改测试用例
         * refactor: 重构代码或其他优化举措
         * chore: 项目工程方面的改动，代码逻辑并未产生任何变化
         * revert: 恢复之前的提交
        */
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "style",
                "test",
                "refactor",
                "chore",
                "revert",
            ],
        ],
    },
};
