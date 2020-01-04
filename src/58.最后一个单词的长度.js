/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (31.87%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    59.7K
 * Total Submissions: 186.7K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (s.length === 0) {
        return 0;
    }

    let trimStr = s;
    let end = trimStr.length - 1

    if (trimStr[end] === ' ') {
        trimStr = s.trimRight();
        if (trimStr.length <= 0) {
            return 0;
        }
        end = trimStr.length - 1
    }

    let length = 0
    for (let index = end; index >= 0; index--) {
        if (trimStr[index] !== ' ') {
            length++
        } else {
            break;
        }

    }
    return length;
};

module.exports = { lengthOfLastWord }
// @lc code=end

