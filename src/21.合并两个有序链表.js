/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (58.84%)
 * Likes:    786
 * Dislikes: 0
 * Total Accepted:    159.3K
 * Total Submissions: 270.6K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class PrivateListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

if (typeof ListNode == 'undefined') {
    var ListNode = PrivateListNode
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addNode(currentNode, l1, l2) {
    if (!l1 || !l2) {
        return {
            currentNode,
            l1,
            l2
        }
    }
    if (l1.val <= l2.val) {
        currentNode.next = new ListNode(l1.val)
        l1 = l1.next
    } else {
        currentNode.next = new ListNode(l2.val)
        l2 = l2.next
    }
    return {
        currentNode: currentNode.next,
        l1,
        l2
    }
}
function recursion(fullList, currentNode, l1, l2) {
    if (!l1 || !l2) {
        currentNode.next = l1 || l2
        return fullList;
    } else {
        const nextStep = addNode(currentNode, l1, l2);
        return recursion(
            fullList,
            nextStep.currentNode,
            nextStep.l1,
            nextStep.l2
        )
    }
}
var mergeTwoLists = function (l1, l2) {

    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }

    let newListNode;

    if (l1.val <= l2.val) {
        newListNode = new ListNode(l1.val)
        l1 = l1.next
    } else {
        newListNode = new ListNode(l2.val)
        l2 = l2.next
    }

    return recursion(newListNode, newListNode, l1, l2);
};

module.exports = {
    mergeTwoLists,
    addNode,
    ListNode,
    recursion
}
// @lc code=end

