/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (35.62%)
 * Likes:    816
 * Dislikes: 0
 * Total Accepted:    165.7K
 * Total Submissions: 465.3K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let minLength;
    let result = '';
    for (const iterator of strs) {
        if (!iterator.length >= minLength || !minLength) {
            minLength = iterator.length;
        }
    }
    for (let index = 0; index < minLength; index++) {
        const set = new Set();
        let current = '';
        for (const iterator of strs) {
            set.add(iterator[index])
            if (set.size > 1) {
                current = ''
                break
            } else if (!current) {
                current = iterator[index];
            }
        }
        if (!current) {
            break
        } else {
            result += current
        }
    }
    return result;
};
longestCommonPrefix(["flower", "flow", "flight"]);
module.exports = longestCommonPrefix
// @lc code=end

