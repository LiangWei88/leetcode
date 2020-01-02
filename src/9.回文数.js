/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var str1 = x + '';
    var str2 = str1.split('').reverse().join('');
    return str1 == str2;
};
module.exports = isPalindrome
// @lc code=end

