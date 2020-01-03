/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (48.46%)
 * Likes:    1462
 * Dislikes: 0
 * Total Accepted:    139.2K
 * Total Submissions: 286.8K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start

var reduceItem = function (arr) {
    return arr.reduce((acc, current, index) => {

        if (arr.length > 0) {
            if (current * acc[acc.length - 1] > 0) {
                acc[acc.length - 1] += current;
            } else {
                acc.push(current)
            }
        } else if (current > 0) {
            acc.push(current);
        }

        return acc
    }, [])
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.every(el => el === 0)) {
        return 0
    }
    if (nums.every(el => el < 0)) {
        nums.sort((a, b) => b - a)
        return nums[0]
    }
    if (nums.every(el => el > 0)) {
        return nums.reduce((sum, current) => sum += current)
    }

    const newArr = reduceItem(nums);

    let maxSum = newArr[0];
    for (let begin = 0; begin < newArr.length; begin++) {
        if (newArr[begin] < 0) {
            continue
        }

        let currentSum = newArr[begin];
        if (currentSum > maxSum) {
            maxSum = currentSum
        }

        const lastIndex = newArr.length - 1
        if (lastIndex > begin) {
            for (let end = begin + 1; end < newArr.length; end++) {

                currentSum += newArr[end]
                if (currentSum > maxSum) {
                    maxSum = currentSum
                }

            }
        }

    }
    return maxSum
};
module.exports = {
    maxSubArray,
    reduceItem
}
// @lc code=end

