const assert = require('assert');
const modInstance = require('../src/21.合并两个有序链表');
const mergeTwoLists = modInstance.mergeTwoLists
const addNode = modInstance.addNode;
const ListNode = modInstance.ListNode
const recursion = modInstance.recursion

describe('21.合并两个有序链表', () => {
  it('存在函数', () => {
    assert.equal(typeof modInstance, 'object')
    assert.equal(typeof mergeTwoLists, 'function')
    assert.equal(typeof addNode, 'function')
    assert.equal(typeof recursion, 'function')
  })
  it('ListNode 附属构造器', () => {
    const node = new ListNode(1);
    assert.strictEqual(node.val, 1);
    assert.strictEqual(node.next, null);
  })
  it('根据两个表val大小,添加到新表', () => {
    const nodeMain = new ListNode(1)
    const node1 = new ListNode(2);
    node1.next = new ListNode(3);
    const node2 = new ListNode(3)
    node2.next = new ListNode(4);
    const addNodeRes = addNode(nodeMain, node1, node2);
    assert.strictEqual(addNodeRes.currentNode.val, 2)
    assert.strictEqual(addNodeRes.currentNode.next, null)
  })
  it('递归添加', () => {
    const nodeMain = new ListNode(1)
    const node1 = new ListNode(2);
    const node2 = new ListNode(3)
    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);
    console.log(expected);

    assert.deepStrictEqual(recursion(
      nodeMain,
      nodeMain,
      node1,
      node2
    ),
      expected)
  });

  it('递归添加2', () => {
    const nodeMain = new ListNode(1)
    const node1 = new ListNode(2);
    node1.next = new ListNode(3);
    const node2 = new ListNode(3)
    node2.next = new ListNode(4);
    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);
    expected.next.next.next = new ListNode(3);
    expected.next.next.next.next = new ListNode(4);
    console.log(expected);

    assert.deepStrictEqual(recursion(
      nodeMain,
      nodeMain,
      node1,
      node2
    ),
      expected)
  });

  it('合并11', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(1)

    const expected = new ListNode(1);
    expected.next = new ListNode(1);
    console.log(expected);

    assert.deepStrictEqual(mergeTwoLists(
      node1,
      node2
    ),
      expected)
  });

  it('合并2334', () => {
    const node1 = new ListNode(2);
    node1.next = new ListNode(3);
    const node2 = new ListNode(3)
    node2.next = new ListNode(4);

    const expected = new ListNode(2);
    expected.next = new ListNode(3);
    expected.next.next = new ListNode(3);
    expected.next.next.next = new ListNode(4);
    console.log(expected);

    assert.deepStrictEqual(mergeTwoLists(
      node1,
      node2
    ),
      expected)
  });
})
