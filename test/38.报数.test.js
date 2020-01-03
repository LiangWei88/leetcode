const assert = require('assert');
const { countAndSay, convertDesc } = require('../src/38.报数')

describe('38.报数', () => {
  it('存在主函数', () => {
    assert.equal(typeof countAndSay, 'function', '必须导出一个函数')
    assert.equal(typeof convertDesc, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.strictEqual(convertDesc("1"), "11")
    assert.strictEqual(convertDesc("11"), "21")
    assert.strictEqual(convertDesc("111111111"), "91")
    assert.strictEqual(convertDesc("12"), "1112")
    assert.strictEqual(convertDesc("12222"), "1142")
    assert.strictEqual(convertDesc("11112"), "4112")
    assert.strictEqual(countAndSay(1), "1")
    assert.strictEqual(countAndSay(2), "11")
    assert.strictEqual(countAndSay(3), "21")
    assert.strictEqual(countAndSay(4), "1211")
    assert.strictEqual(countAndSay(5), "111221")
  })
})
