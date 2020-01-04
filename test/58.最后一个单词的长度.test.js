const assert = require('assert');
const { lengthOfLastWord } = require('../src/58.最后一个单词的长度')

describe('58.最后一个单词的长度', () => {
  it('存在主函数', () => {
    assert.equal(typeof lengthOfLastWord, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.strictEqual(lengthOfLastWord("Hello World"), 5)
    assert.strictEqual(lengthOfLastWord("Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World a"), 1)
    assert.strictEqual(lengthOfLastWord("Hello W"), 1)
    assert.strictEqual(lengthOfLastWord("Hello "), 5)
    assert.strictEqual(lengthOfLastWord("H"), 1)
    assert.strictEqual(lengthOfLastWord("a "), 1)
    assert.strictEqual(lengthOfLastWord(" "), 0)
    assert.strictEqual(lengthOfLastWord(""), 0)
  })
})
