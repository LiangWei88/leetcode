const assert = require('assert');
const modInstance = require('../src/9.回文数')

describe('9.回文数', () => {
  it('存在主函数', () => {
    assert.equal(typeof modInstance, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.equal(modInstance(0), true, 'modInstance(0)')
    assert.equal(modInstance(5), true, 'modInstance(5)')
    assert.equal(modInstance(121), true, 'modInstance(121)')
    assert.equal(modInstance(-121), false, 'modInstance(-121)')
    assert.equal(modInstance(10), false, 'modInstance(10)')
  });
})
