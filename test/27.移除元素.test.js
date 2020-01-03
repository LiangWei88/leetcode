const assert = require('assert');
const modInstance = require('../src/27.移除元素')
const removeElement = modInstance.removeElement
const getNewArr = modInstance.getNewArr

describe('27.移除元素', () => {
  it('存在主函数', () => {
    assert.equal(typeof removeElement, 'function', '必须导出一个函数')
    assert.equal(typeof getNewArr, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.strictEqual(removeElement([], 100), 0)
    assert.strictEqual(removeElement([4, 5], 4), 1)
    assert.strictEqual(removeElement([3, 2, 2, 3], 3), 2)
    assert.strictEqual(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5)
    assert.strictEqual(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 200), 8)
    assert.deepStrictEqual(getNewArr([], 200), [])
    assert.deepStrictEqual(getNewArr([4, 5], 4), [5])
    assert.deepStrictEqual(getNewArr([3, 2, 2, 3], 3), [2, 2])
    assert.deepStrictEqual(getNewArr([0, 1, 2, 2, 3, 0, 4, 2], 2), [0, 1, 3, 0, 4])
    assert.deepStrictEqual(getNewArr([0, 1, 2, 2, 3, 0, 4, 2], 200), [0, 1, 2, 2, 3, 0, 4, 2])
  })
})
