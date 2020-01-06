/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (51.63%)
 * Likes:    279
 * Dislikes: 0
 * Total Accepted:    55.2K
 * Total Submissions: 106.8K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let numA
    let numB
    if (a.length >= 53 || b.length >= 53) {
        numA = BigInt("0b" + a)
        numB = BigInt("0b" + b)
    } else {
        numA = parseInt(a, 2)
        numB = parseInt(b, 2)
    }
    return (numA + numB).toString(2)
};
module.exports = {
    addBinary
}
// @lc code=end

