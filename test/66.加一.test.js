const assert = require('assert');
const { plusOne } = require('../src/66.加一')

describe('66.加一', () => {
  it('存在主函数', () => {
    assert.equal(typeof plusOne, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.deepStrictEqual(plusOne([1, 2, 3]), [1, 2, 4])
    assert.deepStrictEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
    assert.deepStrictEqual(plusOne([0]), [1])
    assert.deepStrictEqual(plusOne([9]), [1, 0])
    assert.deepStrictEqual(plusOne([9, 9]), [1, 0, 0])
    assert.deepStrictEqual(plusOne([4, 9, 9]), [5, 0, 0])
    assert.deepStrictEqual(plusOne([4, 4, 9]), [4, 5, 0])
    assert.deepStrictEqual(plusOne([4, 4, 9, 4, 4, 9, 4, 4, 9, 4, 4, 9, 4, 4, 9, 4, 4, 9, 4, 4, 9]), [4, 4, 9, 4, 4, 9, 4, 4, 9, 4, 4, 9, 4, 4, 9, 4, 4, 9, 4, 5, 0])
    assert.deepStrictEqual(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]), [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4])
  })
})
