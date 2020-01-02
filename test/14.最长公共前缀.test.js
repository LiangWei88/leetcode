const assert = require('assert');
const modInstance = require('../src/14.最长公共前缀')

describe('14.最长公共前缀', () => {
  it('存在主函数', () => {
    assert.equal(typeof modInstance, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.equal(modInstance(["flower", "flow", "flight"]), "fl", 'modInstance(["flower","flow","flight"])')
    assert.equal(modInstance(["dog", "racecar", "car"]), "", 'modInstance(["dog","racecar","car"])')
    assert.equal(modInstance([]), "", 'modInstance([])')
    // assert.equal(modInstance(0), true, 'modInstance(0)')
  })
})
