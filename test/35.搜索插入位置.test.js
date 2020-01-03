const assert = require('assert');
const modInstance = require('../src/35.搜索插入位置')

describe('35.搜索插入位置', () => {
  it('存在主函数', () => {
    assert.equal(typeof modInstance, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.equal(modInstance([1, 3, 5, 6], 5), 2)
    assert.equal(modInstance([1, 3, 5, 6], 2), 1)
    assert.equal(modInstance([1, 3, 5, 6], 7), 4)
    assert.equal(modInstance([1, 3, 5, 6], 0), 0)
    assert.equal(modInstance([], 999), 0)
    assert.equal(modInstance([1, 2, 3], 999), 3)
    assert.equal(modInstance([1], 999), 1)
    assert.equal(modInstance([1], 1), 0)
    assert.equal(modInstance([1, 2], 999), 2)
    assert.equal(modInstance([1, 2], 2), 1)
  })
})
