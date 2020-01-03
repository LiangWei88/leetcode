const assert = require('assert');
const modInstance = require('../src/28.实现-str-str')

describe('28.实现-str-str', () => {
  it('存在主函数', () => {
    assert.equal(typeof modInstance, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.equal(modInstance("hello", "ll"), 2)
    assert.equal(modInstance("aaaa", "lla"), -1)
    assert.equal(modInstance("aaaa", ""), 0)
    assert.equal(modInstance("", ""), 0)
    assert.equal(modInstance("", "123fd1sf"), -1)
  })
})
