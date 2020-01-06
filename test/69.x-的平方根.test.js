const assert = require('assert');
const { mySqrt } = require('../src/69.x-的平方根')

describe('69.x-的平方根', () => {
  it('存在主函数', () => {
    assert.equal(typeof mySqrt, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.strictEqual(mySqrt(0), 0)
    assert.strictEqual(mySqrt(1), 1)
    assert.strictEqual(mySqrt(2), 1)
    assert.strictEqual(mySqrt(3), 1)
    assert.strictEqual(mySqrt(4), 2)
    assert.strictEqual(mySqrt(8), 2)
    assert.strictEqual(mySqrt(9), 3)
    assert.strictEqual(mySqrt(10), 3)
  })
})
