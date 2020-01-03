const assert = require('assert');
const modInstance = require('../src/35.搜索插入位置')

describe('35.搜索插入位置', () => {
  it('存在主函数', () => {
    assert.equal(typeof modInstance, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.equal(modInstance([1, 3, 5, 6], 5), 2, 'modInstance([1,3,5,6], 5)')
    assert.equal(modInstance([1, 3, 5, 6], 2), 1, 'modInstance([1,3,5,6], 2)')
    assert.equal(modInstance([1, 3, 5, 6], 7), 4, 'modInstance([1,3,5,6], 7)')
    assert.equal(modInstance([1, 3, 5, 6], 0), 0, 'modInstance([1,3,5,6], 0)')
    assert.equal(modInstance([], 999), 0, 'modInstance([],999)')
  })
})
