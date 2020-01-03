/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (53.78%)
 * Likes:    366
 * Dislikes: 0
 * Total Accepted:    65.2K
 * Total Submissions: 121.1K
 * Testcase Example:  '1'
 *
 * 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。
 * 
 * 注意：整数序列中的每一项将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertDesc = function (numStr) {
    const resArr = []
    if (numStr.length === 1) {
        resArr.push('11')
    } else {
        let currentCount = 1
        for (let index = 1; index < numStr.length; index++) {

            if (numStr[index] === numStr[index - 1]) {
                currentCount++
            } else {
                resArr.push(currentCount + '' + numStr[index - 1])
                currentCount = 1;
            }
            if (index == numStr.length - 1) {
                resArr.push(currentCount + '' + numStr[index])
            }

        }
    }

    return resArr.join('')
}
var countAndSay = function (n) {
    let current = '1';
    for (let index = 2; index <= n; index++) {
        current = convertDesc(current);
    }
    return current
};
module.exports = {
    countAndSay,
    convertDesc
}
// @lc code=end

