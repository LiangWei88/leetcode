/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.32%)
 * Likes:    1290
 * Dislikes: 0
 * Total Accepted:    176.3K
 * Total Submissions: 437.1K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const strPair = {
    ')': '(',
    ']': '[',
    '}': '{',
}
function parseStr(workingArr, currentStr) {
    let isValid = true

    if (!strPair[currentStr]) {
        workingArr.push(currentStr);
    } else {
        const lastChar = workingArr.pop();
        if (lastChar !== strPair[currentStr]) {
            isValid = false
        }
    }

    return {
        workingArr,
        isValid
    }
}
var isValid = function (s) {
    let workingArr = []
    let isValid = true
    for (let index = 0; index < s.length; index++) {
        const currentStr = s[index];
        isValid = parseStr(workingArr, currentStr).isValid;
        if (!isValid) {
            break;
        }
    }
    return isValid && workingArr.length === 0
};

module.exports = {
    isValid,
    parseStr
}
// @lc code=end

