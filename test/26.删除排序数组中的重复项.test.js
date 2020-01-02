const assert = require('assert');
const modInstance = require('../src/26.删除排序数组中的重复项')

describe('26.删除排序数组中的重复项', () => {
  it('存在主函数', () => {
    assert.equal(typeof modInstance, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.equal(modInstance([]), 0)
    assert.equal(modInstance([1, 1, 2]), 2)
    assert.equal(modInstance([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)
  })
})
